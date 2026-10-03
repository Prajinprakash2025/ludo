import {square,SAFE,FINISH} from '../game.mjs';

export const MOVIE_LINES={
  chase:'എന്റെ ശിവനേ!',
  nearMiss:'എന്തോ… എങ്ങനെ!',
  capture:'രണ്ട് ഓലക്കീറോ വെള്ളത്തുണിയോ എടുത്തോളൂ എന്നെ മൂടാൻ',
  boast:'ഇനി നമ്മൾ എന്തും ചെയ്യും മല്ലയ്യാ!',
  noMove:'എന്തിനോ വേണ്ടി തിളക്കുന്ന സാമ്പാർ!',
  victory:'മൊതലാളി ജങ്ക ജഗ ജഗാ!'
};

// Read authoritative snapshots. Cosmetics never roll dice or change a turn.
export function moveComedy(g,m) {
  if(!g||!m||m.gift||['celebration','done'].includes(g.phase))return null;
  if(m.captured.length)return {kind:'capture',...m.captured[0],winner:{seat:m.seat,token:m.token}};
  if(m.old<0||m.next>50)return null;
  const target=square(m.seat,m.next),candidates=[];
  for(const seat of g.active){
    if(seat===m.seat)continue;
    g.tokens[seat].forEach((p,token)=>{
      const other=square(seat,p);
      if(other===null||SAFE.has(other))return;
      const ahead=(other-target+52)%52;
      // A one-square overshoot must really have passed the opponent this move.
      const passed=m.next-m.old>1&&square(m.seat,m.next-1)===other;
      if((ahead===1&&m.next+1<=50)||passed)candidates.push({kind:'nearMiss',seat,token});
      else if(ahead===2&&m.next+2<=50)candidates.push({kind:'chase',seat,token});
    });
  }
  return candidates.find(e=>e.kind==='nearMiss')||candidates[0]||null;
}
export function noMoveComedy(g){
  if(g?.phase!=='waiting'||!g.lastRoll||g.legal.length)return null;
  const seat=g.lastRoll.seat,token=g.tokens[seat].findIndex(p=>p<FINISH);
  return token<0?null:{kind:'noMove',seat,token};
}

export function createMovieComedy({board,tokenNodes,reduced,getRoom}){
  const bubble=document.createElement('div');bubble.className='movie-callout';bubble.hidden=true;
  bubble.lang='ml';bubble.setAttribute('aria-hidden','true');board.append(bubble);
  let current=null,lastAmbient=-Infinity,actorNode=null;
  function clear(){
    actorNode?.classList.remove('movie-react');actorNode=null;current=null;bubble.hidden=true;
  }
  function reset(){clear();lastAmbient=-Infinity;}
  function showActor(kind,seat,token){
    actorNode?.classList.remove('movie-react');
    current.kind=kind;current.seat=seat;current.token=token;
    actorNode=tokenNodes.get(seat+'-'+token);actorNode?.classList.add('movie-react');
    bubble.textContent=MOVIE_LINES[kind];bubble.dataset.kind=kind;bubble.hidden=false;
  }
  function start(event){
    const room=getRoom(),now=performance.now();
    if(!event||!room?.game||['celebration','done'].includes(room.game.phase))return false;
    if(event.kind!=='capture'&&(current||now-lastAmbient<6000))return false;
    clear();lastAmbient=now;
    current={...event,started:now,room:room.code,revision:room.game.revision,duration:event.kind==='capture'?4400:2300};
    showActor(event.kind,event.seat,event.token);anchor(50,40);return true;
  }
  function anchor(x,y){
    bubble.style.left=Math.max(27,Math.min(73,x))+'%';
    bubble.style.top=Math.max(27,Math.min(70,y))+'%';
  }
  function update(now){
    if(!current)return;
    const room=getRoom(),age=now-current.started;
    if(!room?.game||room.code!==current.room||room.game.revision<current.revision||['celebration','done'].includes(room.game.phase)||age>=current.duration){clear();return;}
    if(current.kind==='capture'&&age>=2500)showActor('boast',current.winner.seat,current.winner.token);
    if(board.dataset.renderer!=='webgl'&&actorNode){
      const b=board.getBoundingClientRect(),r=actorNode.getBoundingClientRect();
      if(b.width&&b.height)anchor((r.x+r.width/2-b.x)/b.width*100,(r.y-b.y)/b.height*100);
    }
  }
  function matches(a){return current&&current.seat===a.seat&&current.token===a.token;}
  function pose(a,now){
    if(!matches(a)||reduced.matches)return;
    const age=(now-current.started)/1000;
    // Existing capture flight owns the victim's joints until it lands.
    if(current.kind==='capture'&&age<1.35)return;
    const local=current.kind==='boast'?age-2.5:age;
    const fade=Math.max(0,Math.min(1,local/.18,(current.duration/1000-age)/.3));
    if(current.kind==='chase'){
      a.head.rotation.y+=Math.sin(Math.min(1,local/.5)*Math.PI/2)*.85*fade;
      a.eyes.scale.y=1+.3*fade;a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*.9*fade);
      a.body.position.y+=Math.max(0,Math.sin(local*9))*.07*fade;
    }else if(current.kind==='nearMiss'){
      a.head.rotation.z=Math.sin(local*5)*.16*fade;
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*1.2*fade);
    }else if(current.kind==='noMove'){
      a.head.rotation.x+=.22*fade;a.head.rotation.z=-.18*fade;
      a.arms[1].rotation.z=2.65*fade;
    }else if(current.kind==='boast'){
      a.body.rotation.x=-.14*fade;a.head.rotation.x-=.1*fade;
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*.8*fade);
      a.body.scale.set(1+.06*fade,1+.03*fade,1);
    }else{
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*2.2*fade);
      a.head.rotation.z=-.2*fade;
    }
  }
  return {start,reset,clear,update,pose,matches,anchor,
    snapshot:()=>current?{kind:current.kind,seat:current.seat,token:current.token,text:bubble.textContent,reducedMotion:reduced.matches}:null,
    dispose(){reset();bubble.remove();}};
}
