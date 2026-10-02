async (page) => {
  const base='http://127.0.0.1:4174',browser=page.context().browser(),errors=[];
  for(const context of browser.contexts()) if(context!==page.context()) await context.close();
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base);
  await page.getByRole('textbox',{name:'What should we call you?'}).fill('Bear QA');
  await page.getByRole('button',{name:'Make some room'}).click();
  await page.locator('#room-screen').waitFor({state:'visible'});
  const code=new URL(page.url()).searchParams.get('room');
  const guestContext=await browser.newContext({viewport:{width:390,height:844}});
  const guest=await guestContext.newPage();guest.on('pageerror',e=>errors.push(e.message));
  await guest.goto(base+'/?room='+code);
  await guest.getByRole('textbox',{name:'What should we call you?'}).fill('Panda QA');
  await guest.getByRole('button',{name:'Pull up a seat'}).click();
  await guest.locator('#room-screen').waitFor({state:'visible'});
  await page.getByRole('button',{name:'Start the race'}).click();
  await page.locator('#turn-controls').waitFor({state:'visible'});
  const token=(p,s,t=0)=>p.locator('#board .token[data-seat="'+s+'"][data-token="'+t+'"]');
  const setup=async kind=>{
    const response=await page.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind);
    if(!response.ok()) throw new Error('Fixture failed');
    for(const p of [page,guest]) {await p.reload();await p.locator('#turn-controls').waitFor({state:'visible'});}
  };
  const observe=async(p,s,t=0)=>{
    await token(p,s,t).evaluate(el=>{
      window.stepHistory=[Number(el.dataset.visualStep)];
      window.stepObserver?.disconnect();
      window.stepObserver=new MutationObserver(()=>{
        const n=Number(el.dataset.visualStep);
        if(window.stepHistory.at(-1)!==n) window.stepHistory.push(n);
      });
      window.stepObserver.observe(el,{attributes:true,attributeFilter:['data-visual-step']});
    });
  };
  const play=async(actor,s,t=0)=>{
    await actor.locator('#roll').waitFor({state:'visible'});
    await actor.waitForFunction(()=>!document.getElementById('roll').disabled);
    await actor.locator('#roll').click();
    await token(actor,s,t).locator('circle.token-hit').waitFor({state:'visible'});
    await actor.waitForFunction(([s,t])=>document.querySelector('#board .token[data-seat="'+s+'"][data-token="'+t+'"]').classList.contains('movable'),[s,t]);
    await token(actor,s,t).locator('.token-hit').click();
  };
  const steps=async(p,s,target,t=0)=>{
    await p.waitForFunction(([s,t,target])=>{
      const el=document.querySelector('#board .token[data-seat="'+s+'"][data-token="'+t+'"]');
      return Number(el.dataset.visualStep)===target&&!el.classList.contains('walking');
    },[s,t,target]);
    return p.evaluate(()=>window.stepHistory);
  };
  const equal=(a,b,label)=>{if(JSON.stringify(a)!==JSON.stringify(b)) throw new Error(label+': '+JSON.stringify(a));};
  await setup('five');await observe(page,0);await observe(guest,0);
  await play(page,0);
  equal(await steps(page,0,9),[4,5,6,7,8,9],'Host five-cell route');
  equal(await steps(guest,0,9),[4,5,6,7,8,9],'Remote five-cell route');
  await guest.reload();await guest.locator('#room-screen').waitFor({state:'visible'});
  equal(await token(guest,0).getAttribute('data-visual-step'),'9','Reconnect snaps to authoritative position');
  if(await guest.locator('#board .walking').count()) throw new Error('Reconnect replayed old move');
  await setup('entry');await observe(page,0);await play(page,0);
  equal(await steps(page,0,0),[-1,0],'Six entry');
  await setup('capture');await observe(page,0);await observe(guest,0);await play(page,0);
  equal(await steps(page,0,15),[13,14,15],'Capture route');
  await guest.waitForFunction(()=>document.querySelector('#board .token[data-seat="1"][data-token="0"]').dataset.visualStep==='-1');
  await page.waitForFunction(()=>document.querySelector('#board .token[data-seat="1"][data-token="0"]').dataset.visualStep==='-1');
  equal(await token(page,1).getAttribute('data-visual-step'),'-1','Captured opponent returns to camp');
  await setup('safe');await play(page,0);await steps(page,0,13);
  equal(await token(page,1).getAttribute('data-visual-step'),'0','Safe square protects opponent');
  await setup('lane');await observe(page,0);await play(page,0);
  equal(await steps(page,0,53),[50,51,52,53],'Home lane route');
  await setup('remote');await observe(page,1);await observe(guest,1);await play(guest,1);
  equal(await steps(page,1,2),[0,1,2],'Remote active player route');
  if(await page.locator('#players .active').count()!==1) throw new Error('Missing active turn indicator');
  await page.screenshot({path:'output/playwright/jungle-two-player.png',fullPage:true});
  await guest.screenshot({path:'output/playwright/jungle-mobile.png',fullPage:true});
  for(const width of [320,390,768]) {
    await guest.setViewportSize({width,height:844});
    const overflow=await guest.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    if(overflow) throw new Error('Horizontal overflow at '+width);
  }
  await guest.emulateMedia({reducedMotion:'reduce'});
  await setup('five');await play(page,0);
  await steps(guest,0,9);
  if(await token(guest,0).evaluate(el=>el.getAnimations({subtree:true}).length)) throw new Error('Reduced motion still animates');
  await guest.emulateMedia({reducedMotion:'no-preference'});
  await setup('win');await observe(page,0,3);await play(page,0,3);
  equal(await steps(page,0,56,3),[55,56],'Exact winning move');
  await page.waitForFunction(()=>!document.getElementById('winner-layer').hidden&&!document.getElementById('winner-layer').classList.contains('waiting-flight'));
  if(!await page.getByRole('heading',{name:'Bear QA wins!'}).count()) throw new Error('Winner missing');
  await page.locator('#rematch').click();
  await page.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="3"]').dataset.visualStep==='-1');
  if(await page.locator('#board .walking').count()) throw new Error('Rematch replayed old move');
  guest.on('dialog',d=>d.accept());
  await guest.locator('#leave').click();
  await guest.locator('#welcome').waitFor({state:'visible'});
  await page.getByRole('heading',{name:'Bear QA wins!'}).waitFor();
  await guestContext.close();
  if(errors.length) throw new Error(errors.join('\n'));
  return {players:2,entry:true,perCellRoute:true,remoteAnimation:true,capture:true,safe:true,homeLane:true,win:true,rematch:true,reconnect:true,leave:true,reducedMotion:true,widths:[320,390,768],pageErrors:errors};
}
