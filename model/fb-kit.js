// Shared materials + primitive helpers. x = east, z = south, y = up, meters.
export function makeKit(THREE) {
  const mat = (name, color, rough = 0.85, metal = 0) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
    m.name = name; return m;
  };
  const M = {
    stone: mat('warm_stone', 0xe6d5b3),
    trim: mat('pale_stone_trim', 0xf4ebd8),
    slate: mat('slate_blue_roof', 0x6c8198, 0.7),
    brick: mat('brick_chimney', 0xb8674b),
    lawn: mat('lawn', 0x9cc872, 0.95),
    hedge: mat('clipped_hedge', 0x5e9b4b, 0.95),
    treeA: mat('tree_canopy', 0x5a9a48, 0.95),
    treeB: mat('tree_canopy_dark', 0x447f3c, 0.95),
    treeC: mat('tree_canopy_olive', 0x6b8a3e, 0.95),
    trunk: mat('trunk', 0x8a6a4a),
    gravel: mat('gravel', 0xece3cf, 1),
    water: mat('water', 0x86bcd8, 0.25, 0.05),
    plinth: mat('map_plinth', 0xf7f4ee, 1),
    base: mat('plinth_edge', 0xd9d1c2, 1),
    pave: mat('paving', 0xdedad2, 1),
    glass: mat('window_glass', 0x3d4a5a, 0.35),
    roofTown: mat('town_roof', 0x8a7f78, 0.8),
    render: mat('town_render', 0xeee6d8, 0.95),
    boat: mat('boat_wood', 0x9a6a3e, 0.7),
  };
  const g = {
    box: new THREE.BoxGeometry(1, 1, 1),
    ico: new THREE.IcosahedronGeometry(1, 1),
    blob: new THREE.SphereGeometry(1, 14, 10),
    cyl: new THREE.CylinderGeometry(1, 1, 1, 32),
    cyl8: new THREE.CylinderGeometry(1, 1, 1, 8),
    cone4: new THREE.ConeGeometry(Math.SQRT1_2, 1, 4).rotateY(Math.PI / 4),
    cone8: new THREE.ConeGeometry(1, 1, 8),
    cone: new THREE.ConeGeometry(1, 1, 16),
  };
  let n = 0;
  const mesh = (parent, name, geo, m, x, y, z, sx = 1, sy = 1, sz = 1, ry = 0) => {
    const o = new THREE.Mesh(geo, m); o.name = name;
    o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.rotation.y = ry;
    parent.add(o); return o;
  };
  // Flat slab from x1..x2, z1..z2, top at y.
  const plate = (p, name, m, x1, z1, x2, z2, y = 0, t = 0.4) =>
    mesh(p, name, g.box, m, (x1 + x2) / 2, y - t / 2, (z1 + z2) / 2, Math.abs(x2 - x1), t, Math.abs(z2 - z1));
  const disc = (p, name, m, x, z, rx, rz, y = 0, t = 0.4) =>
    mesh(p, name, g.cyl, m, x, y - t / 2, z, rx, t, rz);
  // Polygon slab from [[x,z],...]
  const poly = (p, name, m, pts, y = 0, t = 0.4) => {
    const s = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geo = new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: false, curveSegments: 24 }).rotateX(-Math.PI / 2);
    return mesh(p, name, geo, m, 0, y - t, 0);
  };
  // Smooth closed blob through control points (for ponds, lawns).
  const blob = (p, name, m, pts, y = 0, t = 0.4) => {
    const c = new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), true, 'centripetal');
    return poly(p, name, m, c.getPoints(96).map(v => [v.x, v.z]), y, t);
  };
  // Merge many boxes [x,y,z,sx,sy,sz] into one mesh (keeps OBJ export light).
  const boxes = (p, name, m, list) => merge(p, name, m, g.box, list);
  const merge = (p, name, m, src, list) => {
    if (!list.length) return;
    const pa = src.attributes.position.array, na = src.attributes.normal.array, ia = src.index.array, nv = pa.length / 3;
    const pos = new Float32Array(list.length * pa.length), nor = new Float32Array(list.length * na.length), idx = new Uint32Array(list.length * ia.length);
    list.forEach(([x, y, z, sx, sy, sz], i) => {
      for (let v = 0; v < nv; v++) {
        pos[(i * nv + v) * 3] = pa[v * 3] * sx + x; pos[(i * nv + v) * 3 + 1] = pa[v * 3 + 1] * sy + y; pos[(i * nv + v) * 3 + 2] = pa[v * 3 + 2] * sz + z;
        nor.set(na.subarray(v * 3, v * 3 + 3), (i * nv + v) * 3);
      }
      for (let j = 0; j < ia.length; j++) idx[i * ia.length + j] = ia[j] + i * nv;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); geo.setIndex(new THREE.BufferAttribute(idx, 1));
    const o = new THREE.Mesh(geo, m); o.name = name; p.add(o); return o;
  };
  // Window grid on the two long faces (local x = length, z = depth)
  const windows = (p, name, len, w, h, floors, step = 4.2, sides = [-1, 1], skip = 0) => {
    const list = [], fh = h / floors, ww = Math.min(1.7, step * 0.34), wh = fh * 0.5;
    for (let f = 0; f < floors; f++) {
      const y = fh * f + fh * (f === 0 ? 0.48 : 0.52) + 0.6;
      for (let d = -len / 2 + step * 0.75; d < len / 2 - step * 0.5 + 0.01; d += step)
        for (const s of sides) list.push([d, y, s * (w / 2 + 0.06), ww, wh, 0.14], [d, y + wh / 2 + 0.25, s * (w / 2 + 0.1), ww + 0.5, 0.35, 0.16]);
    }
    const glass = list.filter((_, i) => i % 2 === 0), lintel = list.filter((_, i) => i % 2 === 1);
    boxes(p, name + '_windows', M.glass, glass); boxes(p, name + '_lintels', M.trim, lintel);
  };
  // Palace wing along a segment: walls, cornice, mansard roof, chimneys.
  const wing = (p, name, x1, z1, x2, z2, w = 14, h = 14, o = {}) => {
    const grp = new THREE.Group(); grp.name = name; p.add(grp);
    const len = Math.hypot(x2 - x1, z2 - z1), ang = -Math.atan2(z2 - z1, x2 - x1);
    grp.position.set((x1 + x2) / 2, 0, (z1 + z2) / 2); grp.rotation.y = ang;
    mesh(grp, name + '_walls', g.box, M.stone, 0, h / 2, 0, len, h, w);
    mesh(grp, name + '_plinth', g.box, M.trim, 0, 0.9, 0, len + 0.3, 1.8, w + 0.3);
    mesh(grp, name + '_cornice', g.box, M.trim, 0, h - 0.4, 0, len + 0.6, 0.8, w + 0.8);
    windows(grp, name, len, w, h - 1, o.floors ?? 2, o.step ?? 5.2);
    for (let i = 1; i < (o.floors ?? 2); i++)
      mesh(grp, name + '_string_' + i, g.box, M.trim, 0, (h / (o.floors ?? 2)) * i, 0, len + 0.2, 0.5, w + 0.2);
    const rh = o.roof ?? w * 0.6, top = w * 0.18, e = 0.7;
    const s = new THREE.Shape([new THREE.Vector2(-w / 2 - e, 0), new THREE.Vector2(w / 2 + e, 0),
      new THREE.Vector2(top, rh), new THREE.Vector2(-top, rh)]);
    const rg = new THREE.ExtrudeGeometry(s, { depth: len + 2 * e, bevelEnabled: false })
      .translate(0, 0, -(len + 2 * e) / 2).rotateY(Math.PI / 2);
    mesh(grp, name + '_roof', rg, M.slate, 0, h, 0);
    // dormers
    const step = o.dormer ?? 7;
    for (let d = -len / 2 + step / 2 + 2; d < len / 2 - 2; d += step)
      for (const sd of [-1, 1])
        mesh(grp, name + '_dormer', g.box, M.trim, d, h + rh * 0.32, sd * (w / 2 - w * 0.12), 1.6, 2.6, 1.4);
    const nc = Math.max(1, Math.floor(len / 20));
    for (let i = 0; i < nc; i++) {
      const d = -len / 2 + (len / nc) * (i + 0.5);
      mesh(grp, name + '_chimney', g.box, M.brick, d, h + rh + 1.4, (i % 2 ? 1 : -1) * top * 0.4, 1.8, 4.6, 3.2);
    }
    return grp;
  };
  // Square pavilion with steep pyramid roof.
  const pavilion = (p, name, x, z, w, d, h, o = {}) => {
    const grp = new THREE.Group(); grp.name = name; grp.position.set(x, 0, z); grp.rotation.y = o.ry ?? 0; p.add(grp);
    mesh(grp, name + '_walls', g.box, M.stone, 0, h / 2, 0, w, h, d);
    mesh(grp, name + '_cornice', g.box, M.trim, 0, h - 0.4, 0, w + 0.8, 0.8, d + 0.8);
    const fl = Math.max(1, Math.round(h / 8));
    windows(grp, name, w, d, h - 1, fl, w / 3);
    const side = new THREE.Group(); side.rotation.y = Math.PI / 2; grp.add(side); windows(side, name + '_side', d, w, h - 1, fl, d / 3);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) mesh(grp, name + '_quoin', g.box, M.trim, sx * w / 2, h / 2, sz * d / 2, 1.2, h, 1.2);
    const rh = o.roof ?? Math.max(w, d) * 0.75;
    mesh(grp, name + '_roof', g.cone4, M.slate, 0, h + rh / 2, 0, w + 1.4, rh, d + 1.4);
    for (const sx of [-1, 1]) mesh(grp, name + '_chimney', g.box, M.brick, sx * w * 0.28, h + rh * 0.55, 0, 1.8, rh * 0.55, 3);
    return grp;
  };
  const house = (p, name, x, z, w, d, h, ry = 0) => {
    const grp = new THREE.Group(); grp.name = name; grp.position.set(x, 0, z); grp.rotation.y = ry; p.add(grp);
    mesh(grp, name + '_walls', g.box, M.render, 0, h / 2, 0, w, h, d);
    windows(grp, name, w, d, h - 0.6, Math.max(2, Math.round(h / 3.4)), 3.2, [1]);
    const rh = d * 0.45, s = new THREE.Shape([new THREE.Vector2(-d / 2 - 0.5, 0), new THREE.Vector2(d / 2 + 0.5, 0), new THREE.Vector2(0, rh)]);
    const rg = new THREE.ExtrudeGeometry(s, { depth: w + 0.6, bevelEnabled: false }).translate(0, 0, -(w + 0.6) / 2).rotateY(Math.PI / 2);
    mesh(grp, name + '_roof', rg, M.roofTown, 0, h, 0);
    mesh(grp, name + '_chimney', g.box, M.brick, w * 0.3, h + rh * 0.7, 0, 1.2, rh, 1.6);
  };
  const TB = { trunk: [], treeA: [], treeB: [], treeC: [] };
  const tree = (p, x, z, s = 1, dark = false) => {
    n++; const key = dark ? 'treeB' : (rnd() > 0.7 ? 'treeC' : 'treeA'), h = s * (0.85 + rnd() * 0.4);
    TB.trunk.push([x, 1.9 * h, z, 0.42 * s, 3.8 * h, 0.42 * s]);
    TB[key].push([x, 5.4 * h, z, 3.1 * s, 2.9 * h, 3.1 * s]);
    for (let i = 0; i < 3; i++) { const a = rnd() * 6.28, d = 1.4 * s;
      TB[key].push([x + Math.cos(a) * d, (4.6 + rnd() * 2) * h, z + Math.sin(a) * d, (1.9 + rnd() * 0.6) * s, (1.8 + rnd() * 0.5) * h, (1.9 + rnd() * 0.6) * s]); }
  };
  const flushTrees = p => {
    merge(p, 'tree_trunks', M.trunk, g.cyl8, TB.trunk);
    for (const k2 of ['treeA', 'treeB', 'treeC']) merge(p, 'tree_canopy_' + k2, M[k2], g.blob, TB[k2]);
    for (const k2 in TB) TB[k2] = [];
  };
  const topiary = (p, x, z, s = 1) => { n++; mesh(p, 'topiary_' + n, g.cone, M.hedge, x, 1.6 * s, z, 0.9 * s, 3.2 * s, 0.9 * s); };
  // deterministic RNG
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  return { THREE, M, g, boxes, merge, flushTrees, house, mesh, plate, disc, poly, blob, wing, pavilion, tree, topiary, rnd };
}
