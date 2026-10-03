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
  // Existing film excerpts are mixed with original, situation-specific game banter.
  chase:['ആരും പേടിക്കണ്ട… ഓടിക്കോ!','ടാസ്കി വിളിയെടാ!',MOVIE_LINES.chase,
    'പിന്നിൽ കാൽപ്പെരുമാറ്റം… എന്നെയാണോ നോക്കുന്നത്?',
    'ഇത്ര അടുത്ത് വരണ്ട! സൗഹൃദത്തിന് ഒരു അകലം വേണം!',
    'എന്റെ പിന്നാലെ തന്നെ! വേറെ വഴി ഇല്ലേ?',
    'അയ്യോ, അടുത്തെത്തി! പകിടേ, എന്നെ കൈവിടല്ലേ!',
    'ഞാൻ മുന്നിൽ പോയത് ഇതിനായിരുന്നോ!',
    'തിരിഞ്ഞു നോക്കിയപ്പോൾ… ദാ, തൊട്ടുപിന്നിൽ!',
    'ഒന്ന് വേഗം നടക്കട്ടെ… പിന്നിൽ ഒരാൾക്ക് തിരക്കുണ്ട്!'],
  nearMiss:['പോ മോനേ ദിനേശാ!',MOVIE_LINES.nearMiss,
    'അയ്യോ… പിടിച്ചെന്ന് കരുതി! ഭാഗ്യം, കിട്ടിയില്ല!',
    'ഒരു നിമിഷം ശ്വാസം നിന്നു! ഇപ്പോൾ ശരിയായി!',
    'ഇത്ര അടുത്തെത്തിയിട്ടും പിടിക്കാൻ പറ്റിയില്ലല്ലോ!',
    'എന്റെ വീട്ടിലേക്ക് മടക്കാൻ ഇന്നെന്തായാലും പറ്റിയില്ല!',
    'ഹോ! ഈ പകിട എന്നെ രക്ഷിച്ചു!',
    'പിടിക്കാനുള്ള ആ പ്ലാൻ ചെറുതായി പാളി, അല്ലേ?'],
  escape:['ഹോ! കുറച്ചെങ്കിലും അകലം കിട്ടി!',
    'പിന്നിലുണ്ടായിരുന്നു… ഞാൻ ഇത്തിരി വേഗം കൂട്ടി!',
    'എന്നെ പിടിക്കാൻ വന്നതാ? ഞാൻ ഇങ്ങെത്തി!',
    'നേരത്തെ അടുത്തായിരുന്നു… ഇപ്പോൾ ശ്വാസം വിടാം!',
    'എന്റെ പിന്നാലെ വരാം… ഒപ്പം എത്താൻ കുറച്ച് പണിപ്പെടും!',
    'ഓടിയതല്ല… സുരക്ഷിതമായ അകലം പാലിച്ചതാണ്!',
    'വീട്ടിലേക്ക് മടങ്ങാൻ പറഞ്ഞതാ… ഞാൻ മുന്നോട്ട് പോയി!'],
  overtake:['ഇത്തിരി വഴിയേ… ഞാൻ മുന്നോട്ട് പോകട്ടെ!',
    'കുറച്ച് മുമ്പ് മുന്നിലായിരുന്നല്ലോ! ഇപ്പോൾ എന്തുപറ്റി?',
    'മുന്നിൽ നിന്ന ആള് പിന്നിലായി! പകിടയുടെ ഓരോ കളികൾ!',
    'ഒന്ന് മാറിനിന്നതാണോ? നന്ദിയുണ്ട് കേട്ടോ!',
    'ഞാൻ കടന്നുപോയി… ഇനി പിന്നാലെ കാണാം!',
    'ഒരു ചെറിയ നടത്തം… ഒരു വലിയ സ്ഥാനമാറ്റം!',
    'നിന്നെ പിടിച്ചില്ല! പക്ഷേ കടന്നുപോയി!'],
  capture:['ലേലു അല്ലു… ലേലു അല്ലു!','അങ്ങനെ പടക്ക കമ്പനി ഖുദാ ഹവാ!',MOVIE_LINES.capture,
    'വീടെത്തി! പക്ഷേ ഞാൻ ഉദ്ദേശിച്ച വീട് ഇതല്ല!',
    'ഇത്ര ദൂരം നടന്നിട്ട്… വീണ്ടും തുടക്കം മുതൽ!',
    'ഒരു ചായ കുടിക്കാൻ വീട്ടിലേക്ക് അയച്ചതാണല്ലേ?',
    'എന്റെ യാത്രയ്ക്ക് ഇങ്ങനെയൊരു ഇടവേള വേണ്ടായിരുന്നു!',
    'കുറച്ച് മുമ്പ് മുന്നിലായിരുന്നു… ഇപ്പോൾ മുറ്റത്തായി!'],
  boast:['സവാരിഗിരിഗിരി!','ഒടുക്കത്തെ ബുദ്ധിയാ!',MOVIE_LINES.boast,
    'വീട്ടിൽ എത്തിയില്ലേ? ഇനി പതുക്കെ വന്നാൽ മതി!',
    'വഴിയിൽ കണ്ടപ്പോൾ വീട്ടിലേക്ക് ഒന്ന് വിട്ടു!',
    'എന്റെ വഴിയിൽ നിന്നതാ… പിന്നെ എന്തുചെയ്യും!',
    'ഒരു പകിട! ഒരു മടക്കയാത്ര!'],
  noMove:['ഇപ്പോ ശരിയാക്കി തരാം…',MOVIE_LINES.noMove,
    'എല്ലാവരും നടന്നു… ഞാൻ പകിടയെ നോക്കി ഇരുന്നു!',
    'പകിടയ്ക്ക് ഇന്ന് എന്നോട് എന്തോ പിണക്കമുണ്ട്!',
    'നടക്കാൻ തയ്യാറാണ്… അനുമതി കിട്ടുന്നില്ല!',
    'ഇവിടെ ഇരുന്നാൽ വിജയിക്കുമോ? ഒന്ന് ചോദിച്ചതാ!',
    'ഈ പകിടയ്ക്ക് എന്റെ പ്ലാൻ മനസ്സിലായില്ല!'],
  victory:[MOVIE_LINES.victory,'സവാരിഗിരിഗിരി!',
    'കാടിന്റെ ചാമ്പ്യൻ എത്തിയല്ലോ!',
    'പകിടയും കൂട്ടുകാരും… ഇതാണ് ഇന്നത്തെ ആഘോഷം!',
    'നടന്ന് തുടങ്ങിയതാ… നൃത്തം ചെയ്ത് അവസാനിപ്പിച്ചു!']
};

export function createDialogueDeck(seed=''){
  const offset=[...seed].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0),used=new Map(),recent=[];
  let order=0;
  return {
    pick(kind,now){
      const pool=MOVIE_POOLS[kind]||[];
      const candidates=pool.map((_,i)=>pool[(i+offset)%pool.length])
        .filter(line=>!recent.includes(line)&&now-(used.get(line)?.time??-Infinity)>=60000)
        .sort((a,b)=>(used.get(a)?.order??-1)-(used.get(b)?.order??-1));
      const line=candidates[0];
      if(!line)return null;
      used.set(line,{time:now,order:order++});recent.push(line);
      if(recent.length>4)recent.shift();
      return line;
    }
  };
}

// Read authoritative snapshots. Cosmetics never roll dice or change a turn.
export function moveComedy(g,m) {
  if(!g||!m||m.gift||['celebration','done'].includes(g.phase))return null;
  if(m.captured.length)return {kind:'capture',...m.captured[0],winner:{seat:m.seat,token:m.token}};
  if(m.old<0||m.next>50)return null;
  const target=square(m.seat,m.next),origin=square(m.seat,m.old),steps=m.next-m.old,candidates=[];
  if(SAFE.has(target))return null;
  for(const seat of g.active){
    if(seat===m.seat)continue;
    g.tokens[seat].forEach((p,token)=>{
      const other=square(seat,p);
      if(other===null||SAFE.has(other))return;
      const ahead=(other-target+52)%52;
      const fromOrigin=(other-origin+52)%52,leadBefore=(origin-other+52)%52,leadAfter=(target-other+52)%52;
      const passed=fromOrigin>0&&fromOrigin<steps;
      // Each speaker really experienced this move; physical board proximity
      // alone is not a chase (home lanes and the parallel arms are excluded).
      if(passed){
        const overshoot=steps-fromOrigin;
        candidates.push(overshoot<=2?{kind:'nearMiss',seat,token,gap:overshoot}:{kind:'overtake',seat:m.seat,token:m.token,gap:overshoot});
      }else if(ahead>=1&&ahead<=4&&fromOrigin>ahead&&m.next+ahead<=50){
        candidates.push({kind:ahead===1?'nearMiss':'chase',seat,token,gap:ahead});
      }else if(!SAFE.has(origin)&&leadBefore>=1&&leadBefore<=4&&steps>=2&&leadAfter>=5&&leadAfter<=10){
        candidates.push({kind:'escape',seat:m.seat,token:m.token,gap:leadBefore});
      }
    });
  }
  const priority={nearMiss:0,escape:1,overtake:2,chase:3};
  const event=candidates.sort((a,b)=>priority[a.kind]-priority[b.kind]||a.gap-b.gap)[0];
  if(!event)return null;
  const {gap,...reaction}=event;return reaction;
}
export function noMoveComedy(g){
  if(g?.phase!=='waiting'||!g.lastRoll||g.legal.length)return null;
  const seat=g.lastRoll.seat,token=g.tokens[seat].findIndex(p=>p<FINISH);
  return token<0?null:{kind:'noMove',seat,token};
}

// Pace dialogue across the whole table, not separately for every token.
export function createComedyPacing(){
  let lastShown=-Infinity,lastRoll=null;
  const spoken=new Map(),misses=[0,0,0,0];
  return {
    observeRoll(g){
      const roll=g?.lastRoll;
      if(!roll||roll.id===lastRoll)return;
      lastRoll=roll.id;
      misses[roll.seat]=g.phase==='waiting'&&!g.legal?.length?misses[roll.seat]+1:0;
    },
    allow(event,now,busy=false,commit=true){
      if(!event)return false;
      if(event.kind==='noMove'&&misses[event.seat]<3)return false;
      const gap=event.kind==='capture'?10000:event.kind==='noMove'?75000:14000;
      const key=event.kind==='noMove'?'noMove:'+event.seat:event.kind;
      if(now-(spoken.get(key)??-Infinity)<gap)return false;
      if(now-lastShown<(event.kind==='capture'?6000:8000))return false;
      if(busy&&event.kind!=='capture')return false;
      if(commit){lastShown=now;spoken.set(key,now);if(event.kind==='noMove')misses[event.seat]=0;}
      return true;
    },
    reset(){lastShown=-Infinity;lastRoll=null;spoken.clear();misses.fill(0);}
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
    if(!pacing.allow(event,now,!!current,false))return false;
    const line=dialogue(event.kind,now);if(!line)return false;
    pacing.allow(event,now,!!current);
    clear();
    current={...event,started:now,room:room.code,revision:room.game.revision,duration:event.kind==='capture'?4800:3200};
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
    }else if(current.kind==='escape'){
      a.head.rotation.y+=Math.sin(local*3)*.28*fade;
      a.arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*.65*fade);
      a.body.position.y+=Math.max(0,Math.sin(local*7))*.035*fade;
    }else if(current.kind==='overtake'){
      a.head.rotation.z=-.16*fade;a.arms[1].rotation.z=1.5*fade;
      a.body.rotation.x=-.08*fade;
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
