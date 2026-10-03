import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {GIFT_DURATION,OUTFITS} from '../forest-gifts.mjs';

// One reusable monkey. Outfits use shared geometry and at most two batches per
// style, rather than a separate draw call for every hat, lens or flower.
export function createForestGiftEffects({scene,camera,board,animals,track,reduced,getRoom,diagnostics}) {
  const material=new T.MeshStandardMaterial({vertexColors:true,roughness:.75});
  const markerMaterial=new T.MeshBasicMaterial({vertexColors:true,transparent:true,opacity:.75,depthWrite:false});
  const sphere=new T.SphereGeometry(1,16,10),resources=[],outfitBatches=new Map();
  const dummy=new T.Object3D(),projected=new T.Vector3(),from=new T.Vector3(),to=new T.Vector3();
  const zero=new T.Matrix4().makeScale(0,0,0),pending=new Map();
  let monkey=null,current=null,markers=null;
  function part(parts,geometry,color,position=[0,0,0],scale=[1,1,1],rotation=[0,0,0]) {
    const copy=geometry.clone(),g=copy.index?copy.toNonIndexed():copy;if(g!==copy)copy.dispose();dummy.position.fromArray(position);dummy.scale.fromArray(scale);dummy.rotation.fromArray(rotation);dummy.updateMatrix();
    g.applyMatrix4(dummy.matrix);
    const c=new T.Color(color),array=new Float32Array(g.attributes.position.count*3);
    for(let i=0;i<array.length;i+=3){array[i]=c.r;array[i+1]=c.g;array[i+2]=c.b;}
    g.setAttribute('color',new T.BufferAttribute(array,3));parts.push(g);
  }
  const ball=(parts,color,x,y,z,sx,sy=sx,sz=sx,rotation=[0,0,0])=>part(parts,sphere,color,[x,y,z],[sx,sy,sz],rotation);
  function cylinder(parts,color,x,y,z,r,height){const g=new T.CylinderGeometry(r,r,height,24);part(parts,g,color,[x,y,z]);g.dispose();}
  function merge(parts){const g=mergeGeometries(parts);parts.forEach(p=>p.dispose());resources.push(g);return g;}
  function solid(parts,parent){const m=new T.Mesh(merge(parts),material);m.castShadow=false;parent.add(m);return m;}
  function flowers(parts,y,z,radius=.3){
    for(let i=0;i<5;i++){
      const a=i*Math.PI*2/5,x=Math.cos(a)*radius,zz=z+Math.sin(a)*radius;
      for(let p=0;p<5;p++){const b=p*Math.PI*2/5;ball(parts,i%2?'#ffc56a':'#ff88ae',x+Math.cos(b)*.045,y,zz+Math.sin(b)*.045,.045,.022,.045);}
      ball(parts,'#ffe990',x,y+.025,zz,.027);
    }
  }
  function glasses(parts,goggles=false){
    for(const x of [-.14,.14]){
      ball(parts,goggles?'#a96b30':'#3e4030',x,-.32,.29,.128,.1,.04);
      ball(parts,goggles?'#79cdd0':'#253a35',x,-.32,.327,.097,.072,.014);
      ball(parts,'#e0f6e8',x-.03,-.292,.342,.018,.023,.006);
    }
    ball(parts,'#d0a560',0,-.315,.323,.035,.015,.014);
  }
  function buildOutfit(kind) {
    const head=[],body=[];
    if(kind===0){
      cylinder(head,'#e8bf70',0,0,0,.44,.035);ball(head,'#e8c886',0,.105,0,.3,.19,.29);
      cylinder(head,'#4d7340',0,.055,0,.307,.075);ball(head,'#8bc65b',.24,.23,-.07,.04,.2,.025,[0,0,-.45]);
      glasses(head);ball(body,'#d7c277',0,.85,.22,.2,.045,.04);
    }else if(kind===1){
      const shape=new T.Shape();shape.moveTo(-.46,-.02);shape.quadraticCurveTo(-.4,.43,0,.15);shape.quadraticCurveTo(.4,.43,.46,-.02);shape.closePath();
      const hat=new T.ExtrudeGeometry(shape,{depth:.08,bevelEnabled:false});part(head,hat,'#354039',[0,0,.015]);hat.dispose();
      ball(head,'#ffdc81',0,.125,.11,.074,.052,.025);
      for(const x of [-.09,.09])ball(head,'#45302a',x,-.5,.39,.11,.038,.025,[0,0,x>0?.3:-.3]);
      ball(body,'#ce6350',0,.84,.19,.2,.07,.06);
    }else if(kind===2){
      cylinder(head,'#c8a559',0,.015,0,.29,.04);
      for(let i=0;i<7;i++){const a=i*Math.PI*2/7;ball(head,i%2?'#9bd75c':'#429c46',Math.cos(a)*.28,.1,Math.sin(a)*.28,.06,.17,.025,[0,-a,Math.cos(a)*.28]);}
      ball(head,'#ffe78f',0,.075,.3,.065,.065,.026);
      ball(body,'#53916a',0,.49,-.3,.32,.4,.055);ball(body,'#e4cb6d',0,.83,.22,.055);
    }else if(kind===3){
      cylinder(head,'#e4c285',0,0,0,.42,.035);ball(head,'#e8ce9b',0,.07,0,.29,.13,.28);flowers(head,.07,0);
      // A front garland with large, readable flowers.
      for(const x of [-.17,0,.17]){
        ball(body,'#72b65a',x,.82-Math.abs(x)*.25,.24,.08,.065,.025);
        for(let i=0;i<5;i++){const a=i*Math.PI*2/5;ball(body,'#ff9fb8',x+Math.cos(a)*.035,.81-Math.abs(x)*.25+Math.sin(a)*.035,.275,.035,.035,.012);}
        ball(body,'#ffe68b',x,.81-Math.abs(x)*.25,.292,.023,.023,.009);
      }
    }else if(kind===4){
      const cone=new T.ConeGeometry(.25,.48,16);part(head,cone,'#a47ad6',[0,.22,0],[1,1,1],[0,0,-.18]);cone.dispose();
      ball(head,'#ffe294',.045,.45,0,.068);
      for(const x of [-.12,.12])ball(body,x<0?'#e67a89':'#ffbc63',x,.81,.245,.13,.07,.035,[0,0,x<0?-.25:.25]);
      ball(body,'#fff0a4',0,.81,.285,.04);
    }else{
      ball(head,'#a87642',0,.04,-.02,.3,.16,.29);glasses(head,true);
      ball(body,'#fa9d50',0,.82,.2,.21,.065,.07);
      ball(body,'#ef7144',.19,.66,.245,.065,.18,.035,[0,0,-.3]);
    }
    const pair={head:new T.InstancedMesh(merge(head),material,17),body:new T.InstancedMesh(merge(body),material,16)};
    for(const batch of Object.values(pair)){
      batch.frustumCulled=false;batch.instanceMatrix.setUsage(T.DynamicDrawUsage);batch.visible=false;
      for(let i=0;i<batch.count;i++)batch.setMatrixAt(i,zero);
      scene.add(batch);
    }
    outfitBatches.set(kind,pair);return pair;
  }
  function makeMonkey(){
    const root=new T.Group(),body=new T.Group(),head=new T.Group(),arms=[];root.add(body);head.position.set(0,1.03,0);head.rotation.x=-.35;body.add(head);
    const torso=[],face=[];
    ball(torso,'#985831',0,.56,0,.25,.34,.2);ball(torso,'#ead3a0',0,.55,.18,.17,.24,.035);
    ball(torso,'#426f35',.25,.46,-.19,.15,.22,.14);
    const curve=new T.CatmullRomCurve3([new T.Vector3(.17,.4,-.13),new T.Vector3(.52,.33,-.2),new T.Vector3(.75,.58,-.17),new T.Vector3(.7,.86,-.12),new T.Vector3(.49,.82,-.1)]);
    const tail=new T.TubeGeometry(curve,16,.043,6,false);part(torso,tail,'#985831');tail.dispose();
    ball(face,'#96512c',0,0,0,.34,.32,.29);ball(face,'#ead3a0',0,-.04,.245,.26,.235,.05);
    for(const sign of [-1,1]){
      ball(face,'#985831',sign*.34,.05,0,.15,.16,.09);ball(face,'#e9bc89',sign*.35,.05,.07,.085,.1,.018);
      ball(face,'#30271d',sign*.1,.005,.3,.045,.065,.025);ball(face,'#fff6dc',sign*.1-.012,.03,.32,.012,.018,.008);
      ball(torso,'#754326',sign*.13,.16,.05,.115,.12,.17);
      const arm=new T.Group(),parts=[];arm.position.set(sign*.26,.72,.045);body.add(arm);
      ball(parts,'#985831',0,-.15,0,.085,.22,.09);ball(parts,'#eacb93',0,-.32,.02,.09,.085,.09);solid(parts,arm);arms.push(arm);
    }
    ball(face,'#66412c',0,-.095,.31,.049,.035,.028);
    const smile=new T.QuadraticBezierCurve3(new T.Vector3(-.09,-.13,.31),new T.Vector3(0,-.23,.345),new T.Vector3(.09,-.13,.31));
    const smileGeo=new T.TubeGeometry(smile,10,.012,5,false);part(face,smileGeo,'#764c34');smileGeo.dispose();
    solid(torso,body);solid(face,head);root.visible=false;scene.add(root);
    return {root,body,head,arms};
  }
  function makeMarkers(){
    const parts=[],ring=new T.TorusGeometry(.36,.026,5,24);part(parts,ring,'#ffe08b',[0,0,0],[1,1,1],[Math.PI/2,0,0]);ring.dispose();
    const leaf=new T.SphereGeometry(1,8,5);part(parts,leaf,'#a4e271',[0,0,0],[.12,.025,.22],[0,.7,0]);leaf.dispose();
    const batch=new T.InstancedMesh(merge(parts),markerMaterial,2);batch.frustumCulled=false;batch.instanceMatrix.setUsage(T.DynamicDrawUsage);scene.add(batch);return batch;
  }
  const label=document.createElement('div');label.className='forest-gift-callout';label.hidden=true;label.setAttribute('aria-hidden','true');board.append(label);
  function reset(){current=null;pending.clear();if(monkey)monkey.root.visible=false;label.hidden=true;diagnostics.forestGift=null;}
  function defer(gift){if(gift)pending.set(gift.seat+'-'+gift.token,gift.outfit);}
  function start(gift){
    if(!gift||!getRoom()?.game)return;
    monkey??=makeMonkey();
    current={...gift,started:performance.now(),room:getRoom().code,revision:getRoom().game.revision,point:null};
    label.textContent='കുരങ്ങന്റെ സമ്മാനം! 🐒 '+OUTFITS[gift.outfit];label.hidden=false;
  }
  const ease=p=>{p=T.MathUtils.clamp(p,0,1);return p*p*(3-2*p);};
  function pose(a,now){
    if(!current||a.seat!==current.seat||a.token!==current.token)return;
    current.point=a.g.position.clone();
    const age=(now-current.started)/1000;
    if(reduced.matches)return;
    // Touch the backwards hat, straighten it, then cheer with the monkey.
    if(age>1.15&&age<1.9){a.arms[1].rotation.z=2.25;a.head.rotation.z=-.15;}
    if(age>1.9&&age<2.5){a.body.position.y+=Math.max(0,Math.sin(age*17))*.12;a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*1.6);a.head.rotation.z=Math.sin(age*14)*.08;}
  }
  function frame(now){
    const room=getRoom(),g=room?.game,f=g?.forestGifts;
    if(current&&(room?.code!==current.room||!g||g.revision<current.revision))reset();
    if(current&&(now-current.started)>=GIFT_DURATION){pending.delete(current.seat+'-'+current.token);current=null;monkey.root.visible=false;label.hidden=true;}
    const age=current?(now-current.started)/1000:0;
    if(current&&age>=1.15)pending.delete(current.seat+'-'+current.token);
    const worn=[];
    if(f)for(const a of animals){
      const kind=f.outfits[a.seat]?.[a.token],key=a.seat+'-'+a.token;
      if(Number.isInteger(kind)&&OUTFITS[kind]&&a.g.visible&&!pending.has(key))worn.push({a,kind});
    }
    const kinds=new Set(worn.map(w=>w.kind));if(current)kinds.add(current.outfit);
    for(const kind of kinds)if(!outfitBatches.has(kind))buildOutfit(kind);
    // Compact the visible instances: unused capacity must not consume vertex
    // work on phones, even though a zero-scale instance would be invisible.
    for(const pair of outfitBatches.values()){pair.head.count=0;pair.body.count=0;pair.head.visible=false;pair.body.visible=false;}
    for(const {a,kind} of worn){
      const pair=outfitBatches.get(kind);
      dummy.position.set(0,a.seat===2?.4:.34,0);dummy.rotation.set(0,0,0);dummy.scale.setScalar(1);
      if(current?.seat===a.seat&&current.token===a.token&&!reduced.matches){const correction=ease((age-1.4)/.45);dummy.rotation.y=Math.PI*(1-correction);dummy.rotation.z=.18*(1-correction);}
      dummy.updateMatrix();pair.head.setMatrixAt(pair.head.count++,dummy.matrix.premultiply(a.head.matrixWorld));pair.body.setMatrixAt(pair.body.count++,a.body.matrixWorld);pair.head.visible=true;pair.body.visible=true;
    }
    if(monkey)monkey.root.visible=!!current&&!reduced.matches&&age<2.9;
    if(current?.point){
      const p=current.point,enter=ease(age/.6),exit=ease((age-2.4)/.5);
      // Approach from the closest forest bank and remain beside the token.
      const side=p.x<0?-1:1,nearX=p.x+side*1.05,nearZ=p.z+.4,farX=side*8.8,farZ=p.z-1.1;
      monkey.root.position.set(T.MathUtils.lerp(farX,nearX,enter)+exit*(farX-nearX),.5+Math.sin(enter*Math.PI)*1.3+Math.sin(exit*Math.PI)*1.15,T.MathUtils.lerp(farZ,nearZ,enter)+exit*(farZ-nearZ));
      monkey.root.rotation.y=side>0?-.45:.45;monkey.root.scale.setScalar(.94);
      monkey.body.position.y=Math.abs(Math.sin(age*12))*.06;monkey.body.rotation.z=Math.sin(age*11)*.06;monkey.head.rotation.z=Math.sin(age*8)*.1;
      monkey.arms[0].rotation.z=-1.55;monkey.arms[1].rotation.z=age<.8?2.3:.8;
      if(age>1.9&&age<2.4)monkey.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1.2+Math.sin(age*24)*.5));
      monkey.root.updateMatrixWorld(true);
      if(age<1.15&&!reduced.matches){
        const a=animals[current.seat*4+current.token],pair=outfitBatches.get(current.outfit);
        from.set(0,-.35,.12).applyMatrix4(monkey.arms[0].matrixWorld);to.set(0,a.seat===2?.4:.34,0).applyMatrix4(a.head.matrixWorld);
        const transfer=ease((age-.8)/.35);
        dummy.position.copy(from).lerp(to,transfer);dummy.position.y+=Math.sin(transfer*Math.PI)*.3;
        dummy.rotation.set(.25*(1-transfer),transfer*Math.PI,.18);dummy.scale.setScalar(a.g.scale.x);dummy.updateMatrix();pair.head.setMatrixAt(pair.head.count++,dummy.matrix);pair.head.visible=true;
      }
      projected.set(p.x,2.3,p.z).project(camera);label.style.left=T.MathUtils.clamp((projected.x*.5+.5)*100,25,75)+'%';label.style.top=T.MathUtils.clamp((-projected.y*.5+.5)*100,28,65)+'%';
    }
    if(current&&reduced.matches)pending.delete(current.seat+'-'+current.token);
    for(const pair of outfitBatches.values()){pair.head.instanceMatrix.needsUpdate=true;pair.body.instanceMatrix.needsUpdate=true;}
    if(f){
      markers??=makeMarkers();markers.visible=g.phase!=='done'&&g.phase!=='celebration'&&g.active.some(seat=>f.counts[seat]<2);
      f.tiles.forEach((tile,i)=>{const [r,c]=track[tile];dummy.position.set(c-7,.515,r-7);dummy.rotation.set(0,reduced.matches?0:now/1700,0);dummy.scale.setScalar(reduced.matches?1:1+Math.sin(now/300+i)*.06);dummy.updateMatrix();markers.setMatrixAt(i,dummy.matrix);});markers.instanceMatrix.needsUpdate=true;
    }else if(markers)markers.visible=false;
    diagnostics.forestGift=current?{seat:current.seat,token:current.token,outfit:current.outfit,age,monkeyVisible:monkey.root.visible,reducedMotion:reduced.matches}:null;
    diagnostics.outfits=worn.map(({a,kind})=>({seat:a.seat,token:a.token,kind,name:OUTFITS[kind]}));
    diagnostics.giftTiles=f?.tiles||[];
  }
  return {start,defer,pose,frame,reset,duration:GIFT_DURATION,dispose(){reset();label.remove();if(monkey)scene.remove(monkey.root);if(markers){scene.remove(markers);markers.dispose();}for(const pair of outfitBatches.values())for(const batch of Object.values(pair)){scene.remove(batch);batch.dispose();}resources.forEach(g=>g.dispose());sphere.dispose();material.dispose();markerMaterial.dispose();}};
}
