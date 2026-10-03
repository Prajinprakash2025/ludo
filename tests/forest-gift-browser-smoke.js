async (page) => {
  const browser=page.context().browser(),contexts=[],errors=[],results=[];
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};
  let stage='join';
  try{
    const pc=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});contexts.push(pc);
    const dc=await browser.newContext({viewport:{width:1280,height:900}});contexts.push(dc);
    for(const ctx of contexts){await ctx.route('**/app.js',r=>r.fulfill({path:'output/playwright/forest-gift-app.js',contentType:'text/javascript'}));ctx.setDefaultTimeout(12000);}
    const phone=await pc.newPage(),remote=await dc.newPage();
    for(const p of [phone,remote]){p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error'&&m.text().includes('THREE'))errors.push(m.text());});}
    await phone.goto('http://127.0.0.1:4174');await phone.locator('#name').fill('Bear QA');await phone.locator('#begin').click();await phone.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(phone.url()).searchParams.get('room');
    await remote.goto('http://127.0.0.1:4174/?room='+code);await remote.locator('#name').fill('Panda QA');await remote.locator('#begin').click();await remote.locator('#room-screen').waitFor({state:'visible'});
    for(const seat of [2,3])await phone.locator('[data-bot="'+seat+'"]').click();
    await phone.getByRole('button',{name:'Start the race'}).click();
    const seed=async(kind,extra='')=>{
      assert((await phone.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind+extra)).ok(),'Fixture failed');
      for(const p of [phone,remote])await p.waitForFunction(()=>window.jungleScene?.frames>3&&!window.jungleScene.forestGift);
    };
    const play=async(actor,seat=0)=>{
      await actor.waitForFunction(()=>!document.getElementById('roll').disabled);await actor.locator('#roll').click();
      await actor.locator('#board .token.movable[data-seat="'+seat+'"][data-token="0"]').waitFor();
      await actor.locator('#board .token.movable[data-seat="'+seat+'"][data-token="0"]').press('Enter');
    };
    for(let outfit=0;outfit<6;outfit++){
      stage='outfit '+outfit;await seed('gift','&outfit='+outfit);
      for(const p of [phone,remote])await p.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep==='2');
      await play(phone);
      const effects=await Promise.all([phone,remote].map(async p=>{
        await p.waitForFunction(k=>window.jungleScene.forestGift?.outfit===k&&window.jungleScene.forestGift.age>.6&&window.jungleScene.forestGift.age<1.1,outfit);
        return p.evaluate(()=>({...window.jungleScene.forestGift,worn:window.jungleScene.outfits.length}));
      }));
      assert(effects.every(e=>e.monkeyVisible&&e.worn===0),'Outfit appeared before handoff');
      for(const p of [phone,remote])await p.waitForFunction(k=>window.jungleScene.outfits.some(o=>o.seat===0&&o.token===0&&o.kind===k),outfit);
      if(outfit===0){await remote.waitForFunction(()=>window.jungleScene.forestGift?.age>1.9);await remote.locator('#board').screenshot({path:'output/playwright/monkey-gift-desktop.png'});}
      for(const p of [phone,remote])await p.waitForFunction(()=>!window.jungleScene.forestGift&&document.querySelector('.forest-gift-callout').hidden);
      await remote.waitForFunction(()=>!document.querySelector('#roll').disabled);
      results.push(outfit);
    }
    stage='all outfits';await seed('outfits');
    for(const p of [phone,remote])await p.waitForFunction(()=>window.jungleScene.outfits.length===6);
    const budget=await phone.evaluate(()=>({calls:window.jungleScene.drawCalls,triangles:window.jungleScene.triangles,styles:[...new Set(window.jungleScene.outfits.map(o=>o.kind))]}));
    assert(budget.styles.length===6,'Styles not distinct');await remote.locator('#board').screenshot({path:'output/playwright/forest-outfits-desktop.png'});
    await phone.locator('#board').screenshot({path:'output/playwright/forest-outfits-mobile.png'});
    stage='reconnect';await phone.reload();await phone.waitForFunction(()=>window.jungleScene?.outfits.length===6);
    assert(await phone.evaluate(()=>!window.jungleScene.forestGift),'Reconnect replayed gift');
    assert(await phone.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile overflow');
    stage='capture with hat';await seed('gift-capture');await remote.waitForFunction(()=>window.jungleScene.outfits.some(o=>o.seat===0&&o.kind===0));await play(remote,1);
    await phone.waitForFunction(()=>window.jungleScene.capture?.victims.includes('0-0'));
    await phone.waitForFunction(()=>!window.jungleScene.capture&&document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep==='-1');
    assert(await phone.evaluate(()=>window.jungleScene.outfits.some(o=>o.seat===0&&o.token===0&&o.kind===0)),'Capture lost outfit');
    stage='reduced motion';await phone.emulateMedia({reducedMotion:'reduce'});await remote.emulateMedia({reducedMotion:'reduce'});await seed('gift','&outfit=4');await play(phone);
    await phone.waitForFunction(()=>window.jungleScene.forestGift?.reducedMotion);
    assert(await phone.evaluate(()=>!window.jungleScene.forestGift.monkeyVisible),'Reduced motion still jumps monkey');
    await phone.waitForFunction(()=>window.jungleScene.outfits.some(o=>o.kind===4));
    stage='fresh lobby';await seed('lobby');for(const p of [phone,remote])await p.waitForFunction(()=>!window.jungleScene.forestGift&&window.jungleScene.outfits.length===0&&window.jungleScene.giftTiles.length===0);
    stage='fallback';const fallbackContext=await browser.newContext({viewport:{width:390,height:844}});contexts.push(fallbackContext);
    await fallbackContext.route('**/app.js',r=>r.fulfill({path:'output/playwright/forest-gift-app.js',contentType:'text/javascript'}));
    await fallbackContext.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(kind,...args){return kind.startsWith('webgl')?null:original.call(this,kind,...args);};});
    const fallback=await fallbackContext.newPage();fallback.on('pageerror',e=>errors.push(e.message));await fallback.goto('http://127.0.0.1:4174');await fallback.locator('#begin').click();await fallback.locator('#room-screen').waitFor({state:'visible'});
    const fallbackCode=new URL(fallback.url()).searchParams.get('room');await fallback.locator('[data-bot="1"]').click();
    await fallback.request.get('http://127.0.0.1:4175/?code='+fallbackCode+'&kind=outfits');
    await fallback.waitForFunction(()=>document.body.classList.contains('webgl-fallback')&&document.querySelector('#board .forest-outfit').children.length>0);
    assert(await fallback.locator('#forest-gift-spots circle').count()===2,'Fallback markers absent');
    assert(!errors.length,errors.join('\n'));
    return {sixOutfits:results,twoBrowserPlayers:true,handoff:true,persistentOnCapture:true,reconnectWithoutReplay:true,reducedMotion:true,freshLobbyClears:true,fallback:true,mobileNoOverflow:true,renderBudget:budget,pageErrors:errors};
  }catch(e){throw new Error(stage+': '+e.message);}finally{for(const ctx of contexts)await ctx.close();}
}
