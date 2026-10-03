import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createCaptureEffects} from './capture3d.js';
import {createForestGiftEffects} from './forest-gifts3d.js';
import {seatCharacter} from '../characters.mjs';

// A visual scene only: token routes and legal moves remain in the existing client.
export function createJungleScene({board,tokenNodes,comedy,getRoom,getSeat,getServerTime=()=>Date.now(),colors,track,lanes,yards,safe}) {
  const phoneLayout=()=>innerWidth<650 || matchMedia('(pointer: coarse)').matches;
  const mobile=phoneLayout(), reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let renderer;
  try {renderer=new T.WebGLRenderer({antialias:!mobile,alpha:false,powerPreference:'high-performance'});}
  catch {document.body.classList.remove('scene-3d');document.body.classList.add('webgl-fallback');board.dataset.renderer='fallback';return null;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.5:1.65));
  renderer.outputColorSpace=T.SRGBColorSpace;
  renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.02;
  renderer.shadowMap.enabled=!mobile;renderer.shadowMap.type=T.PCFShadowMap;
  renderer.domElement.className='jungle-canvas';renderer.domElement.setAttribute('aria-hidden','true');
  board.prepend(renderer.domElement);document.body.classList.add('scene-3d');
  const scene=new T.Scene();scene.background=new T.Color('#0f4539');scene.fog=new T.Fog('#0c4835',36,70);
  const camera=new T.OrthographicCamera(-12,12,8.5,-8.5,.1,100);
  camera.position.set(0,24,15);camera.lookAt(0,.3,0);
  scene.add(new T.HemisphereLight('#eaffd7','#143e34',1.05));
  const sun=new T.DirectionalLight('#fff0be',2.9);sun.position.set(-9,20,10);sun.castShadow=true;
  sun.shadow.mapSize.set(mobile?1024:2048,mobile?1024:2048);
  Object.assign(sun.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:50});
  sun.shadow.bias=-.0008;sun.shadow.normalBias=.025;sun.shadow.radius=3;scene.add(sun);
  const rim=new T.DirectionalLight('#8bf2f5',.8);rim.position.set(12,10,-10);scene.add(rim);
  const materials=new Map();
  function mat(color,extra={}) {
    const key=color+JSON.stringify(Object.fromEntries(Object.entries(extra).map(([k,v])=>[k,v?.isTexture?v.uuid:v])));
    if(!materials.has(key))materials.set(key,new T.MeshStandardMaterial({color,roughness:.72,...extra}));
    return materials.get(key);
  }
  const sphere=new T.SphereGeometry(1,mobile?12:20,mobile?8:14), rockGeo=new T.IcosahedronGeometry(1,1);
  const characterSphere=new T.SphereGeometry(1,20,14);
  const stemGeo=new T.CylinderGeometry(1,1,1,8);
  const leafGeo=new T.SphereGeometry(1,mobile?8:12,mobile?5:8);
  const explorerRingGeo=new T.TorusGeometry(.43,.045,8,32);
  const haloGeo=new T.CircleGeometry(.51,24);
  const moveMarkerGeo=new T.ConeGeometry(.11,.2,3);
  const characterMaterials=Array.from({length:4},()=>new Map());
  const ringMaterials=colors.map(color=>new T.MeshBasicMaterial({color}));
  const haloMaterials=colors.map(color=>new T.MeshBasicMaterial({color,transparent:true,opacity:.3,depthWrite:false}));
  const markerMaterial=new T.MeshBasicMaterial({color:'#fff4a3'});
  const scarfGeo=new T.ConeGeometry(.14,.18,3);
  const smileCurve=new T.QuadraticBezierCurve3(new T.Vector3(-.08,-.185,.351),new T.Vector3(0,-.24,.38),new T.Vector3(.08,-.185,.351));
  const smileGeo=new T.TubeGeometry(smileCurve,10,.008,5,false);
  const campPadGeo=new T.CylinderGeometry(.56,.6,.08,28),campInsetGeo=new T.CylinderGeometry(.51,.51,.085,28);
  const waterfallStrandGeo=new T.CylinderGeometry(.015,.018,1,5);
  const burstGeo=new T.OctahedronGeometry(.035);
  function mesh(parent,geometry,material,x=0,y=0,z=0,sx=1,sy=sx,sz=sx,shadow=true) {
    const m=new T.Mesh(geometry,material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);
    m.castShadow=shadow;m.receiveShadow=true;parent.add(m);return m;
  }
  const ball=(p,color,x,y,z,sx,sy=sx,sz=sx,extra={})=>mesh(p,sphere,mat(color,extra),x,y,z,sx,sy,sz);
  const boxCache=new Map();
  function box(p,color,x,y,z,w,h,d,r=.08) {
    const key=[w,h,d,r].join(',');
    if(!boxCache.has(key))boxCache.set(key,new RoundedBoxGeometry(w,h,d,2,r));
    return mesh(p,boxCache.get(key),mat(color),x,y,z);
  }
  function cylinder(p,color,a,b,r=.04) {
    const A=new T.Vector3(...a),B=new T.Vector3(...b),m=mesh(p,stemGeo,mat(color),0,0,0,r,A.distanceTo(B),r);
    m.position.copy(A).add(B).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());return m;
  }
  // Deterministic detail placement, independent from the cryptographic game dice.
  let seed=721;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  // Painted surface detail is generated locally, on real geometry.
  function surfaceTexture(kind) {
    const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
    const ctx=canvas.getContext('2d');ctx.fillStyle=kind==='grass'?'#b3c884':kind==='wood'?'#d5bd8b':'#c3c8b8';ctx.fillRect(0,0,256,256);
    for(let i=0;i<(kind==='grass'?2400:700);i++){
      const x=random()*256,y=random()*256;
      ctx.strokeStyle=kind==='grass'?(random()>.5?'#39652b55':'#eef7a04d'):kind==='wood'?'#7155363b':'#495e5128';
      ctx.lineWidth=kind==='grass'?.6:1;
      ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(kind==='wood'?random()*50:random()*5-2),y+(kind==='wood'?random()*3:random()*8-4));ctx.stroke();
    }
    const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
    texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return texture;
  }
  const grassTexture=surfaceTexture('grass'),rockTexture=surfaceTexture('rock'),woodTexture=surfaceTexture('wood');
  const breeze=[],flowers=[],torches=[],fallLines=[],ripples=[],stars=[],particles=[],animals=[];
  const fireMaterial=new T.ShaderMaterial({
    uniforms:{time:{value:0}},
    transparent:true,side:T.DoubleSide,depthWrite:false,
    vertexShader:'varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.x+=sin(time*8.+uv.y*12.)*uv.y*.055;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}',
    fragmentShader:'varying vec2 vUv;uniform float time;void main(){vec2 p=vec2((vUv.x-.5)*2.,vUv.y);float n=sin(p.y*17.-time*9.+sin(p.x*8.+time*3.))*.06;float w=(1.-p.y)*.75+sin(p.y*7.-time*4.)*.07;float a=(1.-smoothstep(w+n-.18,w+n,abs(p.x)))*(1.-smoothstep(.82,1.,p.y));vec3 c=mix(vec3(1.,.24,.01),vec3(1.,.92,.3),(1.-smoothstep(0.,.8,p.y))*(1.-smoothstep(0.,.6,abs(p.x))));gl_FragColor=vec4(c,a*.9);}'
  });
  const floor=mesh(scene,new T.PlaneGeometry(80,80),mat('#237144'),0,-1.4,0,1,1,1,false);floor.rotation.x=-Math.PI/2;
  const waterMaterial=new T.ShaderMaterial({
    uniforms:{time:{value:0}},
    vertexShader:'varying vec2 vWater; void main(){vec4 world=modelMatrix*vec4(position,1.);vWater=world.xz;gl_Position=projectionMatrix*viewMatrix*world;}',
    fragmentShader:'varying vec2 vWater;uniform float time;void main(){vec2 p=vWater*2.5;float w=(sin(p.x*1.7+p.y*.6-time)*sin(p.y*2.1-time*.7)+1.)*.5;float n=sin(p.x*3.1+sin(p.y*2.7-time*1.5))*sin(p.y*3.7+sin(p.x*2.5+time*.7));float f=smoothstep(.61,.86,n);float fine=sin(p.x*11.+sin(p.y*6.-time*2.))*sin(p.y*9.-time*2.);vec3 c=mix(vec3(.012,.25,.32),vec3(.025,.54,.61),w);c+=vec3(.45,.8,.84)*(f*.48+smoothstep(.83,.98,fine)*.14);gl_FragColor=vec4(c,1.);}'
  });
  const water=mesh(scene,new T.PlaneGeometry(80,80,1,1),waterMaterial,0,-.55,0,1,1,1,false);water.rotation.x=-Math.PI/2;
  for(const x of [-11.2,11.2]) {
    box(scene,'#34572d',x,-.14,0,5.7,.74,80,1);
    const bank=box(scene,'#529035',x,.25,0,5.65,.14,79.8,.8);
    const texture=grassTexture.clone();texture.repeat.set(2,25);
    bank.material=mat('#529035',{map:texture});
  }
  function rock(x,y,z,size=.4) {
    const color=['#687b6c','#7c8a71','#586963','#8f977b'][Math.floor(random()*4)];
    const m=mesh(scene,rockGeo,mat(color,{map:rockTexture}),x,y,z,size,size*(.65+random()*.6),size*(.7+random()*.5));
    m.rotation.set(random(),random()*6,random()*.3);
    if(random()>.4) ball(scene,'#599437',x-.05,y+size*.43,z,size*.65,.07,size*.6);
    return m;
  }
  function plant(x,z,size=.4,kind=0) {
    const g=new T.Group();g.position.set(x,.35,z);scene.add(g);
    for(let i=0;i<(kind?9:6);i++){
      const a=i*6.283/(kind?9:6),leaf=mesh(g,leafGeo,mat(['#65b92a','#279440','#8ac735','#197346'][i%4]),Math.sin(a)*size*.32,size*.4,Math.cos(a)*size*.32,size*.15,size*.7,size*.26);
      leaf.rotation.set(Math.cos(a)*.6,a,Math.sin(a)*.6);
      if(i<3) cylinder(g,'#a6d34b',[0,0,0],[Math.sin(a)*size*.55,size*.7,Math.cos(a)*size*.55],.012);
    }
    breeze.push({g,phase:random()*6,size});return g;
  }
  function palm(x,z,size=1) {
    const g=new T.Group();g.position.set(x,.1,z);scene.add(g);
    cylinder(g,'#80532d',[0,0,0],[.1,1.6*size,0],.11*size);
    for(let k=0;k<6;k++) {
      const a=k*6.283/6;
      const leaf=mesh(g,leafGeo,mat(k%2?'#419c30':'#7fc339'),Math.sin(a)*size*.48,1.65*size,Math.cos(a)*size*.48,.16*size,.12*size,.73*size);
      leaf.rotation.y=a;leaf.rotation.x=.16;
      cylinder(g,'#a7bd38',[.1,1.72*size,0],[Math.sin(a)*size*.9,1.57*size,Math.cos(a)*size*.9],.016*size);
    }
    ball(g,'#806932',0,1.6*size,.1,.14*size);
    breeze.push({g,phase:random()*6,size});return g;
  }
  function tree(x,z,size=1) {
    const g=new T.Group();g.position.set(x,.05,z);scene.add(g);
    cylinder(g,'#78512d',[0,0,0],[0,1.4*size,0],.14*size);
    for(let i=0;i<7;i++) {
      const a=i*2.4,m=mesh(g,leafGeo,mat(['#1c7139','#3b9434','#60a82d','#266c32'][i%4]),Math.sin(a)*size*.42,1.15*size+(i%3)*size*.22,Math.cos(a)*size*.37,size*.55,size*.4,size*.5);
      m.rotation.y=a;
    }
    for(let i=0;i<14;i++){
      const a=i*2.4,r=size*(.38+random()*.25);
      const leaf=mesh(g,leafGeo,mat(i%2?'#79b43b':'#2e8738'),Math.sin(a)*r,1.37*size+(i%3)*size*.22,Math.cos(a)*r,size*.18,size*.09,size*.32);
      leaf.rotation.set(.2,a,.15);
    }
    breeze.push({g,phase:random()*6,size});return g;
  }
  function flower(x,z,size=.16) {
    const g=new T.Group();g.position.set(x,.42,z);scene.add(g);
    const color=['#ff6d95','#ffa467','#b26aff','#fff165'][Math.floor(random()*4)];
    for(let i=0;i<5;i++){const a=i*6.283/5;ball(g,color,Math.sin(a)*size,.035,Math.cos(a)*size,size*.75,.07,size*.75);}
    ball(g,'#ffd93d',0,.09,0,size*.5,.075,size*.5);flowers.push({g,phase:random()*6});
  }
  function mushroom(x,z,size=.23) {
    cylinder(scene,'#efe0af',[x,.3,z],[x,.3+size*1.1,z],size*.18);
    const g=new T.Group();g.position.set(x,.3+size,z);scene.add(g);
    ball(g,'#f65b38',0,.04,0,size,.12,size);
    for(let k=0;k<5;k++){const a=k*2.4;ball(g,'#ffeed6',Math.sin(a)*size*.63,.15,Math.cos(a)*size*.63,.045,.017,.045);}
    flowers.push({g,phase:random()*6});
  }
  function torch(x,z) {
    const g=new T.Group();g.position.set(x,.2,z);scene.add(g);
    cylinder(g,'#845331',[0,0,0],[0,1.05,0],.085);
    cylinder(g,'#d2a340',[0,.72,0],[0,.91,0],.15);
    const flame=ball(g,'#ff8d0a',0,1.15,0,.17,.35,.17,{emissive:'#ff5000',emissiveIntensity:2});
    const core=ball(g,'#fff38b',0,1.14,.02,.08,.23,.08,{emissive:'#ffce32',emissiveIntensity:3});
    const flameSheet=mesh(g,new T.PlaneGeometry(.52,.78,5,12),fireMaterial,0,1.28,.08,1,1,1,false);
    flameSheet.rotation.x=-.16;
    const light=new T.PointLight('#ffb531',2,3,2);light.position.set(0,1.3,0);light.visible=!mobile;g.add(light);
    torches.push({flame,core,light,phase:random()*6});
    for(let i=0;i<3;i++)particles.push({m:ball(g,'#ffe999',0,1.6+i*.2,0,.02,.02,.02,{emissive:'#ffb800',emissiveIntensity:2}),base:1.3,phase:random()*6,fire:true});
  }
  function chest(x,z,angle=0) {
    const g=new T.Group();g.position.set(x,.36,z);g.rotation.y=angle;scene.add(g);
    box(g,'#99602c',0,.18,0,.53,.35,.37,.05);
    box(g,'#c28a40',0,.37,0,.55,.17,.4,.08);
    for(const dx of [-.17,.17])box(g,'#f1c454',dx,.28,.21,.045,.39,.025,.01);
    box(g,'#f3d271',0,.24,.218,.1,.13,.03,.01);
  }
  function fence(cx,cz,color) {
    const corners=[[-2.7,-2.5],[2.7,-2.5],[2.7,2.5],[-2.7,2.5]];
    for(let edge=0;edge<4;edge++){
      const a=corners[edge],b=corners[(edge+1)%4];
      for(let i=0;i<5;i++){
        const f=i/4,x=cx+a[0]+(b[0]-a[0])*f,z=cz+a[1]+(b[1]-a[1])*f;
        if(edge===1&&i===2)continue;
        cylinder(scene,'#b6813e',[x,.25,z],[x,.8,z],.06);ball(scene,'#e0ba70',x,.8,z,.075);
      }
      cylinder(scene,'#9b733e',[cx+a[0],.61,cz+a[1]],[cx+b[0],.61,cz+b[1]],.038);
    }
    // An explorer pennant, lantern and supplies give each camp its own identity.
    cylinder(scene,'#997044',[cx-2.2,.3,cz-1.6],[cx-2.2,1.75,cz-1.6],.055);
    const banner=mesh(scene,new T.PlaneGeometry(.7,.78),mat(color,{side:T.DoubleSide}),cx-1.83,1.3,cz-1.6);
    banner.rotation.y=-.16;
    const paw=ball(scene,'#ffdf82',cx-1.84,1.26,cz-1.56,.13,.14,.015);
    for(const [dx,dy] of [[-.17,.15],[0,.23],[.17,.15]])ball(scene,'#ffdf82',cx-1.84+dx,1.26+dy,cz-1.55,.055,.065,.016);
    chest(cx+2.05,cz-1.65,.3);torch(cx-2.55,cz-.9);
  }
  // Four rocky islands contain the original four homes.
  const homes=[[-4.5,-4.5],[4.5,-4.5],[4.5,4.5],[-4.5,4.5]];
  const campColors=['#bc593c','#80ac3c','#d7ad38','#479bba'];
  homes.forEach(([x,z],s)=>{
    box(scene,'#536a44',x,-.26,z,5.98,.95,5.88,.5);
    const soil=box(scene,campColors[s],x,.25,z,5.65,.23,5.6,.4);
    soil.material=mat(campColors[s],{map:grassTexture});
    // Small stone and grass detail never occupy a playable track cell.
    for(let k=0;k<38;k++){
      const a=k*6.283/38,rx=x+Math.cos(a)*2.83,rz=z+Math.sin(a)*2.8;
      rock(rx,-.05,rz,.19+random()*.15);
      if(k%2===0)plant(rx,rz,.25+random()*.22);
      if(k%4===0)flower(rx,rz,.12);
    }
    for(let k=0;k<22;k++) {
      const rx=x+(random()-.5)*5.1,rz=z+(random()-.5)*5.1;
      ball(scene,['#d49452','#a9bb51','#f7d46a','#76b7be'][s],rx,.375,rz,.02+random()*.025,.008,.026,{}).castShadow=false;
    }
    fence(x,z,colors[s]);
    mushroom(x+2.1,z+2.23);plant(x-2.05,z+2.15,.42);
    for(let t=0;t<4;t++) {
      const [r,c]=yards[s][t];
      const pad=mesh(scene,campPadGeo,mat('#e4bf77'),c-7.5,.39,r-7.5);
      mesh(scene,campInsetGeo,mat(campColors[s]),c-7.5,.41,r-7.5);
    }
  });
  // All 72 visible cross cells retain the original coordinates.
  const grain=document.createElement('canvas');grain.width=128;grain.height=128;
  const gc=grain.getContext('2d');gc.fillStyle='#f7f0df';gc.fillRect(0,0,128,128);
  for(let i=0;i<500;i++){gc.fillStyle=random()>.5?'#cdc1a922':'#ffffff35';gc.fillRect(random()*128,random()*128,1+random()*3,1+random()*2);}
  const shade=gc.createRadialGradient(64,54,20,64,64,91);shade.addColorStop(0,'#ffffff00');shade.addColorStop(1,'#8b795533');gc.fillStyle=shade;gc.fillRect(0,0,128,128);
  const stoneTexture=new T.CanvasTexture(grain);stoneTexture.colorSpace=T.SRGBColorSpace;
  const tileGeo=new RoundedBoxGeometry(.92,.31,.92,3,.105),tileMeshes=[];
  for(let r=0;r<15;r++)for(let c=0;c<15;c++){
    if(!(r>=6&&r<=8||c>=6&&c<=8)||r>=6&&r<=8&&c>=6&&c<=8)continue;
    const n=track.findIndex(p=>p[0]===r&&p[1]===c);
    let color='#ead7a0';
    for(let s=0;s<4;s++)if(lanes[s].some(p=>p[0]===r&&p[1]===c)||n===s*13)color=colors[s];
    const tile=mesh(scene,tileGeo,mat(color,{map:stoneTexture,roughness:.65}),c-7+.002,.34,r-7+.002);
    tileMeshes.push(tile);
    if(safe.has(n)){
      const star=new T.Shape();
      for(let k=0;k<10;k++){const a=k*Math.PI/5+Math.PI/2,rr=k%2?.125:.26;k?star.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):star.moveTo(Math.cos(a)*rr,Math.sin(a)*rr);}
      star.closePath();
      const m=mesh(scene,new T.ExtrudeGeometry(star,{depth:.04,bevelEnabled:true,bevelThickness:.025,bevelSize:.02,bevelSegments:2,steps:1}),mat('#ffce31',{metalness:.2,roughness:.4,emissive:'#c28800',emissiveIntensity:.15}),c-7,.525,r-7);
      m.rotation.x=-Math.PI/2;stars.push(m);
    }else if((r+c)%5===0) {
      // A subtle crack is a real line drawn on the stone material.
      const points=[new T.Vector3(c-7-.28,.504,r-7+.4),new T.Vector3(c-7-.16,.504,r-7+.26),new T.Vector3(c-7-.2,.504,r-7+.09)];
      scene.add(new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:'#927f54',transparent:true,opacity:.5})));
    }
  }
  const centerPoints=[[[-1.5,-1.5],[0,0],[-1.5,1.5]],[[-1.5,-1.5],[0,0],[1.5,-1.5]],[[1.5,-1.5],[0,0],[1.5,1.5]],[[-1.5,1.5],[0,0],[1.5,1.5]]];
  box(scene,'#665333',0,.27,0,3,.29,3,.06);
  centerPoints.forEach((points,s)=>{
    const sh=new T.Shape();sh.moveTo(points[0][0],-points[0][1]);points.slice(1).forEach(p=>sh.lineTo(p[0],-p[1]));sh.closePath();
    const m=mesh(scene,new T.ExtrudeGeometry(sh,{depth:.1,bevelEnabled:false}),mat(colors[s]),0,.51,0);
    m.rotation.x=-Math.PI/2;
  });
  mesh(scene,new T.CylinderGeometry(.64,.7,.17,32),mat('#915e2c'),0,.66,0);
  mesh(scene,new T.TorusGeometry(.64,.035,8,32),mat('#e0b964'),0,.75,0).rotation.x=Math.PI/2;
  const crownShape=new T.Shape();crownShape.moveTo(-.36,0);crownShape.lineTo(-.42,.35);crownShape.lineTo(-.17,.2);crownShape.lineTo(0,.52);crownShape.lineTo(.17,.2);crownShape.lineTo(.42,.35);crownShape.lineTo(.36,0);crownShape.closePath();
  const crown=mesh(scene,new T.ExtrudeGeometry(crownShape,{depth:.13,bevelEnabled:true,bevelSize:.035,bevelThickness:.025,bevelSegments:2}),mat('#ffd031',{metalness:.5,roughness:.3}),0,.79,.12);
  crown.rotation.x=-.35;
  // Dense tropical edges, with uneven silhouettes instead of repeated flat icons.
  for(let side=0;side<2;side++)for(let k=0;k<25;k++){
    const x=(side?1:-1)*(8.2+random()*3.2),z=-9+random()*18;
    if(Math.abs(x)<9.4&&z>-5&&z<-1.8)continue;
    rock(x,-.15,z,.55+random()*.75);
    if(k%3===0)palm(x,z,.8+random()*.8);else tree(x,z,.65+random()*.9);
    plant(x+(random()-.5),z+(random()-.5),.35+random()*.4);
    if(k%4===0)flower(x-.4,z+.45,.2);
  }
  for(let k=0;k<24;k++){
    const x=-11+random()*22,z=k%2?-8.6-random()*1.5:8.4+random()*1.5;
    rock(x,-.15,z,.45+random()*.5);plant(x,z,.5+random()*.5);
    if(k%4===0)palm(x,z,1.1);
  }
  // Fern beds and flowers fill the banks, leaving the streams and tiles clear.
  for(let side=0;side<2;side++)for(let k=0;k<(mobile?32:65);k++){
    const x=(side?1:-1)*(8.75+random()*3.7),z=-9.4+random()*18.8;
    if(Math.abs(x)<9.6&&z>-4.9&&z<-2.2)continue;
    plant(x,z,.27+random()*.36,k%3===0?1:0);
    if(k%4===0)rock(x,.34,z,.12+random()*.18);
    if(k%3===0)flower(x-.12,z+.1,.12+random()*.08);
  }
  // Layered banks continue beyond the board when a phone shows a taller view.
  for(let side=0;side<2;side++)for(let k=0;k<(mobile?36:85);k++){
    const x=(side?1:-1)*(8.65+random()*4.5),z=-19+random()*38;
    if(Math.abs(z)<8.5)continue;
    rock(x,.05,z,.35+random()*.6);
    plant(x,z,.35+random()*.5);
    if(k%4===0)tree(x,z,.8+random()*.6);
    if(k%7===0)palm(x,z,.85+random()*.7);
    if(k%5===0)flower(x+.2,z+.3,.16);
  }
  // Thin grass blades break the straight bank silhouette beside the streams.
  const bladeShape=new T.Shape();bladeShape.moveTo(-.03,0);bladeShape.quadraticCurveTo(-.07,.2,.03,.35);bladeShape.quadraticCurveTo(.07,.14,.03,0);bladeShape.closePath();
  const bladeGeo=new T.ShapeGeometry(bladeShape);
  for(let k=0;k<360;k++){
    const side=k%2?1:-1,x=side*(8.4+random()*4.1),z=-10.5+random()*21;
    if(Math.abs(x)<9.5&&z>-5&&z<-2)continue;
    const blade=mesh(scene,bladeGeo,mat(k%3?'#8eb93b':'#488c32',{side:T.DoubleSide}),x,.31,z,1,1+random(),1,false);blade.rotation.y=random()*6.28;
  }
  // Wood grain follows bridge planks, posts and supplies.
  scene.traverse(object=>{
    if(object.isMesh&&object.material?.isMeshStandardMaterial&&['99602c','c28a40','b6813e','9b733e','bb8b43','96672f','845331','997044','78512d','80532d'].includes(object.material.color.getHexString())){
      object.material=mat('#'+object.material.color.getHexString(),{map:woodTexture});
    }
  });
  function bridge(x,z,w=1.3,angle=0) {
    const g=new T.Group();g.position.set(x,.1,z);g.rotation.y=angle;scene.add(g);
    for(let k=0;k<8;k++)box(g,k%2?'#bb8b43':'#96672f',-.63+k*.18,.13,0,.16,.12,w,.02);
    for(const dx of [-.73,.73])for(const dz of [-w*.5,w*.5])cylinder(g,'#ae7a36',[dx,-.1,dz],[dx,.73,dz],.055);
    for(const dz of [-w*.5,w*.5]){
      cylinder(g,'#d2b47c',[-.73,.64,dz],[.73,.64,dz],.025);
      cylinder(g,'#996b34',[-.73,.4,dz],[.73,.4,dz],.025);
    }
  }
  bridge(-8.75,0,1.35,.2);bridge(8.75,0,1.35,-.2);
  bridge(-8.45,6.7,1.2,-.5);bridge(8.4,-5.7,1.2,.3);
  // Water falls from the cliff lip in moving strands; spray rises at the base.
  function waterfall(x,z) {
    const g=new T.Group();g.position.set(x,0,z);scene.add(g);
    for(let i=0;i<8;i++)rock(x+(i-3.5)*.27,.85,z-.45,.45);
    const material=new T.MeshBasicMaterial({color:'#6bdef5',transparent:true,opacity:.75,side:T.DoubleSide,depthWrite:false});
    const sheet=mesh(g,new T.PlaneGeometry(1.5,2),material,0,.28,0,1,1,1,false);
    for(let i=0;i<22;i++){
      const length=.33+random()*.4;
      const line=mesh(g,waterfallStrandGeo,mat('#bdfdff',{emissive:'#66d7ef',emissiveIntensity:.65,transparent:true,opacity:.65}),-.68+random()*1.36,random()*2-.65,.025+random()*.03,1,length,1,false);
      fallLines.push({m:line,phase:random()*2,base:.99});
    }
    for(let i=0;i<28;i++){
      const m=ball(g,'#e8ffff',(random()-.5)*1.5,-.43,(random()-.5)*.55,.025+random()*.04,.03,.03,{transparent:true,opacity:.65,emissive:'#5dcdc9',emissiveIntensity:.4});
      particles.push({m,phase:random()*6,base:-.45,spray:true,scale:m.scale.clone()});
    }
    for(let i=0;i<5;i++){
      const m=mesh(g,new T.TorusGeometry(.2+i*.12,.016,6,32),mat('#d1ffff',{transparent:true,opacity:.65,emissive:'#429eae',emissiveIntensity:.35}),0,-.48,.42,1,1,1,false);
      m.rotation.x=Math.PI/2;ripples.push({m,phase:i*.5});
    }
  }
  waterfall(-8.25,-3.55);waterfall(8.25,-3.65);
  for(const [x,z] of [[-8.2,2.2],[8.2,2.5],[-7.3,7.5],[7.3,7.5]])torch(x,z);
  // Fireflies are small glowing geometry, not a still backdrop.
  for(let i=0;i<32;i++) {
    const x=(random()-.5)*23,z=(random()-.5)*19;
    const m=ball(scene,'#fff3a1',x,.8+random()*1.1,z,.025,.025,.025,{emissive:'#ffe653',emissiveIntensity:2});
    particles.push({m,phase:random()*6,base:m.position.y,fly:true,x,z});
  }
  function animal(seat,token) {
    // Characters retain smooth faces; the surrounding forest uses lighter meshes.
    const ball=(p,color,x,y,z,sx,sy=sx,sz=sx,extra={})=>mesh(p,characterSphere,mat(color,extra),x,y,z,sx,sy,sz);
    const g=new T.Group(),body=new T.Group(),head=new T.Group(),eyes=new T.Group();
    g.add(body);head.position.set(0,.98,0);head.rotation.x=-.4;body.add(head);head.add(eyes);
    const character=seatCharacter(getRoom()?.seats[seat],seat),{fur,cream,dark}=character;
    const panda=character.id==='panda',fox=character.id==='fox',deer=character.id==='deer';
    const rabbit=character.id==='rabbit',tiger=character.id==='tiger',monkey=character.id==='monkey',raccoon=character.id==='raccoon';
    ball(body,colors[seat],0,.51,0,.26,.33,.2);
    ball(body,cream,0,.6,.185,.16,.2,.025);
    const feet=[],arms=[];
    for(const dx of [-.16,.16]){
      const foot=ball(body,dark,dx,.15,.05,.125,.12,.19);feet.push(foot);
      const arm=new T.Group();arm.position.set(dx*1.7,.65,.045);body.add(arm);
      ball(arm,fur,0,-.13,0,.09,.2,.095);
      ball(arm,fur,0,-.29,.025,.1,.09,.1);arms.push(arm);
    }
    // Backpack, straps, rolled blanket and bandana.
    box(body,'#77643a',0,.59,-.22,.38,.44,.19,.07);
    cylinder(body,'#bba566',[-.21,.82,-.24],[.21,.82,-.24],.065);
    for(const dx of [-.14,.14])box(body,'#d2af58',dx,.63,.2,.036,.39,.035,.009);
    ball(body,'#eece68',.15,.54,.225,.045,.055,.021);
    const scarf=mesh(body,scarfGeo,mat(colors[seat]),0,.83,.19);scarf.rotation.z=Math.PI;
    ball(head,fur,0,0,0,.36,.33,.3);
    if(fox||raccoon){
      for(const dx of [-.26,.26]){
        const ear=mesh(head,new T.ConeGeometry(.14,.32,3),mat(fur),dx,.3,-.015);ear.rotation.z=dx<0?.22:-.22;
        mesh(head,new T.ConeGeometry(.079,.21,3),mat('#ffc592'),dx,.3,.075);
      }
      ball(head,cream,-.14,-.13,.255,.16,.12,.09);ball(head,cream,.14,-.13,.255,.16,.12,.09);
      const tail=ball(body,fur,.32,.41,-.13,.13,.38,.14);tail.rotation.z=-.58;
      ball(body,raccoon?dark:cream,.45,.67,-.13,.09,.12,.095);
      if(raccoon)ball(body,dark,.36,.44,-.1,.135,.065,.145);
    }else if(rabbit){
      for(const dx of [-.18,.18]){
        const ear=ball(head,fur,dx,.43,-.01,.11,.34,.085);ear.rotation.z=dx<0?.15:-.15;
        ball(head,'#edaeae',dx,.45,.067,.055,.24,.019);
      }
      ball(head,cream,0,-.14,.27,.21,.135,.085);
      box(head,'#fffef5',0,-.225,.346,.105,.12,.025,.018);
      ball(body,cream,.27,.27,-.13,.13,.13,.13);
    }else{
      for(const dx of [-.28,.28]) {
        ball(head,panda?dark:fur,dx,.24,-.01,monkey?.19:.145,.155,.095);
        ball(head,panda?'#484337':monkey?cream:'#d39478',dx,.24,.069,.083,.09,.016);
      }
      ball(head,cream,0,-.14,.27,.21,.135,.085);
    }
    if(monkey){
      for(const dx of [-.13,.13])ball(head,cream,dx,.02,.254,.17,.19,.057);
      const curl=new T.QuadraticBezierCurve3(new T.Vector3(.17,.3,-.18),new T.Vector3(.63,.53,-.25),new T.Vector3(.38,.62,-.12));
      mesh(body,new T.TubeGeometry(curl,10,.042,6,false),mat(fur));
    }
    if(tiger){
      for(const dx of [-.16,0,.16]){
        const stripe=ball(head,dark,dx,.23,.215,.027,.095,.02);stripe.rotation.z=dx<0?-.32:dx>0?.32:0;
      }
      for(const sign of [-1,1]){
        for(const y of [-.005,-.09])ball(head,dark,sign*.29,y,.19,.053,.016,.03);
        cylinder(head,cream,[sign*.18,-.15,.32],[sign*.4,-.12,.27],.009);
      }
      cylinder(body,fur,[.22,.28,-.12],[.4,.67,-.15],.055);
      for(const y of [.4,.54,.66])ball(body,dark,.22+(y-.28)*.46,y,-.145,.06,.027,.061);
    }
    const eyeParts=[];
    for(const dx of [-.13,.13]) {
      if(panda||raccoon){const patch=ball(head,dark,dx,0,.258,raccoon?.165:.111,raccoon?.09:.145,.046);patch.rotation.z=dx<0?-.3:.3;}
      const pupil=ball(eyes,'#19251b',dx,.015,.305,.045,.064,.026,{roughness:.24});
      const glint=ball(eyes,'#ffffff',dx-.012,.037,.331,.014,.018,.006,{emissive:'#ffffff',emissiveIntensity:.1});
      eyeParts.push({pupil,glint});
      cylinder(head,deer?'#7e552f':'#6c492a',[dx-.035,.122,.28],[dx+.03,.134,.282],.012);
    }
    ball(head,'#27251e',0,-.12,.365,.065,.045,.035,{roughness:.3});
    mesh(head,smileGeo,mat('#66412d'));
    for(const dx of [-.25,.25])ball(head,'#e9a380',dx,-.09,.248,.036,.022,.008);
    if(deer){
      for(const sign of [-1,1]){
        cylinder(head,'#926735',[sign*.22,.29,-.02],[sign*.33,.62,-.02],.035);
        cylinder(head,'#926735',[sign*.29,.5,-.02],[sign*.47,.58,-.02],.027);
        cylinder(head,'#926735',[sign*.32,.55,-.02],[sign*.24,.67,-.02],.025);
      }
      for(const dx of [-.2,.2])ball(head,'#fae4b1',dx,.14,.227,.025,.029,.008);
    }
    const ring=mesh(g,explorerRingGeo,ringMaterials[seat],0,.045,0,1,1,1,false);
    ring.rotation.x=Math.PI/2;
    const halo=mesh(g,haloGeo,haloMaterials[seat],0,.035,0,1,1,1,false);halo.rotation.x=-Math.PI/2;
    const marker=mesh(g,moveMarkerGeo,markerMaterial,0,1.63,0,1,1,1,false);marker.rotation.z=Math.PI;
    // A physical numbered badge makes otherwise identical explorers selectable.
    const numberCanvas=document.createElement('canvas');numberCanvas.width=64;numberCanvas.height=64;
    const ctx=numberCanvas.getContext('2d');ctx.fillStyle='#ffe6a1';ctx.beginPath();ctx.arc(32,32,28,0,Math.PI*2);ctx.fill();ctx.fillStyle='#4d3921';ctx.font='bold 39px Trebuchet MS';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(token+1),32,34);
    const texture=new T.CanvasTexture(numberCanvas);texture.colorSpace=T.SRGBColorSpace;
    const badge=mesh(g,new T.PlaneGeometry(.16,.16),new T.MeshBasicMaterial({map:texture,transparent:true,side:T.DoubleSide}),.27,.17,.22,1,1,1,false);badge.rotation.x=-.45;
    // Seat-specific material copies let us glow one crew without tinting scenery
    // or another player's fur; copies remain shared by that crew's four pieces.
    g.traverse(node=>{
      if(!node.material?.isMeshStandardMaterial)return;
      const original=node.material,copies=characterMaterials[seat];
      if(!copies.has(original.uuid)){
        const material=original.clone();
        copies.set(original.uuid,{material,emissive:material.emissive.clone(),intensity:material.emissiveIntensity});
      }
      node.material=copies.get(original.uuid).material;
    });
    scene.add(g);return {g,body,head,eyes,eyeParts,feet,arms,ring,halo,marker,seat,token,character:character.id,dance:character.dance,phase:seat*.9+token*1.6};
  }
  for(let s=0;s<4;s++)for(let t=0;t<4;t++)animals.push(animal(s,t));
  // Keep scenery in static GPU buffers. Only articulated/animated parts need
  // fresh transforms; a rock or bridge never needs uploading every frame.
  const movingNodes=new Set(),movingMeshes=new Set();
  function moving(node){
    movingNodes.add(node);
    node.traverse(child=>{if(child.isMesh)movingMeshes.add(child);});
  }
  const animatedBreeze=mobile?breeze.filter((_,i)=>i%4===0):breeze;
  const animatedFlowers=mobile?flowers.filter((_,i)=>i%3===0):flowers;
  animatedBreeze.forEach(b=>moving(b.g));animatedFlowers.forEach(f=>moving(f.g));
  torches.forEach(t=>{moving(t.flame);moving(t.core);});
  fallLines.forEach(line=>moving(line.m));ripples.forEach(r=>moving(r.m));
  particles.forEach(p=>moving(p.m));
  animals.forEach(a=>[a.g,a.body,a.head,a.eyes,a.ring,a.halo,a.marker,...a.arms,...a.feet].forEach(moving));
  scene.updateMatrixWorld(true);
  scene.traverse(node=>{if(!movingNodes.has(node)){node.updateMatrix();node.matrixAutoUpdate=false;}});
  // tick owns the single matrix update; renderer must not traverse it again.
  scene.matrixWorldAutoUpdate=false;
  // Share geometry/material draw calls while keeping every articulated part animated.
  const batchGroups=new Map();
  scene.traverse(object=>{
    if(!object.isMesh||!object.geometry||Array.isArray(object.material))return;
    const key=object.geometry.uuid+'|'+object.material.uuid+'|'+movingMeshes.has(object);
    if(!batchGroups.has(key))batchGroups.set(key,[]);
    batchGroups.get(key).push(object);
  });
  const batches=[],zeroMatrix=new T.Matrix4().makeScale(0,0,0);
  for(const sources of batchGroups.values()){
    if(sources.length<2)continue;
    const batch=new T.InstancedMesh(sources[0].geometry,sources[0].material,sources.length);
    batch.castShadow=sources.some(m=>m.castShadow);batch.receiveShadow=true;batch.frustumCulled=false;
    const dynamic=movingMeshes.has(sources[0]);
    batch.instanceMatrix.setUsage(dynamic?T.DynamicDrawUsage:T.StaticDrawUsage);
    sources.forEach((m,i)=>{m.layers.set(31);batch.setMatrixAt(i,m.matrixWorld);});
    batch.instanceMatrix.needsUpdate=true;
    batch.matrixAutoUpdate=false;scene.add(batch);
    if(dynamic)batches.push({batch,sources});
  }
  const svg=board.querySelector('svg'),point=svg.createSVGPoint(),projection=new T.Vector3();
  const preview=document.getElementById('preview-board');
  preview.innerHTML='';
  let renderHost=preview;preview.append(renderer.domElement);
  let width=0,height=0,lastFrame=0,frames=0,frameMs=0,stopped=false;
  const diagnostics={renderer:'WebGL 3D',frames:0,tiles:tileMeshes.length,animals:16,characters:[0,1,2,3].map(s=>seatCharacter(getRoom()?.seats[s],s).id),waterfalls:2,torchCount:torches.length,drawCalls:0,fps:0,performanceVersion:2,characterDetail:'full'};
  const captureEffects=createCaptureEffects({scene,camera,board,reduced,getRoom,diagnostics});
  const forestGifts=createForestGiftEffects({scene,camera,board,animals,track,reduced,getRoom,diagnostics});
  const comedyPoint=new T.Vector3();
  function capture(move){
    const el=tokenNodes.get(move.seat+'-'+move.token),transform=getComputedStyle(el).transform;
    const matrix=transform==='none'?new DOMMatrix():new DOMMatrix(transform);
    captureEffects.start(move,{x:matrix.e-7.5,z:matrix.f-7.5});
  }
  let observedRoll=null,rollHighlightUntil=0,rollHighlightSeat=-1,previousHighlightedSeat=-1;
  const characterEmotes=new Map();
  function celebrate(seat,kind='jump'){
    const room=getRoom();
    if(!room?.seats[seat]||!Number.isInteger(seat)||!['jump','dance','wave'].includes(kind))return false;
    characterEmotes.set(seat,{kind,started:performance.now(),room:room.code});
    return true;
  }
  board.dataset.renderer='webgl';window.jungleScene=diagnostics;
  function resize() {
    const rect=renderHost.getBoundingClientRect();
    if(!rect.width||!rect.height)return;
    const smooth=phoneLayout();
    renderer.setPixelRatio(Math.min(devicePixelRatio,smooth?1.5:1.65));
    renderer.shadowMap.enabled=!smooth;
    torches.forEach(t=>t.light.visible=!smooth);
    diagnostics.quality=smooth?'mobile-smooth':'full';
    width=rect.width;height=rect.height;renderer.setSize(width,height,false);
    const aspect=width/height;
    const viewHeight=innerWidth<650?18.2/aspect:Math.max(16.85,13.6*height/Math.max(300,height-180));
    const viewWidth=viewHeight*aspect;
    camera.left=-viewWidth/2;camera.right=viewWidth/2;camera.top=viewHeight/2;camera.bottom=-viewHeight/2;
    camera.updateProjectionMatrix();
    diagnostics.cameraAspect=(camera.right-camera.left)/(camera.top-camera.bottom);
    diagnostics.viewportAspect=aspect;
  }
  const observer=new ResizeObserver(resize);observer.observe(board);observer.observe(preview);
  const visibleHosts=new Map([[board,true],[preview,true]]);
  const visibilityObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>visibleHosts.set(entry.target,entry.isIntersecting));
  });
  visibilityObserver.observe(board);visibilityObserver.observe(preview);
  let lastScrollAt=-Infinity;
  const onScroll=()=>{if(phoneLayout())lastScrollAt=performance.now();};
  window.addEventListener('scroll',onScroll,{passive:true});
  // Existing DOM token controls provide keyboard access and the same move action.
  function projectedHit(a,el,matrix,rect,inverse) {
    projection.set(0,.55,0).applyMatrix4(a.body.matrixWorld).project(camera);
    point.x=rect.left+(projection.x*.5+.5)*rect.width;
    point.y=rect.top+(-projection.y*.5+.5)*rect.height;
    const local=point.matrixTransform(inverse),hit=el.querySelector('.token-hit');
    hit.setAttribute('cx',local.x-matrix.e);hit.setAttribute('cy',local.y-matrix.f);
    hit.setAttribute('r',innerWidth<650?'.52':'.5');
  }
  function pickToken(clientX,clientY) {
    if(renderHost!==board || !getRoom())return null;
    const rect=renderer.domElement.getBoundingClientRect();
    let picked=null,best=Infinity;
    for(const a of animals){
      const el=tokenNodes.get(a.seat+'-'+a.token);
      if(!a.g.visible || !el.classList.contains('movable'))continue;
      let left=Infinity,right=-Infinity,top=Infinity,bottom=-Infinity;
      // Project the whole model rather than a small circle at its feet.
      for(const x of [-.46,.46])for(const y of [0,a.marker.visible?1.8:1.48])for(const z of [-.3,.4]){
        projection.set(x,y,z).applyMatrix4(a.body.matrixWorld).project(camera);
        const px=rect.left+(projection.x*.5+.5)*rect.width;
        const py=rect.top+(-projection.y*.5+.5)*rect.height;
        left=Math.min(left,px);right=Math.max(right,px);top=Math.min(top,py);bottom=Math.max(bottom,py);
      }
      const padding=innerWidth<650?7:4;
      if(clientX<left-padding||clientX>right+padding||clientY<top-padding||clientY>bottom+padding)continue;
      const distance=((clientX-(left+right)/2)/Math.max(1,right-left))**2+
        ((clientY-(top+bottom)/2)/Math.max(1,bottom-top))**2;
      if(distance<best){best=distance;picked=el;}
    }
    return picked;
  }
  const effectObserver=new MutationObserver(records=>{
    for(const record of records)for(const node of record.addedNodes){
      if(!(node instanceof SVGElement))continue;
      const m=/translate\(([\d.-]+) ([\d.-]+)\)/.exec(node.getAttribute('transform')||'');
      if(!m)continue;
      if(node.dataset.capture==='true')continue;
      for(let i=0;i<12;i++){
        const material=mat('#ffe266',{emissive:'#e8a923',emissiveIntensity:1,transparent:true,opacity:1}).clone();
        const p=mesh(scene,burstGeo,material,Number(m[1])-7.5,.65,Number(m[2])-7.5,1,1,1,false);
        particles.push({m:p,burst:true,born:performance.now()/1000,angle:i*6.283/12,x:p.position.x,z:p.position.z});
      }
    }
  });
  effectObserver.observe(board.querySelector('#effects'),{childList:true});
  function tick(now) {
    if(stopped)return;
    requestAnimationFrame(tick);
    const nextHost=getRoom()?board:preview;
    if(nextHost!==renderHost){renderHost=nextHost;renderHost.prepend(renderer.domElement);resize();}
    // Let phone scrolling use the frame budget; resume immediately on settling.
    // Offscreen previews should not keep consuming GPU time either.
    if(document.hidden || !visibleHosts.get(renderHost) || now-lastScrollAt<120 || !width || !height){lastFrame=now;return;}
    // Cap visual rendering, leaving multiplayer timers and input untouched.
    if(now-lastFrame<(innerWidth<650?32:21))return;
    const dt=now-lastFrame;lastFrame=now;frameMs+=dt;frames++;
    const time=reduced.matches?0:now/1000;
    captureEffects.update(now);
    comedy?.update(now);diagnostics.comedy=comedy?.snapshot()??null;
    waterMaterial.uniforms.time.value=time;
    fireMaterial.uniforms.time.value=time;
    diagnostics.waterTime=time;diagnostics.fireTime=time;
    for(const b of animatedBreeze){b.g.rotation.z=Math.sin(time*1.05+b.phase)*.025;b.g.rotation.x=Math.sin(time*.8+b.phase)*.018;}
    for(const f of animatedFlowers)f.g.rotation.y=Math.sin(time*1.3+f.phase)*.1;
    for(const t of torches){
      const n=Math.sin(time*12+t.phase)*.1+Math.sin(time*19+t.phase)*.05;
      t.flame.scale.y=.35*(1+n);t.flame.rotation.z=n*.7;t.core.scale.y=.23*(1-n*.6);t.light.intensity=1.9+n*3;
    }
    for(const line of fallLines)line.m.position.y=line.base-((time*1.7+line.phase)%1.9);
    for(const ripple of ripples){const f=(time*.6+ripple.phase)%1;ripple.m.scale.setScalar(.6+f*1.7);ripple.m.material.opacity=(1-f)*.5;}
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      if(p.burst){
        const age=now/1000-p.born;if(age>.65){scene.remove(p.m);p.m.material.dispose();particles.splice(i,1);continue;}
        p.m.position.set(p.x+Math.sin(p.angle)*age*1.2,.65+Math.sin(age*Math.PI/.65)*.5,p.z+Math.cos(p.angle)*age*1.2);p.m.material.opacity=1-age/.65;
      }else if(p.spray){p.m.position.y=p.base+Math.abs(Math.sin(time*2+p.phase))*.32;p.m.scale.copy(p.scale).multiplyScalar(.7+Math.sin(time*2+p.phase)*.25);}
      else if(p.fire){p.m.position.y=p.base+((time*.8+p.phase)%1.1);p.m.position.x=Math.sin(time*2+p.phase)*.13;}
      else if(p.fly){p.m.position.y=p.base+Math.sin(time+p.phase)*.19;p.m.position.x=p.x+Math.sin(time*.6+p.phase)*.25;}
    }
    stars.forEach((s,i)=>s.material.emissiveIntensity=.12+(Math.sin(time*2+i)+1)*.1);
    const rect=svg.getBoundingClientRect(),ctm=svg.getScreenCTM();
    const inverse=ctm?.inverse(),room=getRoom(),game=room?.game;
    const rollKey=game?.lastRoll?room.code+':'+game.lastRoll.id:null;
    if(rollKey!==observedRoll){
      if(rollKey!==null&&observedRoll?.startsWith(room.code+':')){rollHighlightSeat=game.lastRoll.seat;rollHighlightUntil=now+1200;}
      else {rollHighlightUntil=0;rollHighlightSeat=-1;}
      observedRoll=rollKey;
    }
    const victory=game?.phase==='celebration' && getServerTime()<game.celebration.endsAt ? game.celebration : null;
    const highlightedSeat=game&&['roll','move','waiting'].includes(game.phase)?(now<rollHighlightUntil?rollHighlightSeat:game.turn):-1;
    if(highlightedSeat!==previousHighlightedSeat){
      characterMaterials.forEach((copies,seat)=>copies.forEach(({material,emissive,intensity})=>{
        const lightSurface=material.color.r+material.color.g+material.color.b>.4;
        if(seat===highlightedSeat&&lightSurface&&emissive.getHex()===0){material.emissive.set(colors[seat]);material.emissiveIntensity=.14;}
        else {material.emissive.copy(emissive);material.emissiveIntensity=intensity;}
      }));
      previousHighlightedSeat=highlightedSeat;
    }
    const highlightedTokens=[],legalTokens=[];
    // Read all CSS transforms before writing projected hit targets. Interleaving
    // these reads/writes previously forced a style recalculation per explorer.
    const transforms=animals.map(a=>getComputedStyle(tokenNodes.get(a.seat+'-'+a.token)).transform);
    const activeEmotes=new Map();
    for(const [seat,emote] of characterEmotes){
      const age=(now-emote.started)/1000,duration=emote.kind==='dance'?2.8:emote.kind==='wave'?2.4:2.2;
      if(emote.room!==room?.code||age>=duration){characterEmotes.delete(seat);continue;}
      const strength=reduced.matches?0:Math.max(0,Math.min(1,age/.16,(duration-age)/.25));
      const hop=emote.kind==='jump'&&!reduced.matches&&age>.16&&age<1.9?Math.sin(Math.PI*((age-.16)%.58/.58)):0;
      activeEmotes.set(seat,{seat,kind:emote.kind,age,strength,hop,jumpHeight:hop*.7,participants:0});
    }
    if(victory) for(const seat of victory.seats){
      const age=Math.max(0,(getServerTime()-victory.startedAt)/1000);
      const duration=(victory.endsAt-victory.startedAt)/1000;
      activeEmotes.set(seat,{seat,kind:'victory',age,strength:reduced.matches?0:Math.max(0,Math.min(1,age/.25,(duration-age)/.4)),hop:0,jumpHeight:0,participants:0});
    }
    for(const [index,a] of animals.entries()){
      const el=tokenNodes.get(a.seat+'-'+a.token),transform=transforms[index];
      const matrix=transform==='none'?new DOMMatrix():new DOMMatrix(transform);
      const walking=el.classList.contains('walking'),finished=el.classList.contains('finished');
      const winning=!!victory?.seats.includes(a.seat);
      a.g.visible=winning||!room||(!finished && !!room?.seats[a.seat]&&(!game||game.active.includes(a.seat)));
      if(!a.g.visible)continue;
      const p=Number(el.dataset.visualStep),scale=winning||p<0?1.25:.88;
      if(reduced.matches)a.g.scale.setScalar(scale);
      else a.g.scale.setScalar(T.MathUtils.lerp(a.g.scale.x,scale,.2));
      a.g.position.set(matrix.e-7.5,.5,matrix.f-7.5);
      if(winning){const [r,c]=yards[a.seat][a.token];a.g.position.set(c-7.5,.5,r-7.5);}
      const phase=time*(walking?[14,12,15,18][a.dance]:2)+a.phase;
      a.body.position.x=0;
      a.body.position.y=walking?Math.abs(Math.sin(phase))*(a.dance===2?.16:.095):Math.sin(phase)*.017;
      a.body.rotation.z=walking?Math.sin(phase)*.06:Math.sin(time*.8+a.phase)*.016;
      a.body.rotation.x=0;a.body.rotation.y=0;a.body.scale.set(1,1,1);
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*.1);
      a.head.rotation.y=Math.sin(time*.7+a.phase)*.08;
      a.head.rotation.z=Math.sin(time*.9+a.phase)*.026;
      a.head.rotation.x=-.4;
      a.eyes.scale.y=(time+a.phase)%4.8<.13?.12:1;
      a.eyeParts.forEach(({pupil,glint})=>{pupil.scale.y=.064;glint.scale.y=.018;});
      a.feet[0].rotation.x=walking?Math.sin(phase)*.5:0;a.feet[1].rotation.x=walking?-Math.sin(phase)*.5:0;
      const active=a.seat===highlightedSeat,legal=el.classList.contains('movable');
      a.ring.visible=active||legal;
      a.ring.scale.setScalar((legal?1.15:1)+Math.sin(time*3)*.06);
      a.halo.visible=active;a.halo.scale.setScalar(1+Math.sin(time*3)*.04);
      a.marker.visible=legal;a.marker.position.y=1.63+Math.sin(time*4)*.06;
      if(active)highlightedTokens.push(a.seat+'-'+a.token);
      if(legal)legalTokens.push(a.seat+'-'+a.token);
      if(el.classList.contains('reacting'))a.body.position.y+=Math.abs(Math.sin(time*7))*.12;
      const emote=activeEmotes.get(a.seat);
      if(emote){
        emote.participants++;
        a.ring.visible=true;
        if(emote.kind==='victory'&&reduced.matches){a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*1.3);a.halo.visible=true;}
        if(!reduced.matches){
          const {age,strength,hop}=emote;
          if(emote.kind==='jump'){
            const crouch=age<.16?Math.sin(age/.16*Math.PI)*.15:0;
            const settle=age>=1.9?Math.sin((age-1.9)/.3*Math.PI)*.08:0;
            a.body.position.y+=emote.jumpHeight-crouch*.25;
            a.body.scale.set(1+crouch+settle-hop*.035,1-crouch-settle+hop*.07,1+crouch*.5);
            a.body.rotation.z+=Math.sin(age*11)*.07*strength;
            a.head.rotation.z+=Math.sin(age*7)*.12*strength;
            a.eyes.scale.y=1-hop*.35;
            a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1.95+Math.sin(age*15)*.22)*strength);
            a.feet.forEach((foot,i)=>foot.rotation.x+=hop*(i?.45:-.35));
          }else if(emote.kind==='victory'){
            // Each animal has its own routine, using only existing body joints.
            const beat=age*7+a.token*.3,sway=Math.sin(beat),step=Math.sin(beat+Math.PI/2);
            a.halo.visible=true;
            if(a.dance===0){ // Bear/Monkey: belly bounce and big alternating claps.
              a.body.position.y+=Math.abs(sway)*.16*strength;
              a.body.rotation.z=sway*.13*strength;
              a.body.scale.set(1+step*.04*strength,1-step*.04*strength,1);
              a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1.2+sway*.65)*strength);
            }else if(a.dance===1){ // Panda/Raccoon: playful waddle and shoulder shimmy.
              a.body.position.x=sway*.13*strength;
              a.body.rotation.z=sway*.24*strength;a.head.rotation.z=-sway*.2*strength;
              a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1+Math.sin(beat+i*Math.PI)*.8)*strength);
            }else if(a.dance===2){ // Deer/Rabbit: light prancing with a gentle twirl.
              a.body.position.y+=Math.abs(sway)*.3*strength;
              a.body.rotation.y=Math.sin(age*2)*.85*strength;
              a.body.rotation.z=step*.1*strength;
              a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*1.7*strength);
            }else{ // Fox: side steps, head bob and disco arms.
              a.body.position.x=sway*.18*strength;
              a.body.rotation.y=step*.5*strength;a.head.rotation.x+=sway*.15*strength;
              a.arms[0].rotation.z=-(1.7+step*.7)*strength;
              a.arms[1].rotation.z=(1.7-step*.7)*strength;
            }
            a.feet.forEach((foot,i)=>foot.rotation.x=Math.sin(beat+i*Math.PI)*.55*strength);
            // A comic flip, soft landing, then a cheeky victory pose each cycle.
            const phrase=(age+a.token*.18)%7;
            if(phrase>=2&&phrase<3.4){
              const f=(phrase-2)/1.4,air=Math.sin(Math.PI*f);
              a.body.position.y+=air*1.9*strength;
              a.body.rotation.x=(a.seat%2?1:-1)*f*Math.PI*2*strength;
              a.body.rotation.z*=.2;
              a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*2.2*strength);
              a.feet.forEach(foot=>foot.rotation.x=-.6*air*strength);
            }else if(phrase>=3.4&&phrase<3.8){
              const squash=Math.sin((phrase-3.4)/.4*Math.PI)*.16*strength;
              a.body.scale.set(1+squash,1-squash,1+squash*.5);
            }else if(phrase>=4&&phrase<6){
              a.body.rotation.y=Math.sin(phrase*3)*.5*strength;
              a.head.rotation.z=Math.sin(phrase*9)*.16*strength;
              a.arms[1].rotation.z=2.05*strength;
              a.arms[0].rotation.z=-.3*strength;
              a.eyes.scale.y=(phrase%1<.18)?.15:1;
            }
          }else if(emote.kind==='dance'){
            const beat=age*10,sway=Math.sin(beat)*strength;
            a.body.position.y+=Math.abs(Math.sin(beat))*.11*strength;
            a.body.rotation.z+=sway*.14;a.body.rotation.y=Math.sin(beat*.5)*.4*strength;
            a.head.rotation.z-=sway*.12;a.head.rotation.x+=Math.cos(beat)*.07*strength;
            a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1.05+Math.sin(beat+i*Math.PI)*.55)*strength);
            a.feet.forEach((foot,i)=>foot.rotation.x+=Math.sin(beat+i*Math.PI)*.5*strength);
          }else{
            a.body.rotation.z-=.07*strength;
            a.head.rotation.y+=.12*strength;a.head.rotation.z+=Math.sin(age*5)*.07*strength;
            a.arms[1].rotation.z=(2.35+Math.sin(age*17)*.3)*strength;
            a.arms[0].rotation.z=-.3*strength;
          }
        }
      }
      if(!winning)captureEffects.pose(a,now);
      if(!winning&&!walking&&!emote)comedy?.pose(a,now);
      if(!winning)forestGifts.pose(a,now);
      a.g.updateMatrixWorld();
      if(comedy?.matches(a)){
        comedyPoint.set(0,1.9,0).applyMatrix4(a.g.matrixWorld).project(camera);
        comedy.anchor((comedyPoint.x*.5+.5)*100,(-comedyPoint.y*.5+.5)*100);
        if(diagnostics.comedy)diagnostics.comedy.pose={headYaw:a.head.rotation.y,headTilt:a.head.rotation.z,rightArm:a.arms[1].rotation.z};
      }
      if(inverse&&room&&legal)projectedHit(a,el,matrix,rect,inverse);
    }
    diagnostics.emotes=Array.from(activeEmotes.values()).map(({seat,kind,participants,jumpHeight,strength})=>({seat,kind,participants,jumpHeight,strength}));
    diagnostics.victory= victory ? {seats:victory.seats,final:victory.final,endsAt:victory.endsAt,routines:victory.seats.map(s=>['belly-clap','waddle-shimmy','prance-twirl','disco-step'][seatCharacter(room?.seats[s],s).dance]),flips:animals.filter(a=>victory.seats.includes(a.seat)).map(a=>({seat:a.seat,token:a.token,rotation:a.body.rotation.x,height:a.body.position.y}))} : null;
    diagnostics.highlight={seat:highlightedSeat,tokens:highlightedTokens,legalTokens};
    forestGifts.frame(now);
    scene.updateMatrixWorld();
    for(const {batch,sources} of batches){
      sources.forEach((source,i)=>{
        let visible=source.visible,node=source.parent;
        while(node&&visible){visible=node.visible;node=node.parent;}
        batch.setMatrixAt(i,visible?source.matrixWorld:zeroMatrix);
      });
      batch.instanceMatrix.needsUpdate=true;
    }
    renderer.render(scene,camera);diagnostics.frames++;
    diagnostics.time=time;diagnostics.drawCalls=renderer.info.render.calls;
    diagnostics.triangles=renderer.info.render.triangles;
    if(frames>=30){diagnostics.fps=Math.round(1000*frames/frameMs);frames=0;frameMs=0;}
  }
  resize();requestAnimationFrame(tick);
  renderer.domElement.addEventListener('webglcontextlost',()=>{if(!stopped)board.dataset.renderer='lost';},{passive:true});
  return {resize,pickToken,celebrate,capture,gift:forestGifts.start,deferGift:forestGifts.defer,resetCaptures:()=>{captureEffects.reset();forestGifts.reset();},renderer,scene,camera,diagnostics,dispose(){
    stopped=true;captureEffects.dispose();forestGifts.dispose();observer.disconnect();visibilityObserver.disconnect();effectObserver.disconnect();window.removeEventListener('scroll',onScroll);
    const geometries=new Set(),allMaterials=new Set(materials.values()),textures=new Set();
    characterMaterials.forEach(copies=>copies.forEach(({material})=>allMaterials.add(material)));
    scene.traverse(node=>{if(node.geometry)geometries.add(node.geometry);if(node.material)for(const material of [node.material].flat())allMaterials.add(material);node.shadow?.dispose();});
    for(const material of allMaterials){for(const value of Object.values(material))if(value?.isTexture)textures.add(value);material.dispose();}
    for(const geometry of geometries)geometry.dispose();for(const texture of textures)texture.dispose();
    renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
  }};
}
