async (page) => {
  const browser=page.context().browser(),contexts=[],errors=[],results=[];
  const assert=(value,message)=>{if(!value)throw new Error(message);};
  let stage='join';
  try{
    const phoneContext=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});contexts.push(phoneContext);
    await phoneContext.addInitScript(()=>{
      window.captureAudioSweeps=[];
      const Base=window.AudioContext||window.webkitAudioContext;
      if(Base)window.AudioContext=class extends Base{
        createOscillator(){const o=super.createOscillator(),ramp=o.frequency.exponentialRampToValueAtTime.bind(o.frequency);
          o.frequency.exponentialRampToValueAtTime=(value,at)=>{window.captureAudioSweeps.push(value);return ramp(value,at);};return o;}
      };
    });
    const phone=await phoneContext.newPage();
    const remoteContext=await browser.newContext({viewport:{width:1280,height:900}});contexts.push(remoteContext);
    const remote=await remoteContext.newPage();
    for(const p of [phone,remote])p.on('pageerror',e=>errors.push(e.message));
    await phone.goto('http://127.0.0.1:4174');await phone.locator('#name').fill('Bear QA');await phone.locator('#begin').click();
    await phone.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(phone.url()).searchParams.get('room');
    await remote.goto('http://127.0.0.1:4174/?room='+code);await remote.locator('#name').fill('Panda QA');await remote.locator('#begin').click();
    await remote.locator('#room-screen').waitFor({state:'visible'});
    // Two additional real socket clients exercise Deer/Fox without four GPUs.
    await phone.evaluate(async(code)=>{
      window.capturePeers=[];
      for(const name of ['Deer QA','Fox QA'])await new Promise((resolve,reject)=>{
        const socket=new WebSocket('ws://127.0.0.1:4174');const peer={socket,room:null};window.capturePeers.push(peer);
        socket.onerror=reject;socket.onopen=()=>socket.send(JSON.stringify({type:'join',code,name}));
        socket.onmessage=event=>{const m=JSON.parse(event.data);if(m.type==='state'){peer.room=m.room;resolve();}};
      });
    },code);
    await phone.getByRole('button',{name:'Start the race'}).click();
    for(const p of [phone,remote])await p.waitForFunction(()=>window.jungleScene?.frames>5&&!document.querySelector('#turn-controls').hidden);
    const seed=async(kind,seat=0)=>{
      const r=await phone.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind+'&seat='+seat);assert(r.ok(),'Fixture failed');
      for(const p of [phone,remote])await p.waitForFunction(()=>!window.jungleScene?.capture&&!document.querySelector('#board .returning'));
      if(kind.startsWith('capture'))for(const p of [phone,remote])await p.waitForFunction(s=>document.querySelector('#board .token[data-seat="'+s+'"][data-token="0"]').dataset.visualStep==='13',seat);
    };
    const play=async(seat)=>{
      if(seat<2){
        const actor=seat?remote:phone;await actor.waitForFunction(()=>!document.getElementById('roll').disabled);await actor.locator('#roll').click();
        await actor.locator('#board .token.movable[data-token="0"]').waitFor();await actor.locator('#board .token.movable[data-token="0"]').press('Enter');
      }else{
        await phone.waitForFunction(s=>window.capturePeers[s-2].room.game.turn===s&&window.capturePeers[s-2].room.game.phase==='roll',seat);
        await phone.evaluate(s=>{const p=window.capturePeers[s-2];p.socket.send(JSON.stringify({type:'roll',revision:p.room.game.revision}));},seat);
        await phone.waitForFunction(s=>window.capturePeers[s-2].room.game.phase==='move',seat);
        await phone.evaluate(s=>{const p=window.capturePeers[s-2];p.socket.send(JSON.stringify({type:'move',token:0,revision:p.room.game.revision}));},seat);
      }
    };
    for(const seat of [0,1,2,3]){
      if(seat===1)await phone.locator('#sound').click();
      stage='capture '+seat;await seed('capture',seat);await play(seat);
      // Observe both clients concurrently so the 1.35-second effect cannot expire.
      const states=await Promise.all([phone,remote].map(async p=>{
        await p.waitForFunction(s=>window.jungleScene?.capture?.seat===s&&window.jungleScene.capture.age>.4&&window.jungleScene.capture.age<.8,seat);
        return p.evaluate(()=>({effect:window.jungleScene.capture,text:document.querySelector('.capture-callout').textContent,visible:!document.querySelector('.capture-callout').hidden}));
      }));
      for(const s of states){assert(s.visible&&s.text.length>2,'Missing funny caption');assert(s.effect.particles===16,'Particle budget wrong');assert(s.effect.poses.some(p=>p.seat===(seat+1)%4&&p.height>.5&&Math.abs(p.spin)>1),'Victim did not spin and fly: '+JSON.stringify(s.effect));}
      if(seat===0)assert(await phone.evaluate(()=>window.captureAudioSweeps.length)===0,'Muted capture made sound');
      if(seat===1){assert(await phone.evaluate(()=>window.captureAudioSweeps.join(','))==='720,150','Boing/pop sound missing');await phone.locator('#sound').click();}
      if(seat===0)await phone.screenshot({path:'output/playwright/capture-mobile.png'});
      if(seat===3){await phone.waitForFunction(()=>window.jungleScene.capture?.poses.some(p=>p.seat===3&&p.rightEye<.02));}
      for(const p of [phone,remote])await p.waitForFunction(s=>!window.jungleScene.capture&&document.querySelector('#board .token[data-seat="'+((s+1)%4)+'"][data-token="0"]').dataset.visualStep==='-1',seat);
      assert(await phone.locator('#board .returning, #board .capture-prank').count()===0,'Capture classes did not clear');
      results.push(states[0].effect.routine);
    }
    stage='stack';await seed('capture-stack');await play(0);
    await phone.waitForFunction(()=>window.jungleScene?.capture?.victims.length===4);
    assert(await phone.evaluate(()=>window.jungleScene.capture.particles)<=16,'Stack capture multiplied particles');
    for(const p of [phone,remote])await p.waitForFunction(()=>!window.jungleScene.capture&&[...document.querySelectorAll('#board .token[data-seat="1"]')].every(el=>el.dataset.visualStep==='-1'));
    stage='safe square';await seed('safe');await play(0);
    await phone.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep==='13'&&!document.querySelector('#board .walking'));
    assert(await phone.locator('.capture-callout').isHidden(),'Safe move played capture caption');
    assert(await phone.locator('#board .token[data-seat="1"][data-token="0"]').getAttribute('data-visual-step')==='0','Safe token captured');
    stage='reduced motion';await phone.emulateMedia({reducedMotion:'reduce'});await remote.emulateMedia({reducedMotion:'reduce'});
    await seed('capture');await play(0);await phone.waitForFunction(()=>window.jungleScene.capture?.reducedMotion);
    assert(await phone.evaluate(()=>window.jungleScene.capture.particles===0&&window.jungleScene.capture.poses.length===0),'Reduced motion still animates');
    for(const p of [phone,remote])await p.waitForFunction(()=>document.querySelector('#board .token[data-seat="1"][data-token="0"]').dataset.visualStep==='-1');
    stage='reconnect';await phone.reload();await phone.waitForFunction(()=>window.jungleScene?.frames>3&&!document.querySelector('#room-screen').hidden);
    assert(await phone.locator('.capture-callout').isHidden(),'Reconnect replayed old capture');
    assert(await phone.locator('#board .returning').count()===0,'Reconnect left return effect');
    assert(await phone.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'New mobile overflow');
    assert(!errors.length,errors.join('\n'));
    return {mobile:true,twoBrowserPlayers:true,fourRoutines:results,spinAndFlight:true,stackCapture:true,particleLimit:16,mutedSound:true,boingPopSound:true,safeSquares:true,reducedMotion:true,reconnectDoesNotReplay:true,pageErrors:errors};
  }catch(e){throw new Error(stage+': '+e.message);}finally{for(const ctx of contexts)await ctx.close();}
}
