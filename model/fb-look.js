// Realistic look: world-space procedural surface detail, sky IBL, sun, haze, tone mapping.
const GLSL = `
varying vec3 vWP; varying vec3 vWN;
float h3(vec3 p){p=fract(p*0.3183099+.1);p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
 return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
 mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n3(p);p*=2.03;a*=.5;}return s;}
`;
const BODY = {
  slate: `float r=vWP.y*2.4; float row=fract(r); float off=floor(r)*0.5;
    float t=h3(floor(vec3(vWP.x*1.5+off, r, vWP.z*1.5+off)));
    diffuseColor.rgb*= (0.84+0.2*t) * mix(0.62,1.0,smoothstep(0.0,0.14,row)) * (0.86+0.24*fbm(vWP*0.06));
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*vec3(0.92,1.0,0.94), smoothstep(0.55,0.8,fbm(vWP*0.15)));`,
  stone: `float c=vWP.y*1.7; float off=floor(c)*0.5;
    float b=h3(floor(vec3((vWP.x+vWP.z)*0.75+off, c, 0.)));
    diffuseColor.rgb*= mix(0.86,1.0,smoothstep(0.0,0.07,fract(c))) * (0.93+0.1*b) * (0.9+0.16*fbm(vWP*0.08));
    diffuseColor.rgb*= 0.86+0.14*smoothstep(0.0,5.0,vWP.y);`,
  trim: `diffuseColor.rgb*= 0.92+0.1*fbm(vWP*0.4);`,
  brick: `float c=vWP.y*7.0; float b=h3(floor(vec3((vWP.x+vWP.z)*3.5+floor(c)*0.5,c,0.)));
    diffuseColor.rgb*= mix(0.7,1.0,smoothstep(0.0,0.15,fract(c)))*(0.85+0.25*b);`,
  lawn: `diffuseColor.rgb*= (0.7+0.5*fbm(vWP*0.035)) * (0.9+0.16*n3(vWP*1.3));
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*vec3(1.12,1.05,0.78), smoothstep(0.6,0.85,fbm(vWP*0.012+3.)));`,
  leaf: `float l=fbm(vWP*0.8);
    diffuseColor.rgb*= (0.5+0.75*l) * (0.68+0.42*clamp(vWN.y*0.5+0.5,0.,1.));
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*vec3(1.1,1.08,0.8), smoothstep(0.55,0.75,n3(vWP*0.05)));`,
  gravel: `diffuseColor.rgb*= (0.9+0.14*n3(vWP*4.0)) * (0.93+0.1*fbm(vWP*0.05));`,
  water: `float d=fbm(vWP*0.018); diffuseColor.rgb = mix(diffuseColor.rgb*0.62, diffuseColor.rgb*1.05, d);`,
  render: `diffuseColor.rgb*= (0.9+0.12*fbm(vWP*0.2)) * (0.9+0.1*h3(floor(vWP*0.07)));`,
  pave: `float s=h3(floor(vWP*0.9)); diffuseColor.rgb*= 0.88+0.16*s; diffuseColor.rgb*= mix(0.85,1.,smoothstep(0.,0.08,min(fract(vWP.x*0.9),fract(vWP.z*0.9))));`,
};
export function patchMaterial(mat, kind) {
  const body = BODY[kind]; if (!body) return;
  mat.onBeforeCompile = sh => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP; varying vec3 vWN;')
      .replace('#include <project_vertex>', `#include <project_vertex>
      #ifdef USE_INSTANCING
        vWP = (modelMatrix * instanceMatrix * vec4(transformed,1.)).xyz;
      #else
        vWP = (modelMatrix * vec4(transformed,1.)).xyz;
      #endif
      vWN = normalize(mat3(modelMatrix) * objectNormal);`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\n' + GLSL)
      .replace('#include <color_fragment>', '#include <color_fragment>\n{' + body + '}');
  };
  mat.customProgramCacheKey = () => 'look_' + kind;
  mat.needsUpdate = true;
}

export function applyLook(THREE, stage, kit) {
  const M = kit.M;
  const map = { slate: 'slate', stone: 'stone', trim: 'trim', brick: 'brick', lawn: 'lawn', hedge: 'leaf', treeA: 'leaf', treeB: 'leaf', treeC: 'leaf',
    gravel: 'gravel', water: 'water', render: 'render', pave: 'pave', roofTown: 'slate' };
  for (const [k, kind] of Object.entries(map)) if (M[k]) patchMaterial(M[k], kind);
  // Physically plausible tuning
  Object.assign(M.water, { roughness: 0.06, metalness: 0.0 }); M.water.color.set(0x4b7a8e);
  M.stone.color.set(0xd8c39a); M.trim.color.set(0xeadcbf); M.slate.color.set(0x4e5d70); M.slate.roughness = 0.55;
  M.lawn.color.set(0x6b9a3f); M.hedge.color.set(0x4c7f3a); M.treeA.color.set(0x4f8a3c); M.treeB.color.set(0x3c6e33);
  M.gravel.color.set(0xd6c6a2); M.glass.color.set(0x2c3644); M.glass.roughness = 0.12; M.glass.metalness = 0.2;

  const r = stage._renderer, scene = stage._scene;
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.9;
  // Sky environment for reflections + soft sky light
  const sky = new THREE.Scene();
  const sg = new THREE.SphereGeometry(10, 48, 24), col = [], p = sg.attributes.position;
  const top = new THREE.Color(0x7fa9d8), hor = new THREE.Color(0xf4efe4), gnd = new THREE.Color(0x6e6a58), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) { const y = p.getY(i) / 10; y > 0 ? c.copy(hor).lerp(top, Math.pow(y, 0.6)) : c.copy(hor).lerp(gnd, Math.min(1, -y * 3)); col.push(c.r, c.g, c.b); }
  sg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  sky.add(new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(40, 36, 30) }));
  sun.position.set(-6, 6, 4).normalize().multiplyScalar(9); sky.add(sun);
  const pm = new THREE.PMREMGenerator(r); const env = pm.fromScene(sky, 0.02).texture; pm.dispose();
  scene.environment = env; if ('environmentIntensity' in scene) scene.environmentIntensity = 0.32;
  // Sun + sky light
  scene.children.forEach(o => { if (o.isHemisphereLight) { o.color.set(0xdfeaff); o.groundColor.set(0x8a7d62); o.intensity = 0.28; }
    else if (o.isDirectionalLight && o !== stage._key) o.intensity = 0.25; });
  const key = stage._key; key.color.set(0xfff0d6); key.intensity = 3.6; key.position.copy(key.target.position).add(new THREE.Vector3(-900, 1000, 700));
  key.shadow.radius = 3; key.shadow.normalBias = 0.6;
  scene.fog = new THREE.Fog(0xf3f2f2, 2900, 7000);
  return { env };
}
