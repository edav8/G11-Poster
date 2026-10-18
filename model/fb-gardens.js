// Gardens, water, park and map base.
export function buildGardens(k, root) {
  const { THREE, M, g, mesh, plate, disc, blob, tree, topiary, rnd, house, boxes } = k;
  const G = new THREE.Group(); G.name = 'gardens'; root.add(G);
  const W = new THREE.Group(); W.name = 'water'; root.add(W);
  const T = new THREE.Group(); T.name = 'trees'; root.add(T);
  const X0 = -520, X1 = 1000, Z0 = -250, Z1 = 380;
  plate(G, 'map_plinth', M.plinth, X0, Z0, X1, Z1, 0, 8);
  plate(G, 'grounds_lawn', M.lawn, X0 + 6, Z0 + 66, X1 - 6, Z1 - 6, 0.25, 0.25);
  plate(G, 'rue_nord', M.pave, X0 + 6, Z0 + 6, X1 - 6, Z0 + 62, 0.2, 0.2);
  plate(G, 'place_general_de_gaulle', M.pave, X0 + 6, -110, -334, 85, 0.35, 0.3);
  plate(G, 'place_d_armes', M.pave, 40, -184, 200, -94, 0.35, 0.3);
  const clump = (cx, cz, r, n, avoid) => {
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * r, x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      if (avoid && avoid(x, z)) continue;
      tree(T, x, z, 0.9 + rnd() * 0.7, rnd() > 0.55);
    }
  };

  // Jardin de Diane (north)
  plate(G, 'jardin_de_diane_lawn', M.lawn, -150, -184, -38, -10, 0.4, 0.2);
  for (const [x1, z1, x2, z2] of [[-150, -184, -38, -10], [-150, -10, -38, -184]]) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    mesh(G, 'diane_allee', g.box, M.gravel, (x1 + x2) / 2, 0.45, (z1 + z2) / 2, len, 0.15, 5, -Math.atan2(z2 - z1, x2 - x1));
  }
  disc(G, 'diane_rond', M.gravel, -94, -97, 20, 20, 0.5, 0.2);
  disc(G, 'fontaine_diane_bord', M.trim, -94, -97, 9, 9, 1.3, 1.1);
  disc(G, 'fontaine_diane_eau', M.water, -94, -97, 8, 8, 1.35, 0.5);
  mesh(G, 'fontaine_diane_socle', g.box, M.trim, -94, 3, -97, 3.5, 4, 3.5);
  mesh(G, 'statue_diane', g.cyl8, M.trim, -94, 6.5, -97, 0.7, 3, 0.7);
  clump(-128, -160, 18, 10); clump(-55, -150, 14, 7); clump(-130, -40, 14, 7); clump(-56, -45, 12, 6);

  // Étang des Carpes + pavilion island
  const pond = [[-290, 120], [-150, 114], [-40, 120], [-30, 190], [-60, 268], [-130, 312], [-230, 318], [-292, 270], [-310, 190]];
  const c = [-160, 235];
  blob(W, 'etang_rive', M.trim, pond.map(([x, z]) => [c[0] + (x - c[0]) * 1.03, c[1] + (z - c[1]) * 1.03]), 0.42, 0.2);
  blob(W, 'etang_des_carpes', M.water, pond, 0.5, 0.2);
  disc(W, 'ile_pavillon', M.lawn, -150, 238, 16, 14, 1, 0.6);
  disc(W, 'pavillon_etang_socle', M.trim, -150, 238, 8, 8, 1.8, 0.8);
  mesh(W, 'pavillon_etang_murs', g.cyl8, M.stone, -150, 5.3, 238, 6, 7, 6);
  mesh(W, 'pavillon_etang_toit', g.cone8, M.slate, -150, 11.3, 238, 7.6, 5, 7.6);
  tree(T, -138, 246, 0.7); tree(T, -161, 228, 0.6, true);

  // Grand Parterre (east)
  plate(G, 'grand_parterre_gravel', M.gravel, 70, 58, 362, 342, 0.45, 0.2);
  const B = [215, 200];
  plate(G, 'rond_d_eau_bord', M.trim, B[0] - 22, B[1] - 22, B[0] + 22, B[1] + 22, 1.1, 0.9);
  plate(G, 'rond_d_eau', M.water, B[0] - 20, B[1] - 20, B[0] + 20, B[1] + 20, 1.15, 0.5);
  for (const [x1, x2] of [[86, 197], [233, 346]])
    for (const [z1, z2] of [[74, 182], [218, 326]]) {
      plate(G, 'parterre_lawn', M.lawn, x1, z1, x2, z2, 0.65, 0.2);
      const i = 6, h = 1.4;
      for (const [a, b, cc, d] of [[x1 + i, z1 + i, x2 - i, z1 + i + 1.5], [x1 + i, z2 - i - 1.5, x2 - i, z2 - i], [x1 + i, z1 + i, x1 + i + 1.5, z2 - i], [x2 - i - 1.5, z1 + i, x2 - i, z2 - i]])
        plate(G, 'parterre_buis', M.hedge, a, b, cc, d, 0.65 + h, h);
      disc(G, 'parterre_motif', M.hedge, (x1 + x2) / 2, (z1 + z2) / 2, 14, 14, 0.65 + h, h);
      disc(G, 'parterre_motif_centre', M.lawn, (x1 + x2) / 2, (z1 + z2) / 2, 11, 11, 0.7 + h, h);
      for (const x of [x1, x2]) for (const z of [z1, z2]) topiary(G, x, z, 1.1);
    }
  for (let x = 74; x <= 358; x += 14) { tree(T, x, 48, 1.1, true); tree(T, x, 352, 1.1, true); }
  for (let z = 70; z <= 330; z += 14) tree(T, 60, z, 1.0);

  // Cascades + Grand Canal + park (far east)
  plate(W, 'cascades_bord', M.trim, 370, 176, 396, 216, 0.9, 0.7);
  plate(W, 'cascades', M.water, 372, 178, 394, 214, 0.95, 0.4);
  plate(W, 'grand_canal_quai', M.trim, 398, 176, 994, 216, 0.45, 0.2);
  plate(W, 'grand_canal', M.water, 400, 180, 994, 212, 0.5, 0.2);
  for (let x = 410; x <= 990; x += 16) { tree(T, x, 160, 1.15, true); tree(T, x, 232, 1.15, true); }
  for (let i = 0; i < 9; i++) clump(430 + i * 66, -60 + (i % 2) * 70, 42, 14);
  for (let i = 0; i < 8; i++) clump(440 + i * 72, 310, 34, 8, (x, z) => z > 372);

  clump(270, -150, 60, 34); clump(340, -50, 36, 14); clump(-250, -150, 50, 22);
  // Town of Fontainebleau along the north edge
  const TN = new THREE.Group(); TN.name = 'town'; root.add(TN);
  for (let x = X0 + 16, i = 0; x < 380; i++) {
    const w = 12 + rnd() * 14; house(TN, 'maison_' + i, x + w / 2, Z0 + 18, w, 14, 10 + rnd() * 6);
    if (rnd() > 0.35) house(TN, 'maison_b' + i, x + w / 2, Z0 + 46, w - 1, 12, 9 + rnd() * 5, Math.PI);
    x += w + 1.2;
  }
  plate(G, 'rue_pave', M.gravel, X0 + 6, Z0 + 30, 380, Z0 + 34, 0.25, 0.1);
  for (let x = 400; x < X1 - 20; x += 60) tree(T, x, Z0 + 30, 1.2, true);
  // Paths: Jardin Anglais loop, étang promenade, allées
  for (let t = 0; t < 1; t += 0.006) {
    const a = t * Math.PI * 2, x = -415 + Math.cos(a) * 82 + Math.sin(a * 3) * 10, z = 238 + Math.sin(a) * 118;
    disc(G, 'allee_anglaise', M.gravel, x, z, 2.6, 2.6, 0.32, 0.1);
  }
  for (let t = 0; t < 1; t += 0.004) {
    const a = t * Math.PI * 2, x = -165 + Math.cos(a) * 158, z = 216 + Math.sin(a) * 112;
    if (z < 112) continue; disc(G, 'promenade_etang', M.gravel, x, z, 3, 3, 0.32, 0.1);
  }
  plate(G, 'allee_parterre_nord', M.gravel, -20, 40, 70, 52, 0.32, 0.1);
  plate(G, 'allee_maintenon', M.gravel, -10, 100, 2, 360, 0.32, 0.1);
  plate(G, 'avenue_cascades', M.gravel, 362, 140, 994, 150, 0.32, 0.1);
  plate(G, 'avenue_cascades_sud', M.gravel, 362, 242, 994, 252, 0.32, 0.1);
  // Boats on the étang and canal
  const boat = (x, z, ry) => { mesh(W, 'barque', g.box, M.boat, x, 0.9, z, 4.2, 0.7, 1.6, ry); mesh(W, 'barque_banc', g.box, M.trim, x, 1.3, z, 0.4, 0.2, 1.5, ry); };
  [[-230, 170, 0.4], [-100, 285, -0.8], [-70, 180, 1.2], [-250, 280, 2], [-190, 300, 0.1]].forEach(b => boat(...b));
  [[520, 190, 0], [700, 202, 0.1], [860, 188, -0.1]].forEach(b => boat(...b));
  // Statues and urns around the Parterre basin and Cascades
  for (const [x, z] of [[188, 173], [242, 173], [188, 227], [242, 227], [380, 172], [380, 220]]) {
    mesh(G, 'statue_socle', g.box, M.trim, x, 1.2, z, 2.2, 2.4, 2.2); mesh(G, 'statue', g.cyl8, M.trim, x, 3.6, z, 0.6, 2.4, 0.6);
  }
  for (let x = 82; x < 360; x += 28) for (const z of [64, 336]) { mesh(G, 'vase', g.cyl8, M.trim, x, 1.4, z, 0.7, 1.6, 0.7); }
  // Extra woodland density in the park
  for (let i = 0; i < 6; i++) clump(460 + i * 90, 100, 26, 9, (x, z) => z > 150);
  for (let i = 0; i < 5; i++) clump(440 + i * 110, -170, 34, 12);
  // Jardin Anglais (west)
  const avoidStream = (x, z) => Math.abs(z - (230 + 40 * Math.sin((x + 520) / 40))) < 10 || x < X0 + 8 || z > Z1 - 8;
  for (let x = X0 + 14; x < -335; x += 6)
    disc(W, 'riviere_anglaise', M.water, x, 230 + 40 * Math.sin((x + 520) / 40), 6, 6, 0.42, 0.15);
  blob(W, 'jardin_anglais_bassin', M.water, [[-420, 140], [-380, 128], [-350, 150], [-372, 178], [-412, 172]], 0.42, 0.15);
  clump(-470, 140, 32, 16, avoidStream); clump(-380, 300, 40, 18, avoidStream);
  clump(-480, 320, 30, 12, avoidStream); clump(-345, 120, 16, 6, avoidStream);
  // Belt trees by the court and between étang and parterre
  for (let x = -320; x <= -180; x += 14) tree(T, x, -84, 0.9);
  clump(25, 120, 26, 10); clump(20, 300, 30, 12);
  k.flushTrees(T);
  return G;
}
