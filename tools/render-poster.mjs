#!/usr/bin/env node
/* Render poster.html to A1 PDF + PNG preview on the Desktop.
 * No 3D capture pass: this poster uses the booklet's own station map. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const BUILD = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = process.env.OUT_DIR || path.join(BUILD, 'poster');
const PDF = path.join(OUT, 'G11-Poster-A1.pdf');
const PNG = path.join(OUT, 'G11-Poster-A1-preview.png');
const SITE_URL = process.env.SITE_URL || 'https://claude.ai/artifact/E24gp3HGPTqD8DwQygkqaw';
const TYPES = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png',
  '.jpg':'image/jpeg','.json':'application/json','.pdf':'application/pdf','.svg':'image/svg+xml' };

const server = http.createServer((req,res)=>{
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/,'') || 'index.html';
  const f = path.join(BUILD, rel);
  if (!f.startsWith(BUILD)) { res.writeHead(403).end(); return; }
  fs.readFile(f,(e,b)=>{ if(e){res.writeHead(404).end();return;}
    res.writeHead(200,{'Content-Type':TYPES[path.extname(f)]||'application/octet-stream'}); res.end(b); });
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base = 'http://127.0.0.1:' + server.address().port;

const browser = await chromium.launch({ channel:'chrome', args:['--hide-scrollbars'] });
try {
  const ctx = await browser.newContext({ viewport:{width:2245,height:3179}, deviceScaleFactor:1 });
  const p = await ctx.newPage();
  p.on('console', m => { if (m.type()==='error') console.log('  [poster]', m.text()); });
  await p.goto(base + '/poster/poster.html?url=' + encodeURIComponent(SITE_URL), { waitUntil:'networkidle' });
  await p.waitForFunction(()=>window.__posterReady===true, null, {timeout:25000});
  await p.evaluate(()=>document.fonts.ready);
  await p.waitForFunction(()=>{const i=document.getElementById('map');return i&&i.complete&&i.naturalWidth>0;},null,{timeout:20000});
  await p.waitForTimeout(600);

  const fit = await p.evaluate(()=>{
    const H = document.documentElement.getBoundingClientRect().height;
    let clipped = 0;
    for (const el of document.querySelectorAll('.r, .step, .ph')) {
      if (el.scrollHeight > el.clientHeight + 1) clipped++;
    }
    return { sheet: Math.round(H), content: Math.round(document.body.scrollHeight), clipped };
  });
  console.log(fit.content > fit.sheet + 2 || fit.clipped
    ? '  !! overflows: ' + JSON.stringify(fit)
    : '  fits: content ' + fit.content + 'px of ' + fit.sheet + 'px');

  await p.pdf({ path:PDF, width:'594mm', height:'841mm', printBackground:true, pageRanges:'1' });
  await p.screenshot({ path:PNG });
  const kb = f => Math.round(fs.statSync(f).size/1024)+'K';
  console.log('\n  PDF  ' + PDF + '  (' + kb(PDF) + ')');
  console.log('  PNG  ' + PNG + '  (' + kb(PNG) + ')\n');
} finally { await browser.close(); server.close(); }
