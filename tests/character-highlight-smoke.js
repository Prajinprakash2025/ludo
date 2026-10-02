// Isolated fixture: verify that each browser highlights only the rolling crew.
async (page) => {
  const browser=page.context().browser(),errors=[];
  const phoneContext=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
  const guestContext=await browser.newContext();
  const host=await phoneContext.newPage(),guest=await guestContext.newPage();
  try {
    for(const peer of [host,guest])peer.on('pageerror',e=>errors.push(e.message));
    await host.goto('http://127.0.0.1:4174');
    await host.locator('#name').fill('Bear QA');await host.locator('#begin').click();
    await host.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(host.url()).searchParams.get('room');
    await guest.goto('http://127.0.0.1:4174/?room='+code);
    await guest.locator('#name').fill('Panda QA');await guest.locator('#begin').click();
    await guest.locator('#room-screen').waitFor({state:'visible'});
    await host.getByRole('button',{name:'Start the race'}).click();
    const setup=async kind=>{
      await host.request.get('http://127.0.0.1:4175/?code='+code+'&kind='+kind);
      await host.reload();await guest.reload();
      await Promise.all([host,guest].map(peer=>peer.waitForFunction(()=>window.jungleScene?.frames>3)));
    };
    const crew=async seat=>{
      for(const peer of [host,guest])await peer.waitForFunction(seat=>{
        const h=window.jungleScene.highlight;
        return h?.seat===seat&&h.tokens.length===4&&h.tokens.every(key=>key.startsWith(seat+'-'));
      },seat);
    };
    await setup('entry');await host.locator('#roll').click();await crew(0);
    await host.waitForFunction(()=>window.jungleScene.highlight.legalTokens.length===4);
    if(await guest.evaluate(()=>window.jungleScene.highlight.legalTokens.length))throw new Error('Guest saw clickable markers for host pieces');
    await host.screenshot({path:'output/playwright/clear-bear-highlight-mobile.png'});
    await setup('remote');await guest.locator('#roll').click();await crew(1);
    await guest.waitForFunction(()=>window.jungleScene.highlight.legalTokens.length===1);
    if(await host.evaluate(()=>window.jungleScene.highlight.legalTokens.length))throw new Error('Host saw clickable markers for guest pieces');
    await host.screenshot({path:'output/playwright/clear-panda-highlight-mobile.png'});
    await guest.locator('#board .token.movable').first().press('Enter');
    await crew(0);
    const tap=await host.evaluate(()=>[document.getElementById('board'),document.getElementById('roll'),document.querySelector('#board .token')].map(el=>getComputedStyle(el).webkitTapHighlightColor));
    if(tap.some(value=>value!=='rgba(0, 0, 0, 0)'))throw new Error('Blue tap feedback remains');
    const quality=await host.evaluate(()=>({...window.jungleScene}));
    if(quality.characterDetail!=='full'||quality.performanceVersion!==2)throw new Error('Character quality update missing');
    host.once('dialog',dialog=>dialog.accept());
    await host.locator('#leave').click();
    await host.locator('#welcome').waitFor({state:'visible'});
    await host.locator('#preview-board').scrollIntoViewIfNeeded();
    await host.waitForFunction(()=>window.jungleScene.highlight?.seat===-1);
    if(errors.length)throw new Error(errors.join('\n'));
    return {phone:true,fullCharacterDetail:true,hostCrewOnly:true,guestCrewOnly:true,remoteHighlights:true,legalMarkersOnlyForMover:true,turnHandoff:true,leaveClearsHighlight:true,transparentTapFeedback:true,drawCalls:quality.drawCalls,pageErrors:errors};
  } finally {await phoneContext.close();await guestContext.close();}
}
