import {MOVIE_QUOTES} from './movie-quotes.js';

// Event-driven DOM only; chat does not add work to the scene's render loop.
export function createRoomChatUI({send,getRoom,getIdentity,speak}) {
  const $=id=>document.getElementById(id),panel=$('room-chat'),launch=$('chat-open');
  const log=$('chat-messages'),input=$('chat-input'),status=$('chat-status');
  const tabs=[$('chat-tab-all'),$('chat-tab-dialogues')];
  const viewport=window.visualViewport;
  const fitViewport=()=>{
    panel.style.setProperty('--chat-viewport-height',(viewport?.height||innerHeight)+'px');
    panel.style.setProperty('--chat-keyboard-offset',Math.max(0,innerHeight-(viewport?.height||innerHeight)-(viewport?.offsetTop||0))+'px');
  };
  viewport?.addEventListener('resize',fitViewport);viewport?.addEventListener('scroll',fitViewport);
  window.addEventListener('resize',fitViewport);fitViewport();
  let code='',version=0,connected=false,messages=[],seen=new Set(),unread=0,tab=0;
  let nextSendAt=0,pending=false,submittedText='',expiryTimer,cooldownTimer;
  const ready=()=>connected&&version>=1&&!!getRoom();
  function controls() {
    launch.disabled=!getRoom();
    const enabled=ready()&&!pending&&Date.now()>=nextSendAt;
    input.disabled=!ready();$('chat-send').disabled=!enabled||!input.value.trim();
    $('chat-quotes').querySelectorAll('button').forEach(button=>button.disabled=!enabled);
    launch.querySelector('.chat-unread').textContent=unread?String(Math.min(unread,99)):'';
    launch.setAttribute('aria-label',unread?'Open room chat, '+unread+' unread messages':'Open room chat');
    if (!connected) status.textContent='Reconnecting to your room…';
    else if (version<1) status.textContent='Room chat is getting ready. You can keep playing.';
  }
  function setTab(index,focus=false) {
    tab=index;tabs.forEach((button,i)=>{button.setAttribute('aria-selected',String(i===index));button.tabIndex=i===index?0:-1;});
    $('chat-all').hidden=index!==0;$('chat-dialogues').hidden=index!==1;
    if(index===0){unread=0;log.scrollTop=log.scrollHeight;controls();}
    if(focus)tabs[index].focus();
  }
  function close(){panel.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();}
  launch.onclick=()=>{
    if(!panel.hidden){close();return;}
    panel.hidden=false;launch.setAttribute('aria-expanded','true');setTab(tab);tabs[tab].focus();
  };
  $('chat-close').onclick=close;
  panel.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close();}
  });
  tabs.forEach((button,i)=>{
    button.onclick=()=>setTab(i);
    button.onkeydown=event=>{
      if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
        event.preventDefault();setTab(event.key==='Home'?0:event.key==='End'?1:1-i,true);
      }
    };
  });
  function append(message) {
    const item=document.createElement('li');item.className='chat-message'+(message.playerId===getIdentity()?' mine':'');
    const name=document.createElement('strong');name.textContent=message.name+(message.kind==='dialogue'?' · 🎬':'');
    const text=document.createElement('p');text.textContent=message.text;
    if(message.kind==='dialogue')text.lang='ml';
    item.append(name,text);log.append(item);
    while(log.children.length>60)log.firstElementChild.remove();
  }
  function renderHistory(){log.replaceChildren();messages.forEach(append);$('chat-empty').hidden=messages.length>0;log.scrollTop=log.scrollHeight;}
  function armCooldown(ms=1500){
    nextSendAt=Date.now()+ms;clearTimeout(cooldownTimer);cooldownTimer=setTimeout(()=>{if(ready())status.textContent='Only your room can see these messages.';controls();},ms+30);controls();
  }
  function post(action) {
    if(!ready()||pending||Date.now()<nextSendAt)return;
    if(!send(action))return;
    pending=true;submittedText=action.type==='chat-send'?input.value:'';status.textContent='Sending…';armCooldown();
    clearTimeout(expiryTimer);expiryTimer=setTimeout(()=>{pending=false;status.textContent='Message not confirmed. Try again when connected.';controls();},5000);
  }
  input.addEventListener('input',controls);
  $('chat-form').onsubmit=event=>{event.preventDefault();if(input.value.trim())post({type:'chat-send',text:input.value.trim()});};
  const quotes=$('chat-quotes');
  for(const [id,quote] of Object.entries(MOVIE_QUOTES)){
    const button=document.createElement('button');button.type='button';button.dataset.quote=id;button.className='chat-quote';
    const line=document.createElement('span');line.lang='ml';line.textContent=quote.text;
    const credit=document.createElement('small');credit.textContent=quote.actor+' · '+quote.film;
    button.append(line,credit);button.onclick=()=>post({type:'chat-dialogue',quoteId:id});quotes.append(button);
  }
  setTab(0);
  return {
    connection(isConnected,chatVersion=version){
      connected=isConnected;version=chatVersion;
      if(!connected){pending=false;clearTimeout(expiryTimer);}
      controls();
    },
    room(roomCode){
      if(code===roomCode){controls();return;}
      code=roomCode;messages=[];seen.clear();unread=0;input.value='';pending=false;nextSendAt=0;
      clearTimeout(expiryTimer);clearTimeout(cooldownTimer);renderHistory();controls();
    },
    receive(packet){
      if(packet.type==='chat-error'){
        pending=false;clearTimeout(expiryTimer);status.textContent=packet.message;
        if(packet.retryAfterMs)armCooldown(Math.min(5000,packet.retryAfterMs));controls();return;
      }
      if(packet.code!==code)return;
      if(packet.type==='chat-history'){
        messages=packet.messages.slice(-60);seen=new Set(messages.map(message=>message.id));renderHistory();
        status.textContent='Only your room can see these messages.';return;
      }
      if(packet.type!=='chat-message'||seen.has(packet.message.id))return;
      const message=packet.message;seen.add(message.id);messages.push(message);
      if(messages.length>60){const removed=messages.shift();seen.delete(removed.id);}
      const atBottom=log.scrollHeight-log.scrollTop-log.clientHeight<48;
      append(message);$('chat-empty').hidden=true;
      if(atBottom||message.playerId===getIdentity())log.scrollTop=log.scrollHeight;
      if(message.playerId!==getIdentity()&&(panel.hidden||tab!==0))unread++;
      if(message.playerId===getIdentity()){
        pending=false;clearTimeout(expiryTimer);if(message.kind==='text'&&input.value===submittedText)input.value='';
        status.textContent='Only your room can see these messages.';
        // Reveal the character immediately after choosing a line on a small screen.
        if(message.kind==='dialogue'&&!panel.hidden&&window.matchMedia('(max-width:650px)').matches)close();
      }
      if(message.kind==='dialogue')speak(message);
      controls();
    },
    reset(){this.room('');panel.hidden=true;launch.setAttribute('aria-expanded','false');setTab(0);},
    snapshot:()=>({code,count:messages.length,unread,tab,open:!panel.hidden,ready:ready()})
  };
}
