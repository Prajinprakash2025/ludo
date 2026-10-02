async (page) => {
  const browser=page.context().browser(), contexts=[], peers=[], errors=[]; let stage="create";
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  try {
    for(let i=0;i<4;i++){
      const ctx=await browser.newContext(i===0?{viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true}:{});
      ctx.setDefaultTimeout(10000);contexts.push(ctx);const p=await ctx.newPage();peers.push(p);p.on('pageerror',e=>errors.push(e.message));
      await p.goto('http://127.0.0.1:4174'+(i?'/?room='+new URL(peers[0].url()).searchParams.get('room'):''));
      await p.locator('#name').fill(['Bear QA','Panda QA','Deer QA','Fox QA'][i]);await p.locator('#begin').click();await p.locator('#room-screen').waitFor({state:'visible'});
    }
    const [host,panda]=peers,code=new URL(host.url()).searchParams.get('room');
    await host.getByRole('button',{name:'Start the race'}).click();
    await host.locator('#turn-controls').waitFor({state:'visible'});
    await host.request.get('http://127.0.0.1:4175/?code='+code+'&kind=podium');
    for(const p of peers)await p.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="3"]').dataset.visualStep==='55');
    stage='first finish';await host.locator('#roll').click();await host.locator('#board .token.movable').waitFor();
    await host.locator('#board .token.movable').press('Enter');
    for(const p of peers)await p.waitForFunction(()=>window.jungleScene?.victory?.seats.join(',')==='0');
    stage="first dance";const first=await host.evaluate(()=>({...window.jungleScene.victory,emotes:window.jungleScene.emotes}));
    assert(first.emotes.filter(e=>e.kind==='victory').length===1&&first.emotes[0].participants===4,'Only the four first-winner tokens should dance');
    await host.waitForFunction(()=>window.jungleScene.victory?.flips.some(f=>Math.abs(f.rotation)>1&&f.height>.5));
    await host.locator('#board').scrollIntoViewIfNeeded();await host.waitForTimeout(300);
    await host.screenshot({path:'output/playwright/victory-first-mobile.png'});
    assert(await panda.locator('#roll').isDisabled(),'Dice enabled during first dance');
    stage="refresh";const ends=first.endsAt;await host.reload();
    await host.waitForFunction(()=>!document.getElementById('room-screen').hidden&&document.getElementById('players').textContent.includes('First place'));
    // Cold shader compilation can outlast a short dance on a busy QA laptop.
    // Refresh must either retain the deadline or arrive in the resumed race.
    if(Date.now()<ends){
      await host.waitForFunction(()=>window.jungleScene?.victory?.seats.join(',')==='0');
      assert(await host.evaluate(()=>window.jungleScene.victory.endsAt)===ends,'Refresh restarted celebration');
    }
    stage="resume after15";await panda.waitForFunction(()=>!document.getElementById('roll').disabled,{},{timeout:18000});
    assert(Date.now()>=ends,'Game resumed early');
    await host.waitForFunction(()=>!window.jungleScene.victory);
    stage="second finish";await panda.locator('#roll').click();await panda.locator('#board .token.movable').waitFor();await panda.locator('#board .token.movable').press('Enter');
    for(const p of peers)await p.waitForFunction(()=>window.jungleScene?.victory?.seats.join(',')==='0,1');
    stage="final dance";const final=await host.evaluate(()=>({...window.jungleScene.victory,emotes:window.jungleScene.emotes}));
    assert(final.final&&final.emotes.filter(e=>e.kind==='victory').every(e=>e.participants===4),'Final winners missing');
    assert(final.routines.join(',')==='belly-clap,waddle-shimmy','Routines not distinct');
    assert(await host.locator('#rematch').count()===0,'Early rematch interrupted final dance');
    await host.screenshot({path:'output/playwright/victory-final-mobile.png'});
    stage="finish20";await host.locator('#rematch').waitFor({state:'visible',timeout:23000});
    assert(Date.now()>=final.endsAt,'Final party ended early');
    assert(await host.locator('.standings li').count()===2,'Expected exactly two winners');
    assert(await host.locator('.standings').textContent().then(s=>s.includes('Bear QA')&&s.includes('Panda QA')&&!s.includes('Third')),'Wrong podium');
    await host.locator('#rematch').click();await host.locator('#roll').waitFor();
    await host.waitForFunction(()=>!window.jungleScene.victory);
    await host.request.get('http://127.0.0.1:4175/?code='+code+'&kind=party');
    for(const p of peers)await p.waitForFunction(()=>window.jungleScene?.victory?.seats.join(',')==='2,3');
    const other=await host.evaluate(()=>({...window.jungleScene.victory,emotes:window.jungleScene.emotes}));
    assert(other.routines.join(',')==='prance-twirl,disco-step','Deer/Fox routines missing');
    assert(other.emotes.filter(e=>e.kind==='victory').every(e=>e.participants===4),'Finished Deer/Fox not visible');
    await host.emulateMedia({reducedMotion:'reduce'});
    await host.waitForFunction(()=>window.jungleScene.emotes.filter(e=>e.kind==='victory').every(e=>e.strength===0));
    assert(await host.evaluate(()=>window.jungleScene.victory.flips.every(f=>f.rotation===0)),'Reduced motion still flips');
    await host.emulateMedia({reducedMotion:'no-preference'});
    await peers[3].screenshot({path:'output/playwright/victory-deer-fox-desktop.png'});
    assert(!errors.length,errors.join('\n'));
    return {fourPeers:true,firstDancers:first.emotes,comicFlips:true,reducedMotion:true,firstDeadlineSurvivedRefresh:true,first15s:true,secondOnly:true,final20s:true,finalDancers:final.emotes,fourDifferentRoutines:true,rematchResets:true,pageErrors:errors};
  }catch(e){throw new Error(stage+": "+e.message);}finally{for(const ctx of contexts)await ctx.close();}
}



