import {square,SAFE,FINISH} from '../game.mjs';

export const MOVIE_LINES={
  chase:'എന്റെ ശിവനേ!',
  nearMiss:'എന്തോ… എങ്ങനെ!',
  capture:'രണ്ട് ഓലക്കീറോ വെള്ളത്തുണിയോ എടുത്തോളൂ എന്നെ മൂടാൻ',
  boast:'ഇനി നമ്മൾ എന്തും ചെയ്യും മല്ലയ്യാ!',
  noMove:'എന്തിനോ വേണ്ടി തിളക്കുന്ന സാമ്പാർ!',
  victory:'മൊതലാളി ജങ്ക ജഗ ജഗാ!'
};

// Short excerpts; credits and sources are recorded in VERIFICATION.md.
export const MOVIE_POOLS={
  chase:['ആരും പേടിക്കണ്ട… ഓടിക്കോ!','ടാസ്കി വിളിയെടാ!','ശിവനേ ഇത് ഏത് ജില്ലാ!',MOVIE_LINES.chase],
  nearMiss:['പോ മോനേ ദിനേശാ!','ഇതെന്ത് മറിമായം?',MOVIE_LINES.nearMiss,'ഇതൊക്കെ എന്ത്?'],
  capture:['ലേലു അല്ലു… ലേലു അല്ലു!','അങ്ങനെ പടക്ക കമ്പനി ഖുദാ ഹവാ!',MOVIE_LINES.capture],
  boast:['സവാരിഗിരിഗിരി!','ഒടുക്കത്തെ ബുദ്ധിയാ!',MOVIE_LINES.boast,'ഇതൊക്കെ എന്ത്?'],
  noMove:['ഇപ്പോ ശരിയാക്കി തരാം…','ഇതെന്ത് മറിമായം?',MOVIE_LINES.noMove],
  victory:[MOVIE_LINES.victory,'സവാരിഗിരിഗിരി!','ഇതൊക്കെ എന്ത്?']
};

export function createDialogueDeck(seed=''){
  const offset=[...seed].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0),used=new Map(),recent=[];
  let order=0;
  return {
    pick(kind,now){
      const pool=MOVIE_POOLS[kind]||[];
      const candidates=pool.map((_,i)=>pool[(i+offset)%pool.length])
        .filter(line=>!recent.slice(-2).includes(line)&&now-(used.get(line)?.time??-Infinity)>=90000)
        .sort((a,b)=>(used.get(a)?.order??-1)-(used.get(b)?.order??-1));
      const line=candidates[0];
      if(!line)return null;
      used.set(line,{time:now,order:order++});recent.push(line);
      if(recent.length>2)recent.shift();
      return line;
    }
  };
}

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

// Pace dialogue across the whole table, not separately for every token.
export function createComedyPacing(){
  let lastShown=-Infinity,lastRoll=null,noMoveShown=false;
  const spoken=new Map(),misses=[0,0,0,0];
  return {
    observeRoll(g){
      const roll=g?.lastRoll;
      if(!roll||roll.id===lastRoll)return;
      lastRoll=roll.id;
      misses[roll.seat]=g.phase==='waiting'?misses[roll.seat]+1:0;
    },
    allow(event,now,busy=false){
      if(!event)return false;
      if(event.kind==='noMove'&&(noMoveShown||misses[event.seat]<3))return false;
      const gap=event.kind==='capture'?12000:event.kind==='noMove'?90000:30000;
      if(now-(spoken.get(event.kind)??-Infinity)<gap)return false;
      if(now-lastShown<(event.kind==='capture'?8000:20000))return false;
      if(busy&&event.kind!=='capture')return false;
      lastShown=now;spoken.set(event.kind,now);
      if(event.kind==='noMove')noMoveShown=true;
      return true;
    },
    reset(){lastShown=-Infinity;lastRoll=null;noMoveShown=false;spoken.clear();misses.fill(0);}
  };
}

export function createMovieComedy({board,tokenNodes,reduced,getRoom}){
  const bubble=document.createElement('div');bubble.className='movie-callout';bubble.hidden=true;
  bubble.lang='ml';bubble.setAttribute('aria-hidden','true');board.append(bubble);
  const pacing=createComedyPacing();
  let current=null,actorNode=null,deck=null,victoryKey=null,victoryText=null;
  function dialogue(kind,now){deck??=createDialogueDeck(getRoom()?.code);return deck.pick(kind,now);}
  function clear(){
    actorNode?.classList.remove('movie-react');actorNode=null;current=null;bubble.hidden=true;
  }
  function reset(keepHistory=false){clear();if(!keepHistory){pacing.reset();deck=null;victoryKey=null;victoryText=null;}}
  function showActor(kind,seat,token,line){
    actorNode?.classList.remove('movie-react');
    current.kind=kind;current.seat=seat;current.token=token;
    actorNode=tokenNodes.get(seat+'-'+token);actorNode?.classList.add('movie-react');
    bubble.textContent=line;bubble.dataset.kind=kind;bubble.hidden=false;
  }
  function start(event){
    const room=getRoom(),now=performance.now();
    if(!event||!room?.game||['celebration','done'].includes(room.game.phase))return false;
    if(!pacing.allow(event,now,!!current))return false;
    const line=dialogue(event.kind,now);if(!line)return false;
    clear();
    current={...event,started:now,room:room.code,revision:room.game.revision,duration:event.kind==='capture'?4400:2300};
    showActor(event.kind,event.seat,event.token,line);anchor(50,40);return true;
  }
  function anchor(x,y){
    bubble.style.left=Math.max(27,Math.min(73,x))+'%';
    bubble.style.top=Math.max(27,Math.min(70,y))+'%';
  }
  function update(now){
    if(!current)return;
    const room=getRoom(),age=now-current.started;
    if(!room?.game||room.code!==current.room||room.game.revision<current.revision||['celebration','done'].includes(room.game.phase)||age>=current.duration){clear();return;}
    if(current.kind==='capture'&&age>=2500){
      const line=dialogue('boast',now);
      if(!line){clear();return;}
      showActor('boast',current.winner.seat,current.winner.token,line);
    }
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
  return {start,reset,clear,update,pose,matches,anchor,observeRoll:pacing.observeRoll,
    victoryLine(key){
      if(key!==victoryKey){victoryKey=key;victoryText=dialogue('victory',performance.now())||'കാടിന്റെ ചാമ്പ്യൻ! 🏆';}
      return victoryText;
    },
    snapshot:()=>current?{kind:current.kind,seat:current.seat,token:current.token,text:bubble.textContent,reducedMotion:reduced.matches}:null,
    dispose(){reset();bubble.remove();}};
}
