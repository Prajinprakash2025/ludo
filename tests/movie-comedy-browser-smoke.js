async (page) => {
  const browser=page.context().browser(),contexts=[],errors=[],results=[];
  const assert=(v,m)=>{if(!v)throw new Error(m);};let stage='join';
  try{
    const pc=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});contexts.push(pc);
    const dc=await browser.newContext({viewport:{width:1280,height:900}});contexts.push(dc);
    for(const ctx of contexts){await ctx.route('**/app.js',r=>r.fulfill({path:'output/playwright/movie-comedy-app.js',contentType:'text/javascript'}));ctx.setDefaultTimeout(10000);}
    const phone=await pc.newPage(),remote=await dc.newPage(),pages=[phone,remote];
    for(const p of pages)p.on('pageerror',e=>errors.push(e.message));
    await phone.goto('http://127.0.0.1:4174');await phone.locator('#name').fill('Bear QA');await phone.locator('#begin').click();await phone.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(phone.url()).searchParams.get('room');
    await remote.goto('http://127.0.0.1:4174/?room='+code);await remote.locator('#name').fill('Panda QA');await remote.locator('#begin').click();await remote.locator('#room-screen').waitFor({state:'visible'});
    for(const seat of [2,3])await phone.locator('[data-bot="'+seat+'"]').click();
    await phone.getByRole('button',{name:'Start the race'}).click();
    const seed=async(kind,step)=>{
      assert((await phone.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind)).ok(),'Seed failed');
      for(const p of pages)await p.waitForFunction(expected=>!window.jungleScene?.comedy&&document.querySelector('.movie-callout').hidden&&document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep===String(expected),step);
    };
    const roll=async()=>{await phone.waitForFunction(()=>!document.querySelector('#roll').disabled);await phone.locator('#roll').click();};
    const play=async(token=0)=>{await roll();await phone.locator('#board .token.movable[data-seat="0"][data-token="'+token+'"]').waitFor();await phone.locator('#board .token.movable[data-seat="0"][data-token="'+token+'"]').press('Enter');};
    for(const kind of ['chase','near-miss','pass-miss']){
      stage=kind;await seed(kind,13);await play();
      const expected=kind==='chase'?'chase':'nearMiss';
      await Promise.all(pages.map(p=>p.waitForFunction(k=>window.jungleScene?.comedy?.kind===k&&!!window.jungleScene.comedy.pose,expected)));
      if(kind==='chase')await phone.waitForFunction(()=>window.jungleScene.comedy?.pose?.headYaw>.2);
      const state=await phone.evaluate(()=>window.jungleScene.comedy);
      assert(state.seat===1&&state.token===0,'Reaction on wrong character');
      await remote.waitForFunction(()=>!document.querySelector('#roll').disabled&&!!window.jungleScene.comedy);
      assert(await phone.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile overflow');
      if(kind==='chase'){await phone.locator('#board').screenshot({path:'output/playwright/movie-chase-mobile.png'});assert(Math.abs(state.pose.headYaw)>.1,'Missing look-back pose');}
      results.push({kind,text:state.text,nextTurnEnabled:true});
    }
    stage='capture';await seed('capture',13);await play();
    await Promise.all(pages.map(p=>p.waitForFunction(()=>window.jungleScene.comedy?.kind==='capture'&&window.jungleScene.capture?.victims.includes('1-0'))));
    await phone.locator('#board').screenshot({path:'output/playwright/movie-capture-mobile.png'});
    await Promise.all(pages.map(p=>p.waitForFunction(()=>window.jungleScene.comedy?.kind==='boast'&&window.jungleScene.comedy.pose?.rightArm>.5)));
    assert(await phone.locator('#roll').isEnabled(),'Boast blocks bonus turn');
    await remote.locator('#board').screenshot({path:'output/playwright/movie-boast-desktop.png'});
    stage='reconnect';await phone.reload();await phone.waitForFunction(()=>window.jungleScene?.frames>3);
    assert(await phone.evaluate(()=>!window.jungleScene.comedy&&document.querySelector('.movie-callout').hidden),'Reconnect replayed a quote');
    stage='no move';await seed('no-move',-1);await roll();
    await Promise.all(pages.map(p=>p.waitForFunction(()=>window.jungleScene.comedy?.kind==='noMove'&&window.jungleScene.comedy.pose?.rightArm>1)));
    stage='safe';await seed('safe-near',5);await play();
    await phone.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep==='7');
    assert(await phone.evaluate(()=>!window.jungleScene.comedy),'Safe-star false near miss');
    stage='reduced';await phone.emulateMedia({reducedMotion:'reduce'});await seed('chase',13);await play();
    await phone.waitForFunction(()=>window.jungleScene.comedy?.kind==='chase');
    const still=await phone.evaluate(()=>window.jungleScene.comedy);assert(still.reducedMotion&&Math.abs(still.pose.headYaw)<.1,'Reduced-motion pose still turns');
    stage='win';await seed('win',56);await play(3);
    await phone.waitForFunction(()=>document.querySelector('#victory-quip')?.textContent.includes('ജങ്ക'));
    assert(await phone.evaluate(()=>document.querySelector('.movie-callout').hidden),'Winner overlaps speech');
    stage='fallback';const fc=await browser.newContext({viewport:{width:390,height:844}});contexts.push(fc);
    await fc.route('**/app.js',r=>r.fulfill({path:'output/playwright/movie-comedy-app.js',contentType:'text/javascript'}));
    await fc.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(kind,...args){return String(kind).includes('webgl')?null:original.call(this,kind,...args);};});
    const fallback=await fc.newPage();fallback.on('pageerror',e=>errors.push(e.message));await fallback.goto('http://127.0.0.1:4174');await fallback.locator('#name').fill('Fallback QA');await fallback.locator('#begin').click();await fallback.locator('#room-screen').waitFor({state:'visible'});
    const fallbackCode=new URL(fallback.url()).searchParams.get('room');await fallback.locator('[data-bot="1"]').click();await fallback.getByRole('button',{name:'Start the race'}).click();
    await fallback.request.get('http://127.0.0.1:4175/?code='+fallbackCode+'&kind=no-move');await fallback.locator('#roll').click();await fallback.locator('.movie-callout').waitFor({state:'visible'});
    assert(await fallback.locator('.movie-callout').textContent()==='എന്തിനോ വേണ്ടി തിളക്കുന്ന സാമ്പാർ!','Fallback dialogue missing');
    assert(errors.length===0,errors.join('\n'));
    return {results,captureAndBoast:true,noMove:true,reconnect:true,safeStars:true,reducedMotion:true,victory:true,fallback:true,pageErrors:errors};
  }catch(e){console.log('FAILED STAGE: '+stage);throw e;}
  finally{for(const ctx of contexts)await ctx.close();}
}
