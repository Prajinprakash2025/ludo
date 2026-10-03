import * as T from 'three';

// A reusable, three-draw-call burst. It never changes authoritative game state.
export function createCaptureEffects({scene,camera,board,reduced,getRoom,diagnostics}) {
  const duration=1350,root=new T.Group(),dummy=new T.Object3D(),projected=new T.Vector3();
  const cameraHome=camera.position.clone();
  const star=new T.Shape();
  for(let i=0;i<10;i++){
    const angle=i*Math.PI/5, radius=i%2?.045:.1;
    if(i)star.lineTo(Math.cos(angle)*radius,Math.sin(angle)*radius);
    else star.moveTo(Math.cos(angle)*radius,Math.sin(angle)*radius);
  }
  star.closePath();
  const geometries=[new T.ShapeGeometry(star),new T.SphereGeometry(1,6,4),new T.SphereGeometry(1,6,4)];
  const materials=['#ffe67c','#80cf5a','#efdfb8'].map(color=>new T.MeshBasicMaterial({color,transparent:true,depthWrite:false,side:T.DoubleSide}));
  const counts=[6,6,4],bursts=counts.map((count,i)=>{
    const mesh=new T.InstancedMesh(geometries[i],materials[i],count);
    mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);mesh.frustumCulled=false;root.add(mesh);return mesh;
  });
  root.visible=false;scene.add(root);
  const callout=document.createElement('div');callout.className='capture-callout';callout.hidden=true;
  callout.setAttribute('aria-hidden','true');board.append(callout);
  const quips=['പിടിച്ചേ! 🐾','വീട്ടിൽ പോടാ! 😂','വീണ്ടും വാ! 😜'];
  let current=null;
  function reset(){
    current=null;root.visible=false;callout.hidden=true;camera.position.copy(cameraHome);
    diagnostics.capture=null;
  }
  function start(move,point){
    reset();
    if(!move.captured.length||!getRoom())return;
    current={started:performance.now(),room:getRoom().code,revision:getRoom().game.revision,
      seat:move.seat,token:move.token,victims:new Set(move.captured.map(p=>p.seat+'-'+p.token)),point};
    root.position.set(point.x,.65,point.z);
    callout.textContent=quips[((move.id%quips.length)+quips.length)%quips.length];callout.hidden=false;
  }
  function update(now){
    if(!current)return;
    const room=getRoom(),age=(now-current.started)/1000;
    if(room?.code!==current.room||!room.game||room.game.revision<current.revision||age>=duration/1000){reset();return;}
    const animated=!reduced.matches;
    root.visible=animated&&age<.85;
    // A small impact nudge, with no scrolling or layout movement.
    camera.position.x=cameraHome.x+(animated&&age<.16?Math.sin(age*90)*.035*(1-age/.16):0);
    const fade=Math.max(0,1-age/.85);
    if(root.visible)bursts.forEach((burst,kind)=>{
      burst.material.opacity=fade*(kind===2?.45:1);
      for(let i=0;i<counts[kind];i++){
        const angle=i*Math.PI*2/counts[kind]+kind*.35,radius=.14+age*(kind===2?.7:1.45);
        dummy.position.set(Math.cos(angle)*radius,kind===2?.02:Math.sin(Math.min(1,age/.85)*Math.PI)*.65+.13,Math.sin(angle)*radius);
        if(kind===0){dummy.quaternion.copy(camera.quaternion);dummy.rotateZ(age*6+i);dummy.scale.setScalar(1.4);}
        else{dummy.rotation.set(age*5+i,angle,age*3);dummy.scale.set(kind===1?.12:.16,kind===1?.025:.14,kind===1?.22:.16);}
        dummy.updateMatrix();burst.setMatrixAt(i,dummy.matrix);
      }
      burst.instanceMatrix.needsUpdate=true;
    });
    projected.set(current.point.x,2.45,current.point.z).project(camera);
    callout.style.left=Math.max(25,Math.min(75,(projected.x*.5+.5)*100))+'%';
    callout.style.top=Math.max(26,Math.min(65,(-projected.y*.5+.5)*100))+'%';
    diagnostics.capture={seat:current.seat,token:current.token,victims:[...current.victims],age,
      routine:['belly-laugh','clap','head-wiggle','wink'][current.seat],particles:root.visible?16:0,reducedMotion:!animated,poses:[]};
  }
  function pose(a,now){
    if(!current||reduced.matches)return;
    const age=(now-current.started)/1000,fade=Math.min(1,age/.1,(1.35-age)/.2);
    if(a.seat===current.seat&&a.token===current.token){
      a.ring.visible=true;a.halo.visible=true;
      const bounce=Math.max(0,Math.sin(age*14))*.11*fade;
      a.body.position.y+=bounce+(age<.3?Math.sin(age/.3*Math.PI)*.25:0);
      if(a.seat===0){
        a.body.rotation.x=Math.sin(age*17)*.12*fade;a.body.scale.y=1-Math.abs(Math.sin(age*17))*.06*fade;
        a.head.rotation.x-=Math.abs(Math.sin(age*17))*.1*fade;
        a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(.8+Math.sin(age*17)*.35)*fade);
      }else if(a.seat===1){
        a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*(1.15+Math.sin(age*20)*.55)*fade);
        a.body.rotation.z=Math.sin(age*12)*.08*fade;
      }else if(a.seat===2){
        a.head.rotation.z=Math.sin(age*22)*.2*fade;a.head.rotation.y=Math.sin(age*15)*.23*fade;
        a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*1.25*fade);
      }else{
        a.head.rotation.z=-.16*fade;a.arms[1].rotation.z=(1.8+Math.sin(age*18)*.25)*fade;
        if(age>.5&&age<1.05){a.eyeParts[1].pupil.scale.y=.008;a.eyeParts[1].glint.scale.y=.003;}
      }
    }else if(current.victims.has(a.seat+'-'+a.token)){
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*2.2*fade);
      if(age<.22){a.eyes.scale.y=1.45;a.head.rotation.z=Math.sin(age*45)*.14;a.body.scale.set(1.1,.88,1.05);}
      else if(age<.92){
        const flight=(age-.22)/.7;
        a.body.position.y+=Math.sin(flight*Math.PI)*1.35;
        a.body.rotation.y=flight*Math.PI*4;a.body.rotation.z=Math.sin(flight*Math.PI)*.35;
        a.feet.forEach(foot=>foot.rotation.x=-.5);
      }else{
        const squash=Math.max(0,Math.sin((age-.92)/.25*Math.PI))*.16*fade;
        a.body.scale.set(1+squash,1-squash,1+squash*.5);a.head.rotation.z=-.18*fade;
      }
    }
    if((a.seat===current.seat&&a.token===current.token)||current.victims.has(a.seat+'-'+a.token)){
      diagnostics.capture?.poses.push({seat:a.seat,token:a.token,height:a.body.position.y,spin:a.body.rotation.y,headTilt:a.head.rotation.z,rightEye:a.eyeParts[1].pupil.scale.y});
    }
  }
  return {start,update,pose,reset,duration,dispose(){reset();callout.remove();scene.remove(root);bursts.forEach(b=>b.dispose());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
