async (page)=>{
  const browser=page.context().browser(),contexts=[],errors=[],assert=(v,m)=>{if(!v)throw Error(m);};
  let stage='picker';
  try{
    const make=async(mobile=false,fallback=false)=>{
      const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1280,height:900},deviceScaleFactor:mobile?2:1,isMobile:mobile,hasTouch:mobile});contexts.push(context);
      await context.route('**/app.js',r=>r.fulfill({path:'output/playwright/character-choice-app.js',contentType:'text/javascript'}));
      if(fallback)await context.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(kind,...args){return String(kind).includes('webgl')?null:original.call(this,kind,...args);};});
      const p=await context.newPage();p.setDefaultTimeout(10000);p.on('pageerror',e=>errors.push(e.message));
      p.on('websocket',socket=>socket.on('framereceived',({payload})=>{const m=JSON.parse(String(payload));if(m.type==='state')p.lastState=m.room;}));return p;
    };
    const host=await make(true),guest=await make();await host.goto('http://127.0.0.1:4174');
    assert(await host.locator('[data-character]').count()===8,'Missing character choices');
    await host.locator('.character-picker').screenshot({path:'output/playwright/character-picker-mobile.png'});
    assert(await host.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Picker mobile overflow');
    await host.locator('[data-character="rabbit"]').click();await host.locator('#name').fill('Rabbit QA');await host.locator('#begin').click();await host.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(host.url()).searchParams.get('room');
    await host.waitForFunction(()=>window.jungleScene?.characters[0]==='rabbit'&&window.jungleScene.frames>3);
    await guest.goto('http://127.0.0.1:4174/?room='+code);
    await guest.waitForFunction(()=>document.querySelector('[data-character="rabbit"]').disabled);
    await guest.locator('[data-character="tiger"]').click();await guest.locator('#name').fill('Tiger QA');await guest.locator('#begin').click();await guest.locator('#room-screen').waitFor({state:'visible'});
    const monkey=await make(),raccoon=await make();
    for(const [p,id] of [[monkey,'monkey'],[raccoon,'raccoon']]){
      await p.goto('http://127.0.0.1:4174/?room='+code);await p.waitForFunction(()=>document.querySelector('[data-character="tiger"]').disabled);
      await p.locator('[data-character="'+id+'"]').click();await p.locator('#name').fill(id+' QA');await p.locator('#begin').click();await p.locator('#room-screen').waitFor({state:'visible'});
    }
    stage='models';const players=[host,guest,monkey,raccoon];
    for(const p of players){await p.waitForFunction(()=>window.jungleScene?.characters.join(',')==='rabbit,tiger,monkey,raccoon'&&window.jungleScene.frames>3);assert(await p.locator('.jungle-canvas').count()===1,'Old renderer/canvas leaked');}
    await host.locator('#board').screenshot({path:'output/playwright/new-characters-mobile.png'});
    await guest.locator('#board').screenshot({path:'output/playwright/new-characters-desktop.png'});
    const budget=await host.evaluate(()=>({drawCalls:window.jungleScene.drawCalls,triangles:window.jungleScene.triangles,animals:window.jungleScene.animals}));
    stage='start';await host.getByRole('button',{name:'Start the race'}).click();await host.locator('#turn-controls').waitFor({state:'visible'});
    const seed=async(kind,step)=>{
      assert((await host.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind)).ok(),'Seed failed');
      await host.waitForFunction(expected=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep===String(expected),step);
    };
    const move=async(token=0)=>{await host.bringToFront();stage+=' roll';await host.waitForFunction(()=>!document.querySelector('#roll').disabled);await host.locator('#roll').click();const piece=host.locator('#board .token.movable[data-seat="0"][data-token="'+token+'"]');await piece.waitFor();stage+=' token';await piece.press('Enter');};
    stage='capture seed';await seed('capture',13);
    await host.evaluate(()=>{window.qaFrames=[];window.qaProbe=setInterval(()=>{const t=document.querySelector('#board .token[data-seat="0"][data-token="0"]');window.qaFrames.push({frames:window.jungleScene.frames,capture:window.jungleScene.capture,step:t.dataset.visualStep,walking:t.classList.contains('walking'),hidden:document.hidden});},100);});
    await move();stage='capture effect';await host.waitForFunction(()=>window.jungleScene.capture?.victims.includes('1-0'));
    await host.evaluate(()=>clearInterval(window.qaProbe));
    stage='captured guest';await guest.waitForFunction(()=>document.querySelector('#board .token[data-seat="1"][data-token="0"]').dataset.visualStep==='-1');
    assert((await guest.locator('#board .token[data-seat="1"][data-token="0"]').getAttribute('aria-label')).startsWith('Tiger'),'Captured token reverted species');
    for(const p of [guest,monkey,raccoon])await p.context().close();
    stage='resume';await host.reload();await host.waitForFunction(()=>window.jungleScene?.characters.join(',')==='rabbit,tiger,monkey,raccoon',null,{timeout:30000});
    stage='outfit';await seed('gift',2);await move();await host.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.outfit==='Explorer');
    await host.waitForFunction(()=>window.jungleScene.forestGift?.age>1.5);
    stage='victory';await seed('win',56);await move(3);await host.waitForFunction(()=>window.jungleScene.victory?.routines[0]==='prance-twirl');
    assert(await host.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Game mobile overflow');
    await host.context().close();
    stage='defaults';
    const old=await make();await old.goto('http://127.0.0.1:4174');await old.locator('[data-character="panda"]').click();await old.locator('#solo').click();
    await old.waitForFunction(()=>window.jungleScene?.characters[0]==='panda'&&window.jungleScene.characters[1]==='bear');
    assert(new Set(await old.evaluate(()=>window.jungleScene.characters)).size===4,'Bots repeated a selected character');
    for(const id of ['bear','deer','fox']){
      const p=await make();await p.goto('http://127.0.0.1:4174');await p.locator('[data-character="'+id+'"]').click();await p.locator('#begin').click();
      await p.waitForFunction(id=>window.jungleScene?.characters[0]===id&&window.jungleScene.frames>3,id);
      await p.context().close();
    }
    stage='fallback';const fallback=await make(true,true);await fallback.goto('http://127.0.0.1:4174');await fallback.locator('[data-character="raccoon"]').click();await fallback.locator('#begin').click();await fallback.locator('#room-screen').waitFor({state:'visible'});
    assert((await fallback.locator('#board .token[data-seat="0"][data-token="0"]').getAttribute('aria-label')).startsWith('Raccoon'),'Fallback species missing');
    assert(errors.length===0,errors.join('\n'));
    return {eightChoices:true,fourNewModels:true,takenDisabled:true,reconnect:true,capture:true,outfits:true,speciesDance:true,uniqueBots:true,fallback:true,budget,pageErrors:errors};
  }catch(e){const p=contexts[0]?.pages()[0];const debug=p?await p.evaluate(()=>({samples:window.qaFrames?.filter((_,i)=>i%10===0),scene:window.jungleScene?.characters,toast:document.querySelector('#toast').textContent,roomVisible:!document.querySelector('#room-screen').hidden})):null;throw Error('FAILED STAGE: '+stage+' — '+e.message+' Page errors: '+errors.join(' | ')+' DEBUG '+JSON.stringify({debug,seats:p?.lastState?.seats,move:p?.lastState?.game?.lastMove,phase:p?.lastState?.game?.phase}));}
  finally{for(const context of contexts)await context.close();}
}
