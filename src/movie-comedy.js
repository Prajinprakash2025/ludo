import {square,SAFE,FINISH} from '../game.mjs';

import {MOVIE_QUOTES,MOVIE_EXCHANGES,MOVIE_POOLS} from './movie-quotes.js';
export {MOVIE_QUOTES,MOVIE_EXCHANGES,MOVIE_POOLS};

export function createDialogueDeck(seed=''){
  const offset=[...seed].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0),used=new Map(),recent=[];
  let order=0;
  const available=(line,now)=>now-(used.get(line)?.time??-Infinity)>=60000;
  const rank=line=>used.get(line)?.order??-1;
  const remember=(lines,now)=>{for(const line of lines){used.set(line,{time:now,order:order++});recent.push({line,now});}while(recent.length>4)recent.shift();};
  const fresh=(line,now)=>available(line,now)&&!recent.some(e=>e.line===line&&now-e.now<60000);
  const rotate=pool=>pool.map((_,i)=>pool[(i+offset)%pool.length]);
  return {
    pick(kind,now){
      const line=rotate(MOVIE_POOLS[kind]||[]).filter(line=>fresh(line,now)).sort((a,b)=>rank(a)-rank(b))[0];
      if(!line)return null;remember([line],now);return line;
    },
    pickExchange(kind,now){
      const pair=rotate(MOVIE_EXCHANGES[kind]||[]).map(ids=>ids.map(id=>MOVIE_QUOTES[id].text))
        .filter(lines=>lines.every(line=>fresh(line,now)))
        .sort((a,b)=>Math.max(...a.map(rank))-Math.max(...b.map(rank)))[0];
      if(!pair)return null;
      // Reserve both lines together: the reply cannot change or repeat a recent line.
      remember(pair,now);return {opening:pair[0],reply:pair[1]};
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
        candidates.push(overshoot<=2?{kind:'nearMiss',seat,token,partner:{seat:m.seat,token:m.token},gap:overshoot}:{kind:'overtake',seat:m.seat,token:m.token,partner:{seat,token},gap:overshoot});
      }else if(ahead>=1&&ahead<=4&&fromOrigin>ahead&&m.next+ahead<=50){
        candidates.push({kind:ahead===1?'nearMiss':'chase',seat,token,partner:{seat:m.seat,token:m.token},gap:ahead});
      }else if(!SAFE.has(origin)&&leadBefore>=1&&leadBefore<=4&&steps>=2&&leadAfter>=5&&leadAfter<=10){
        candidates.push({kind:'escape',seat:m.seat,token:m.token,partner:{seat,token},gap:leadBefore});
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
  function getDeck(){return deck??=createDialogueDeck(getRoom()?.code);}
  function dialogue(kind,now){return getDeck().pick(kind,now);}
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
    const partner=event.kind==='capture'?event.winner:event.partner;
    const exchange=partner?getDeck().pickExchange(event.kind,now):null;
    const line=partner?exchange?.opening:dialogue(event.kind,now);if(!line)return false;
    pacing.allow(event,now,!!current);
    clear();
    current={...event,started:now,room:room.code,revision:room.game.revision,duration:partner?5100:3200,partner,reply:exchange?.reply,replyAt:2300,replied:false,actorStarted:now,exchangeKind:event.kind};
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
    if(current.reply&&!current.replied&&age>=current.replyAt){
      current.replied=true;current.actorStarted=now;
      showActor('boast',current.partner.seat,current.partner.token,current.reply);
    }
    if(board.dataset.renderer!=='webgl'&&actorNode){
      const b=board.getBoundingClientRect(),r=actorNode.getBoundingClientRect();
      if(b.width&&b.height)anchor((r.x+r.width/2-b.x)/b.width*100,(r.y-b.y)/b.height*100);
    }
  }
  function matches(a){return current&&current.seat===a.seat&&current.token===a.token;}
  function pose(a,now){
    if(!matches(a)||reduced.matches||actorNode?.classList.contains('walking'))return;
    const age=(now-current.started)/1000;
    // Existing capture flight owns the victim's joints until it lands.
    if(current.kind==='capture'&&age<1.35)return;
    const local=(now-current.actorStarted)/1000;
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
    beforeMove(){if(!current?.reply)clear();},
    victoryLine(key){
      if(key!==victoryKey){victoryKey=key;victoryText=dialogue('victory',performance.now())||'';}
      return victoryText;
    },
    snapshot:()=>current?{kind:current.kind,seat:current.seat,token:current.token,text:bubble.textContent,exchangeKind:current.exchangeKind,replied:current.replied,reducedMotion:reduced.matches}:null,
    dispose(){reset();bubble.remove();}};
}
