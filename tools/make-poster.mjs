#!/usr/bin/env node
/* Regenerate the A1 poster from the live site.
 *
 *   node tools/make-poster.mjs
 *
 * Three passes, because the poster sizes itself:
 *   1. open poster.html and measure how tall the map figure actually is
 *   2. drive the real website, reframe the camera, capture the estate at that exact
 *      aspect, and export where every pin landed
 *   3. render the poster to PDF and a PNG preview on the Desktop
 *
 * The ten come from actions.js, which the website also reads, so the poster cannot
 * drift from the page its QR code points at.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const BUILD = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(os.homedir(), 'Desktop');
const PDF = path.join(OUT_DIR, 'Chateau-Poster-A1.pdf');
const PNG = path.join(OUT_DIR, 'Chateau-Poster-A1-preview.png');
const FLAT = path.join(OUT_DIR, 'G11-Poster-A1-flat.jpg');
const SITE_URL = process.env.SITE_URL || 'https://edav8.github.io/G11-Poster/';
const PULL_BACK = Number(process.env.PULL_BACK || 1.06);
const TILT_DOWN = Number(process.env.TILT_DOWN || 60);

const A1 = { width: 2245, height: 3179 };   // A1 at 96dpi
const MAP_W = 1680;                          // capture width before deviceScaleFactor

const TYPES = {
  '.html':'text/html', '.js':'text/javascript', '.mjs':'text/javascript', '.css':'text/css',
  '.png':'image/png', '.jpg':'image/jpeg', '.mp4':'video/mp4', '.pdf':'application/pdf',
  '.json':'application/json', '.svg':'image/svg+xml'
};

function serve(root){
  return new Promise(resolve => {
    const s = http.createServer((req, res) => {
      const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
      const file = path.join(root, rel);
      if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
      fs.readFile(file, (err, buf) => {
        if (err) { res.writeHead(404).end('not found'); return; }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
        res.end(buf);
      });
    });
    s.listen(0, '127.0.0.1', () => resolve({ server: s, port: s.address().port }));
  });
}

const { server, port } = await serve(BUILD);
const base = 'http://127.0.0.1:' + port;
const posterUrl = base + '/poster.html?url=' + encodeURIComponent(SITE_URL);
console.log('serving ' + BUILD + ' on ' + base);

const browser = await chromium.launch({
  channel: 'chrome',
  args: ['--enable-unsafe-swiftshader', '--use-angle=default', '--hide-scrollbars']
});

/* DPI for the flat raster. Canva's PDF importer substitutes fonts, mangles word
   spacing and drops the footer's QR and mascot images, so the Canva deliverable is a
   pixel-perfect picture of the sheet rather than an import of it. 150dpi is the most
   we can send: A1 at 300dpi is 7016x9933 and far over the upload limit. */
const CANVA_DPI = Number(process.env.CANVA_DPI || 150);
const SCALE = CANVA_DPI / 96;

async function posterPage(scale = 1){
  const ctx = await browser.newContext({ viewport: A1, deviceScaleFactor: scale });
  const p = await ctx.newPage();
  p.on('console', m => { if (m.type() === 'error') console.log('  [poster]', m.text()); });
  await p.goto(posterUrl, { waitUntil: 'networkidle' });
  await p.waitForFunction(() => window.__posterReady === true, null, { timeout: 25000 });
  await p.evaluate(() => document.fonts.ready);
  return { ctx, page: p };
}

try {
  /* ── 1. how tall is the map figure, really? ──────────────────────────────── */
  const probe = await posterPage();
  const figRatio = await probe.page.evaluate(() => {
    const r = document.querySelector('#fig').getBoundingClientRect();
    return r.height / r.width;
  });
  await probe.ctx.close();
  console.log('map figure aspect ' + figRatio.toFixed(3) + ' (h/w)');

  /* ── 2. the estate, as the website draws it ──────────────────────────────── */
  const mapCtx = await browser.newContext({
    viewport: { width: MAP_W, height: Math.round(MAP_W * figRatio) + 200 },
    deviceScaleFactor: 2
  });
  const map = await mapCtx.newPage();
  map.on('console', m => { if (m.type() === 'error') console.log('  [site]', m.text()); });
  await map.goto(base + '/', { waitUntil: 'load' });

  await map.addStyleTag({ content:
    '.wrap{max-width:none !important}' +
    '.egrid{grid-template-columns:1fr !important}' +
    '.index,.sheet,.stagebar{display:none !important}' });
  await map.evaluate(ratio => {
    const el = document.querySelector('.stagewrap');
    el.style.height = Math.round(el.getBoundingClientRect().width * ratio) + 'px';
    el.style.minHeight = '0';
  }, figRatio);

  await map.waitForFunction(() => {
    const st = document.querySelector('#stage');
    const c = st && st.shadowRoot && st.shadowRoot.querySelector('canvas');
    return !!c && c.width > 0 && document.querySelectorAll('#pins .pin').length > 0;
  }, null, { timeout: 45000 });
  await map.waitForTimeout(3500);

  /* the website frames the palace; the poster wants the estate around it */
  await map.evaluate(a => {
    const e = window.__estate; if (!e || !e.ctl) return;
    /* park the mascot at a chosen point so the printed plan is the same every run */
    if (e.mascot) e.mascotT = 0.07;
    const p = e.cam.position, t = e.ctl.target;
    p.set(t.x + (p.x - t.x) * a.k, t.y + (p.y - t.y) * a.k, t.z + (p.z - t.z) * a.k);
    /* drop the look-at point so the estate sits high in frame instead of under a
       third of a sheet of empty sky */
    t.y -= a.tilt;
    e.ctl.update();
  }, { k: PULL_BACK, tilt: TILT_DOWN });
  await map.waitForTimeout(1500);

  const pins = await map.evaluate(() => {
    const box = document.querySelector('.stagewrap').getBoundingClientRect();
    return [].slice.call(document.querySelectorAll('#pins .pin')).map(el => {
      const r = el.getBoundingClientRect();
      return {
        i: Number(el.dataset.i),
        x: (r.left + r.width / 2 - box.left) / box.width,
        y: (r.top + r.height / 2 - box.top) / box.height,
        off: el.classList.contains('off')
      };
    });
  });
  fs.writeFileSync(path.join(BUILD, 'poster-pins.json'), JSON.stringify(pins, null, 1));

  /* the poster draws its own numbered markers, so shoot the estate clean */
  await map.addStyleTag({ content: '#pins{opacity:0 !important}' });
  await map.waitForTimeout(300);
  const mapPath = path.join(BUILD, 'poster-map.png');
  await map.locator('.stagewrap').screenshot({ path: mapPath });
  console.log('captured poster-map.png · ' + pins.length + ' pin positions');
  await mapCtx.close();

  /* ── 3. the poster ───────────────────────────────────────────────────────── */
  const out = await posterPage();
  await out.page.waitForFunction(() => {
    const i = document.getElementById('map');
    return i && i.complete && i.naturalWidth > 0;
  }, null, { timeout: 20000 });
  await out.page.waitForTimeout(700);

  /* An A1 sheet silently swallows anything past 841 mm, and a callout that runs off the
     map just disappears. Fail loudly rather than ship a poster missing a solution. */
  const over = await out.page.evaluate(() => {
    const H = document.documentElement.getBoundingClientRect().height;
    const foot = document.querySelector('.foot').getBoundingClientRect();
    const fig = document.querySelector('#fig').getBoundingClientRect();
    let spill = 0, clipped = 0;
    /* the cards can report a clean height while the GRID they sit in is overflowing a
       squeezed section: check the container, which is what actually clips on the sheet */
    for (const g of document.querySelectorAll('.recs .grid')) {
      if (g.scrollHeight > g.clientHeight + 4) clipped++;
    }
    for (const c of document.querySelectorAll('.recs .r')) {
      if (c.scrollHeight > c.clientHeight + 4) clipped++;
    }
    /* sections must not overlap: each one's bottom above the next one's top */
    let overlap = 0;
    const secs = [].slice.call(document.querySelectorAll('body > header, body > section, body > footer'));
    for (let k = 0; k < secs.length - 1; k++) {
      if (secs[k].getBoundingClientRect().bottom > secs[k+1].getBoundingClientRect().top + 1) overlap++;
    }
    const last = secs[secs.length-1];
    if (last && last.getBoundingClientRect().bottom > H + 1) overlap++;
    for (const t of document.querySelectorAll('.tag')) {
      const r = t.getBoundingClientRect();
      if (r.left < 0 || r.right > document.documentElement.clientWidth) spill++;
    }
    return { sheet: Math.round(H), content: Math.round(document.body.scrollHeight),
             spill, clipped, overlap, cards: document.querySelectorAll('.recs .r').length };
  });
  if (over.content > over.sheet + 2 || over.spill > 2 || over.clipped > 0) {
    console.log('\n  !! ' + JSON.stringify(over));
    console.log('     a card overruns the footer, a label falls off the map, or text is clipped.\n');
  } else {
    console.log('  fits: ' + over.cards + ' cards, content ' + over.content + 'px of ' + over.sheet + 'px' + ', clipped ' + over.clipped + ', overlap ' + over.overlap + ', spill ' + over.spill);
  }

  await out.page.pdf({ path: PDF, width: '594mm', height: '841mm', printBackground: true, pageRanges: '1' });
  await out.page.screenshot({ path: PNG, fullPage: false });
  await out.ctx.close();

  /* the flat sheet, for Canva and for anywhere else that needs one picture */
  const flat = await posterPage(SCALE);
  await flat.page.screenshot({ path: FLAT, fullPage: false, type: 'jpeg', quality: 92 });
  await flat.ctx.close();

  const kb = f => Math.round(fs.statSync(f).size / 1024) + 'K';
  console.log('\n  PDF  ' + PDF + '  (' + kb(PDF) + ')');
  console.log('  PNG  ' + PNG + '  (' + kb(PNG) + ')');
  console.log('  FLAT ' + FLAT + '  (' + kb(FLAT) + ', ' + CANVA_DPI + 'dpi)\n');
} finally {
  await browser.close();
  server.close();
}
