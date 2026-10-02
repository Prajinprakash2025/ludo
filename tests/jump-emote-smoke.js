async (page) => {
  const base='https://significant-birmingham-businesses-program.trycloudflare.com',errors=[],sent=[];
  const guestContext=await page.context().browser().newContext({viewport:{width:390,height:844}}),guest=await guestContext.newPage();
  for(const p of [page,guest]){
    p.on('pageerror',e=>errors.push(e.message));
    p.on('websocket',socket=>socket.on('framesent',frame=>sent.push(JSON.parse(frame.payload))));
  }
  await page.setViewportSize({width:1440,height:1000});await page.goto(base);
  await page.getByRole('textbox',{name:'What should we call you?'}).fill('Bear Emote QA');
  await page.getByRole('button',{name:'Make some room'}).click();await page.locator('#room-screen').waitFor({state:'visible'});
  const code=new URL(page.url()).searchParams.get('room');
  await guest.goto(base+'/?room='+code);
  await guest.getByRole('textbox',{name:'What should we call you?'}).fill('Panda Emote QA');
  await guest.getByRole('button',{name:'Pull up a seat'}).click();await guest.locator('#room-screen').waitFor({state:'visible'});
  await page.getByRole('button',{name:'Start the race'}).click();
  for(const p of [page,guest])await p.waitForFunction(()=>window.jungleScene?.frames>5&&!document.querySelector('#turn-controls').hidden);
  const before=await page.locator('#board .token').evaluateAll(els=>els.map(el=>el.dataset.visualStep)),beforeMessages=sent.length;
  const waitForEmote=async(seat,kind)=>{
    for(const p of [page,guest])await p.waitForFunction(([seat,kind])=>window.jungleScene.emotes?.some(e=>e.seat===seat&&e.kind===kind&&e.participants===4),[seat,kind]);
  };
  const click=async(p,kind)=>{
    const label=kind[0].toUpperCase()+kind.slice(1);
    await p.waitForFunction(()=>!document.querySelector('[data-emote]').disabled);
    await p.getByRole('button',{name:label+' with my characters'}).click();
  };
  await click(page,'jump');await waitForEmote(0,'jump');
  for(const p of [page,guest])if(await p.evaluate(()=>window.jungleScene.emotes.some(e=>e.seat!==0)))throw new Error('Another player animated from host emote');
  await page.screenshot({path:'output/playwright/player-jump-desktop.png'});
  for(const p of [page,guest])await p.waitForFunction(()=>!window.jungleScene.emotes.length);
  await click(page,'dance');await waitForEmote(0,'dance');
  await click(guest,'wave');await waitForEmote(1,'wave');
  for(const p of [page,guest])await p.waitForFunction(()=>window.jungleScene.emotes.some(e=>e.kind==='dance'&&e.seat===0)&&window.jungleScene.emotes.some(e=>e.kind==='wave'&&e.seat===1));
  await guest.screenshot({path:'output/playwright/player-emotes-mobile.png'});
  if(await guest.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('Mobile overflow');
  for(const p of [page,guest])await p.waitForFunction(()=>!window.jungleScene.emotes.length);
  await page.emulateMedia({reducedMotion:'reduce'});
  await click(guest,'jump');await waitForEmote(1,'jump');
  if(await page.evaluate(()=>window.jungleScene.emotes.some(e=>e.jumpHeight!==0||e.strength!==0)))throw new Error('Reduced motion ignored');
  await guest.waitForFunction(()=>window.jungleScene.emotes.some(e=>e.jumpHeight>.4));
  await page.emulateMedia({reducedMotion:'no-preference'});
  const after=await page.locator('#board .token').evaluateAll(els=>els.map(el=>el.dataset.visualStep));
  if(JSON.stringify(before)!==JSON.stringify(after)||sent.slice(beforeMessages).some(e=>e.type!=='emote'))throw new Error('Emote changed game positions or sent a game action');
  await guestContext.close();
  if(errors.length)throw new Error(errors.join('\n'));
  return {players:2,visibleToBoth:true,onlySenderCharacters:true,jump:true,dance:true,wave:true,concurrentEmotes:true,positionsUnchanged:true,mobile:true,reducedMotion:true,pageErrors:errors};
}
