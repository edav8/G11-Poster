// Château buildings and courts. North = -z.
export function buildPalace(k, root) {
  const { THREE, M, g, mesh, plate, disc, wing, pavilion, topiary } = k;
  const P = new THREE.Group(); P.name = 'palace'; root.add(P);
  const C = new THREE.Group(); C.name = 'courts'; root.add(C);

  // Cour du Cheval Blanc (Cour d'Honneur)
  plate(C, 'cour_honneur_gravel', M.gravel, -330, -61, -168, 61, 0.45, 0.3);
  for (const [x1, x2] of [[-312, -262], [-246, -196]])
    for (const [z1, z2] of [[-46, -9], [9, 46]]) {
      plate(C, 'cour_honneur_lawn', M.lawn, x1, z1, x2, z2, 0.6, 0.3);
      for (const x of [x1, x2]) for (const z of [z1, z2]) topiary(C, x, z, 0.9);
    }
  for (let z = -60; z <= 60; z += 4) mesh(C, 'grille_bar', g.box, M.slate, -332, 1.6, z, 0.3, 3.2, 0.3);
  mesh(C, 'grille_rail', g.box, M.slate, -332, 3.1, 0, 0.4, 0.3, 120);
  for (const z of [-60, -8, 8, 60]) mesh(C, 'grille_pier', g.box, M.trim, -332, 2.4, z, 2, 4.8, 2);

  wing(P, 'aile_des_ministres', -330, -68, -168, -68, 13, 10, { floors: 1, roof: 7 });
  pavilion(P, 'pavillon_ministres_ouest', -330, -68, 16, 16, 12);
  wing(P, 'aile_louis_xv', -318, 68, -170, 68, 16, 16);
  pavilion(P, 'theatre_imperial', -326, 72, 22, 26, 18);
  pavilion(P, 'pavillon_louis_xv_centre', -245, 68, 20, 19, 18);

  // Fer-à-Cheval façade with five pavilions
  wing(P, 'facade_fer_a_cheval', -160, -76, -160, 92, 16, 17);
  for (const z of [-76, -38, 38]) pavilion(P, 'pavillon_facade', -160, z, 19, 19, 20);
  pavilion(P, 'pavillon_central', -160, 0, 20, 20, 23, { roof: 17 });
  pavilion(P, 'gros_pavillon_musee_chinois', -160, 102, 24, 22, 21);

  // Horseshoe staircase
  const S = new THREE.Group(); S.name = 'escalier_fer_a_cheval'; P.add(S);
  const cx = -181, R = 10.5, N = 16;
  mesh(S, 'escalier_palier', g.box, M.trim, -171.5, 3.3, 0, 5, 6.6, 9);
  for (const side of [-1, 1])
    for (let i = 0; i < N; i++) {
      const a = (i + 0.5) / N * (140 * Math.PI / 180);
      const h = 6.6 * (1 - (i + 0.5) / N) + 0.3;
      const x = cx + R * Math.cos(a), z = side * R * Math.sin(a);
      const ry = Math.atan2(-side * Math.cos(a), -Math.sin(a));
      mesh(S, 'escalier_volee', g.box, M.trim, x, h / 2, z, 2.6, h, 3.6, ry);
      mesh(S, 'escalier_balustre', g.box, M.stone, cx + (R + 1.9) * Math.cos(a), h + 0.5, side * (R + 1.9) * Math.sin(a), 2.8, 1, 0.5, ry);
    }

  // Galerie François Ier and Cour de la Fontaine
  wing(P, 'galerie_francois_ier', -152, 8, -70, 8, 12, 15);
  wing(P, 'aile_belle_cheminee', -70, 8, -70, 90, 14, 18);
  pavilion(P, 'pavillon_belle_cheminee', -70, 94, 18, 16, 19);
  plate(C, 'cour_fontaine_gravel', M.gravel, -152, 15, -77, 104, 0.45, 0.3);
  disc(C, 'fontaine_bassin_bord', M.trim, -112, 58, 6, 6, 1.2, 1);
  disc(C, 'fontaine_bassin', M.water, -112, 58, 5, 5, 1.25, 0.5);
  mesh(C, 'fontaine_ulysse', g.cyl8, M.trim, -112, 3.5, 58, 0.8, 5, 0.8);
  for (let i = 0; i < 4; i++) plate(C, 'terrasse_marche', M.trim, -150, 104 + i * 2, -78, 106 + i * 2, 0.45 - i * 0.1, 0.3);

  // Cour Ovale, Salle de Bal, Donjon
  disc(C, 'cour_ovale_gravel', M.gravel, -14, 9, 44, 26, 0.45, 0.3);
  wing(P, 'cour_ovale_nord', -62, -22, 32, -22, 13, 16);
  pavilion(P, 'donjon_saint_louis', -52, -24, 18, 18, 26);
  wing(P, 'cour_ovale_sud', -62, 40, -28, 40, 13, 16);
  pavilion(P, 'porte_doree', -40, 44, 14, 14, 25, { roof: 12 });
  wing(P, 'salle_de_bal', -28, 42, 32, 42, 17, 21, { floors: 1, roof: 9, dormer: 9 });
  wing(P, 'porte_baptistere_aile', 34, -22, 34, 42, 12, 15);
  pavilion(P, 'porte_baptistere', 34, 10, 14, 14, 18, { roof: 10 });

  // Galerie de Diane and Cour des Princes
  wing(P, 'galerie_de_diane', -30, -30, -30, -172, 13, 16);
  pavilion(P, 'pavillon_diane_nord', -30, -176, 18, 16, 18);
  wing(P, 'aile_cour_des_princes', 12, -30, 12, -108, 11, 13);
  plate(C, 'cour_des_princes', M.gravel, -24, -105, 7, -30, 0.45, 0.3);

  // Cour des Offices (Quartier Henri IV)
  plate(C, 'cour_des_offices', M.gravel, 58, -80, 176, 26, 0.45, 0.3);
  wing(P, 'offices_nord', 52, -86, 182, -86, 12, 12, { roof: 8 });
  wing(P, 'offices_est', 182, -86, 182, 32, 12, 12, { roof: 8 });
  wing(P, 'offices_sud', 52, 32, 182, 32, 12, 12, { roof: 8 });
  for (const [x, z] of [[52, -86], [182, -86], [182, 32], [52, 32]]) pavilion(P, 'pavillon_henri_iv', x, z, 16, 16, 15);
  for (let z = -78; z <= 24; z += 4) mesh(C, 'offices_grille', g.box, M.slate, 50, 1.4, z, 0.3, 2.8, 0.3);
  return P;
}
