// Temporary poses on existing joints. Never move the board token or add a mesh.
export function funnyEmotePose(a,kind,age,strength) {
  const s=strength,beat=Math.sin(age*12),fast=Math.sin(age*27);
  const arms=(left,right)=>{a.arms[0].rotation.z=left*s;a.arms[1].rotation.z=right*s;};
  switch(kind){
    case 'scared':
      a.body.position.x+=fast*.065*s;a.body.scale.y=1-.12*s;
      a.head.rotation.z=fast*.11*s;a.head.rotation.x-=.18*s;
      a.eyes.scale.y=1+.35*s;arms(-2.35,2.35);break;
    case 'flee':
      a.body.rotation.x=-.27*s;a.body.position.y+=Math.abs(beat)*.12*s;
      a.head.rotation.y=Math.sin(age*5)*.65*s;
      arms(-.9-beat*.8,.9-beat*.8);
      a.feet.forEach((foot,i)=>foot.rotation.x=Math.sin(age*18+i*Math.PI)*.9*s);break;
    case 'taunt':
      a.body.rotation.y=Math.sin(age*7)*.42*s;a.body.rotation.z=beat*.09*s;
      a.head.rotation.z=-.24*s;a.eyes.scale.y=1-.35*s;arms(-.35,1.7+Math.sin(age*20)*.35);break;
    case 'cry':
      a.body.rotation.x=.22*s;a.body.position.y-=.09*s;
      a.head.rotation.x+=.34*s;a.head.rotation.z=fast*.07*s;
      a.eyes.scale.y=1-.85*s;arms(-2.65-fast*.15,2.65+fast*.15);break;
    case 'angry':
      a.body.rotation.x=.18*s;a.head.rotation.x+=.18*s;
      a.body.position.y+=Math.abs(beat)*.13*s;a.head.rotation.z=beat*.08*s;
      arms(-.75,.75);a.feet.forEach((foot,i)=>foot.rotation.x=Math.max(0,Math.sin(age*12+i*Math.PI))*.9*s);break;
    case 'sneak':
      a.body.scale.y=1-.3*s;a.body.rotation.x=.23*s;a.body.position.x+=Math.sin(age*4)*.1*s;
      a.head.rotation.y=Math.sin(age*4)*.8*s;arms(-1.15,1.15);
      a.feet.forEach((foot,i)=>foot.rotation.x=Math.sin(age*7+i*Math.PI)*.38*s);break;
    case 'faint': {
      // Collapse, hold, then recover as strength fades out.
      const collapse=Math.min(1,Math.max(0,(age-.3)/.4))*s;
      a.body.rotation.z=-1.45*collapse;a.body.position.y-=.22*collapse;
      a.head.rotation.z=.2*collapse;a.eyes.scale.y=1-.92*collapse;arms(-.2,1.6);
      break;
    }
    case 'bow':
      a.body.rotation.x=.85*Math.sin(Math.min(1,age/1.3)*Math.PI)*s;
      a.head.rotation.x+=.3*s;arms(-.15,.15);break;
    case 'flex':
      a.body.rotation.y=Math.sin(age*3)*.25*s;a.body.scale.x=1+.09*s;
      a.head.rotation.x-=.12*s;arms(-1.65-beat*.15,1.65+beat*.15);break;
    case 'spin':
      a.body.rotation.y=age*Math.PI*3*s;a.body.position.y+=Math.abs(Math.sin(age*8))*.12*s;
      a.head.rotation.z=Math.sin(age*8)*.16*s;arms(-1.25,1.25);break;
    default:return false;
  }
  return true;
}
