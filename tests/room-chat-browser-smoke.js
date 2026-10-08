async (page) => {
  const browser=page.context().browser(),contexts=[],errors=[],results=[];
  const assert=(condition,message)=>{if(!condition)throw new Error(message);};let stage='join';
  try{
    const mobile=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});contexts.push(mobile);
    const desktop=await browser.newContext({viewport:{width:1280,height:900}});contexts.push(desktop);
    for(const ctx of contexts){await ctx.route('**/app.js',r=>r.fulfill({path:'output/playwright/chat-app.js',contentType:'text/javascript'}));ctx.setDefaultTimeout(12000);}
    const phone=await mobile.newPage(),friend=await desktop.newPage(),pages=[phone,friend];
    for(const p of pages)p.on('pageerror',e=>errors.push(e.message));
    await phone.goto('http://127.0.0.1:4174');await phone.locator('#name').fill('Bear QA');await phone.locator('#begin').click();await phone.locator('#room-screen').waitFor({state:'visible'});
    const code=new URL(phone.url()).searchParams.get('room');
    await friend.goto('http://127.0.0.1:4174/?room='+code);await friend.locator('#name').fill('Panda QA');await friend.locator('#begin').click();await friend.locator('#room-screen').waitFor({state:'visible'});
    await Promise.all(pages.map(p=>p.waitForFunction(()=>window.ludoChat.snapshot().ready&&window.jungleScene?.frames>3)));
    stage='text';await phone.locator('#chat-open').click();await phone.locator('#chat-input').fill('ഹലോ crew <img src=x>');await phone.locator('#chat-send').click();
    for(const p of pages)await p.waitForFunction(()=>window.ludoChat.snapshot().count===1);
    assert(await friend.locator('.chat-unread').textContent()==='1','Hidden chat needs an unread badge');
    await friend.locator('#chat-open').click();assert((await friend.locator('#chat-messages').textContent()).includes('ഹലോ crew <img src=x>'),'Text did not arrive');
    assert(await friend.locator('#chat-messages img').count()===0,'Message markup was interpreted');
    await friend.locator('#chat-input').fill('Hi Bear!');await friend.locator('#chat-send').click();
    await phone.waitForFunction(()=>window.ludoChat.snapshot().count===2);await phone.screenshot({path:'output/playwright/chat-all-mobile.png'});
    stage='quote';await phone.locator('#chat-tab-dialogues').click();
    assert(await phone.locator('[data-quote]').count()===33,'Existing film catalogue missing');
    await phone.waitForFunction(()=>!document.querySelector('[data-quote="olakka"]').disabled);await phone.screenshot({path:'output/playwright/chat-dialogues-mobile.png'});await phone.locator('[data-quote="olakka"]').click();
    for(const p of pages){await p.waitForFunction(()=>window.jungleScene.comedy?.seat===0&&window.jungleScene.comedy?.text==='ഒലക്ക!');assert((await p.locator('#chat-messages').textContent()).includes('ഒലക്ക!'),'Dialogue missing from all chat');}
    assert(await phone.locator('#room-chat').isHidden(),'Mobile quote should reveal the character');
    await phone.screenshot({path:'output/playwright/chat-dialogue-action-mobile.png'});
    await friend.screenshot({path:'output/playwright/chat-room-desktop.png'});
    stage='play';await friend.locator('#chat-input').fill('Draft survives a turn');
    await phone.getByRole('button',{name:'Start the race'}).click();
    assert((await phone.request.get('http://127.0.0.1:4175/?code='+code+'&kind=entry')).ok(),'Seed failed');
    await phone.locator('#chat-open').click();await phone.locator('#chat-tab-all').click();await phone.waitForFunction(()=>!document.querySelector('#roll').disabled);await phone.locator('#roll').click();
    await phone.locator('#board .token.movable[data-seat="0"][data-token="0"]').press('Enter');
    await phone.waitForFunction(()=>document.querySelector('#board .token[data-seat="0"][data-token="0"]').dataset.visualStep==='0');
    assert(await friend.locator('#chat-input').inputValue()==='Draft survives a turn','State updates lost the chat draft');
    await phone.locator('#chat-close').click();await friend.locator('#chat-close').click();
    stage='emotes';assert(await friend.locator('#emote-select option[data-emote]').count()===15,'Missing emote choices');const before=await phone.locator('#board .token').evaluateAll(nodes=>nodes.map(n=>n.dataset.visualStep));
    for(const [index,kind] of ['jump','dance','wave','celebrate','laugh','scared','flee','taunt','cry','angry','sneak','faint','bow','flex','spin'].entries()){
      await friend.waitForFunction(()=>!document.querySelector('#emote-select').disabled);await friend.locator('#emote-select').selectOption(String(index));assert(await friend.locator('#emote-select').inputValue()==='','Picker did not reset for repeated use');assert(await friend.locator('#emote-select').isDisabled(),'Picker skipped sender cooldown');
      await Promise.all(pages.map(p=>p.waitForFunction(k=>window.jungleScene.emotes?.some(e=>e.kind===k&&e.seat===1&&e.participants===4),kind)));
      assert(await phone.evaluate(()=>window.jungleScene.emotes.every(e=>e.seat===1)),'Another player animated');
    }
    assert(JSON.stringify(before)===JSON.stringify(await phone.locator('#board .token').evaluateAll(nodes=>nodes.map(n=>n.dataset.visualStep))),'Emotes moved game pieces');
    await phone.screenshot({path:'output/playwright/emotes-mobile.png'});await friend.screenshot({path:'output/playwright/emotes-desktop.png'});stage='reduced';await phone.emulateMedia({reducedMotion:'reduce'});await friend.waitForFunction(()=>!document.querySelector('#emote-select').disabled);await friend.locator('#emote-select').selectOption('4');
    await phone.waitForFunction(()=>window.jungleScene.emotes?.some(e=>e.kind==='laugh'&&e.strength===0));await phone.emulateMedia({reducedMotion:'no-preference'});
    await phone.waitForFunction(()=>!document.querySelector('#emote-select').disabled);await phone.locator('#emote-select').focus();await phone.keyboard.press('ArrowDown');await phone.keyboard.press('Enter');await friend.waitForFunction(()=>window.jungleScene.emotes?.some(e=>e.kind==='jump'&&e.seat===0));stage='resume';await phone.reload();await phone.locator('#room-screen').waitFor({state:'visible'});await phone.waitForFunction(()=>window.ludoChat.snapshot().count===3&&window.jungleScene?.frames>3);
    assert(await phone.locator('.movie-callout').isHidden(),'History replayed a dialogue');
    await phone.locator('#chat-open').click();await phone.locator('#chat-tab-all').focus();await phone.keyboard.press('ArrowRight');
    assert(await phone.locator('#chat-tab-dialogues').getAttribute('aria-selected')==='true','Keyboard tab selection failed');
    await phone.keyboard.press('Escape');assert(await phone.locator('#room-chat').isHidden(),'Escape did not close chat');
    for(const width of [320,390]){
      await phone.setViewportSize({width,height:844});await phone.locator('#chat-open').click();
      assert(await phone.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Mobile horizontal overflow');
      const bounds=await phone.locator('#room-chat').boundingBox();assert(bounds.x>=0&&bounds.x+bounds.width<=width&&bounds.y>=0,'Chat outside viewport');
      const buttonBounds=await phone.locator('#emote-select').boundingBox();assert(buttonBounds.width>=25,'Emote button collapsed');
      await phone.locator('#chat-close').click();
    }
    results.push('two players: text, safe markup, 33 film buttons, remote character speech, unread, dice/move while open, draft persistence, fifteen emotes, reduced motion, resume, keyboard, 320/390px');
    for(const ctx of contexts)await ctx.close();contexts.length=0;
    stage='fallback';const fallback=await browser.newContext({viewport:{width:390,height:844}});contexts.push(fallback);
    await fallback.route('**/app.js',r=>r.fulfill({path:'output/playwright/chat-app.js',contentType:'text/javascript'}));
    await fallback.addInitScript(()=>{const native=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(kind,...args){return /webgl/.test(kind)?null:native.call(this,kind,...args);};});
    const fp=await fallback.newPage();fp.on('pageerror',e=>errors.push(e.message));await fp.goto('http://127.0.0.1:4174');await fp.locator('#begin').click();await fp.locator('#room-screen').waitFor({state:'visible'});
    await fp.locator('#chat-open').click();await fp.locator('#chat-tab-dialogues').click();await fp.locator('[data-quote="olakka"]').click();await fp.locator('.movie-callout').waitFor({state:'visible'});
    if(await fp.locator('#room-chat').isVisible())await fp.locator('#chat-close').click();await fp.locator('#emote-select').selectOption('4');await fp.waitForFunction(()=>document.querySelectorAll('.token[data-emote="laugh"]').length===4);
    assert(await fp.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Fallback overflow');await fp.waitForFunction(()=>!document.querySelector('#emote-select').disabled);await fp.locator('#emote-select').selectOption('11');await fp.waitForFunction(()=>document.querySelectorAll('.token[data-emote="faint"]').length===4);await fp.screenshot({path:'output/playwright/emotes-fallback.png'});results.push('SVG fallback speech, laugh and faint');
    await fallback.close();contexts.length=0;
    stage='legacy';const legacy=await browser.newContext({viewport:{width:390,height:844}});contexts.push(legacy);
    await legacy.route('**/app.js',r=>r.fulfill({path:'output/playwright/chat-app.js',contentType:'text/javascript'}));
    await legacy.addInitScript(()=>{const Native=window.WebSocket;window.WebSocket=class extends Native{set onmessage(fn){super.onmessage=e=>{const m=JSON.parse(e.data);if(m.type==='capabilities'){delete m.chatVersion;delete m.emoteVersion;}fn({data:JSON.stringify(m)});};}get onmessage(){return super.onmessage;}};});
    const lp=await legacy.newPage();lp.on('pageerror',e=>errors.push(e.message));await lp.goto('http://127.0.0.1:4174');await lp.locator('#begin').click();await lp.locator('#room-screen').waitFor({state:'visible'});
    assert(await lp.locator('[data-emote="4"]').isDisabled(),'Legacy backend exposed a new emote');assert(await lp.locator('[data-emote="0"]').isEnabled(),'Legacy jump disabled');
    await lp.locator('#chat-open').click();assert(await lp.locator('#chat-input').isDisabled(),'Legacy chat exposed a broken send');results.push('older backend preserves original emotes and gates new features');
    assert(errors.length===0,errors.join('\n'));return {results,pageErrors:errors};
  }catch(error){throw new Error(stage+': '+error.message);}finally{for(const ctx of contexts)await ctx.close();}
}
