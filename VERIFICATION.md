# Jungle 3D UI verification — 1 October 2026

- Syntax check passed.
- All 13 existing engine and WebSocket tests passed, including 20 complete simulated games.
- Four real browser players on the public HTTPS preview: 14 rolls, one move, same-seat reconnect, visible mobile controls, no page errors or horizontal overflow.
- Two real browser players on an isolated fixture: six entry; observed route 4 → 5 → 6 → 7 → 8 → 9 on both clients; captures; safe squares; route 50 → 51 → 52 → 53 into the home lane; remote player movement; exact win; rematch; leave; reconnect without replay.
- Reduced-motion client reached authoritative positions with no running animations.
- Widths 320, 390 and 768 checked for horizontal overflow.
- Public HTTPS and WebSocket preview: four peers received the same dice.
- Public WebGL scene: 72 playable tiles, 16 articulated 3D animals, two waterfalls and eight torches. Water and flame shader time advanced during sampling. No image element or raster backdrop was loaded.
- Mobile camera aspect matched the actual viewport; characters were not stretched. Reduced-motion mode paused water and flame time. Desktop and mobile screenshots were inspected.
- The compiled client bundle and source syntax checks passed. The scene uses procedural geometry and locally generated surface textures.
- Public UI controls: 1,350 px board at a 1,366 px viewport; live 3D welcome preview, rules dialog, sound toggle, bots, emotes and expandable trail journal passed.
- Token click fix: real pointer clicks on stacked tokens, mobile head taps with touch enabled, opponent overlap, remote movement sync and keyboard entry passed. Inactive SVG hit areas no longer intercept clicks; pointer selection uses the complete projected 3D explorer.
- Character emotes: Jump, Dance and Wave passed on the public preview with two real browser players. Both clients saw the sender's four explorers animate; other players' explorers remained idle. Different players could dance and wave concurrently. Positions stayed unchanged and only room emote messages were sent. Desktop/mobile screenshots were inspected; reduced-motion mode used no jump displacement or animated pose.
- Token input was retested during the jump: stacked piece selection, remote sync, mobile head taps and keyboard entry passed.

Production engine and server were not edited:

    game.mjs   SHA256 4CD9C710272703357FDA548392C3B4CEA4B86C29A7FF5E1C252E94215CC2FBB1
    server.mjs SHA256 29AAEF9D97818422DBEF6770D208D5E257F87A0E01E6F07EF61DA1429545E936

The fixture is test-only. The normal game server continues on port 4173.

## Separate hosting preparation — 2 October 2026

- The game engine hash above is unchanged. Server changes are limited to hosting origin permissions, invite address configuration and DOMAIN_SOCKET startup.
- Frontend builds now bundle shared coordinates and accept a public BACKEND_URL at build time. Netlify configuration publishes only public/.
- All 16 engine/network/hosting tests pass. New checks cover secure frontend sockets, frontend invite paths, preserved LAN invites, rejected unapproved origins, and health plus real WebSocket room creation over the hosting IPC listener.
- Four real browser clients connected from static frontend port 4184 to backend port 4185: room joining, server dice, synchronized token entry, sender-only Dance on every client, frontend invite URL, same-seat reconnect, mobile overflow and zero page errors passed.
- No /game.mjs request was made by the standalone frontend. Each browser connected directly to the separate backend.
- DOMAIN_SOCKET was tested with a Windows named pipe using Node's IPC listener API. This verifies the code path locally; it is not proof of PythonAnywhere's Linux gateway or account eligibility.
- PythonAnywhere/Netlify account deployment has not been performed. Follow DEPLOYMENT.md and verify both HTTPS health and a two-device WebSocket game before calling it live.

### User deployment follow-up — 2 October 2026

- The user published the Netlify frontend at https://ludoloop.netlify.app; a live HTTP check returned 200 with the Ludo Loop title.
- The user created the PythonAnywhere async website. The first live health check returned `502-backend`; a later request timed out. No live multiplayer success has been claimed.
- The user supplied startup logs containing repeated `[Errno 2] No such file or directory: env`. The deployment guide now resolves the absolute env executable, verifies both executables exist and documents replacement of that broken website configuration.
- Provider documentation states the async API cannot patch the serving command; it requires deleting/recreating the website configuration. The user's project directory remains the source for the corrected command.
- This is a deployment guide correction; no game logic or application code was changed. PythonAnywhere health and multiplayer still need verification after the user applies the corrected command.

### Successful public deployment — 2 October 2026

- The initial delete API request returned 504, and a subsequent website GET showed the original bare-env command still present.
- The user disabled the website through the documented PATCH API (HTTP 200, enabled false), then successfully deleted/recreated it with absolute env and Node executable paths.
- Live `https://ludoloop.pythonanywhere.com/health` returned HTTP 200 and `{"ok":true}`.
- Four real WebSocket clients with Origin `https://ludoloop.netlify.app` created/joined a room, started the game and received the same server-generated dice result.
- Two real browsers on the Netlify deployment connected directly to the PythonAnywhere WSS backend: room join, shared dice, sender-only Dance, a Netlify invite link, same-seat mobile reconnect and zero page errors passed. Desktop/mobile screenshots are in the local ignored output/playwright directory.
- Public WebSocket smoke now accepts an optional frontend origin for split deployments.

### Mobile rendering and scrolling — 2 October 2026

- Phone layouts use a 1x pixel ratio, lower sphere/leaf geometry detail, fewer bank decorations, and no shadow-map or eight-point-light pass. The board, all 16 characters, two waterfalls, eight flames and three character emotes remain animated. Desktop keeps full geometry detail and shadows.
- Static scenery matrices and instance buffers are built once. Shared pad/ring/scarf/smile/waterfall geometry reduces draw calls. CSS transform reads are grouped before hit-target writes, and hidden SVG artwork no longer runs duplicate animations.
- Mobile canvas height uses the stable viewport to avoid reallocating it as browser controls move while scrolling. Passive scroll handling yields graphics work for 120ms after a scroll event; offscreen previews stop rendering and resume on return.
- In a 390x844, 3x-DPI browser simulation, recorded draw calls fell from 512 to 242 and the canvas from 538x1101 to 384x787. Under 4x CPU throttling, style work over the sampling window fell from 1166ms to 248ms. These are browser simulations, not measured FPS or a smoothness guarantee on the user's physical phone.
- All 16 engine/network/hosting tests and syntax checks pass. Existing browser checks passed stacked clicks during Jump, mobile head taps, keyboard entry, remote move sync, sender-only/concurrent Jump/Dance/Wave, reduced motion, animated water/fire and correct mobile aspect ratio.
- `tests/mobile-render-smoke.js` additionally verified a 3x-DPI touch viewport: 1x canvas resolution, offscreen preview suspension, resumption on return, animated water/fire and Wave, with zero page errors.
- Three live backend WebSocket ping round trips from this laptop measured 233ms, 231ms and 236ms. This does not measure the phone's network and does not establish the cause of its dice delay.
- `game.mjs`, server behavior, dice timing and legal moves are unchanged. This is a frontend update; the PythonAnywhere server does not need reloading for it.
- GitHub commit `ddea111` was pushed to main. The live Netlify bundle contains the mobile performance update, and the high-DPI mobile rendering smoke passed on the public deployment with zero page errors. Physical-phone scroll smoothness still requires the user's reload and retest.

### Character clarity, tap feedback and crew highlighting — 2 October 2026

- In response to the user's physical-phone report of reduced character clarity, mobile render resolution is now capped at 1.5x and characters use the full 20x14 sphere detail independently of the lighter foliage. Static buffers, lighter forest decoration, scroll suspension, disabled mobile shadow maps and disabled mobile point lights remain in place. This increases pixel work relative to the previous 1x setting; physical-phone performance needs retesting.
- The current crew has bright colored rings, translucent ground halos and a subtle tint on light surfaces. Eyes, noses and dark patches retain their contrast. A fresh dice result briefly highlights the rolling crew, including when the turn changes immediately, then the highlight follows the current turn. Other room clients see the same crew highlighted.
- Legal pieces show a floating arrow for the player allowed to move them. Arrow taps are included in the model's picking bounds; server legal-move checks are unchanged. Leaving a room clears the crew highlight.
- Native blue tap feedback is disabled on the board, its controls, buttons and links. Normal scrolling and keyboard focus styles remain available.
- Two-browser checks passed host-only and guest-only four-piece highlights, remote visibility, legal markers only for the mover, turn handoff, room exit, transparent tap feedback and zero page errors. A high-DPI touch check verified approximately 1.5x canvas resolution, full character detail, offscreen pause/resume, animated water/fire and Wave. Stacked clicks during Jump, mobile head taps, remote move synchronization and keyboard entry also passed.
- The mobile crew check recorded 249 draw calls, versus 242 in the previous lighter version and 512 before optimization. This is a rendering-work comparison, not physical-device FPS. `game.mjs` retains its recorded SHA256; no server rules, dice or turn timings were edited.
- A live 390x600 viewport exposed a further pointer obstruction: Netlify's 64px fixed badge covered the dice/roll controls after scrolling. The mobile play panel now reserves bottom clearance when that badge is present; the badge itself is preserved.

### Room voice chat — 2 October 2026

- Added explicit Join voice, microphone mute, incoming speaker mute, Leave voice and autoplay recovery controls. Speaking portraits show a green outline. The mic is requested only after clicking Join voice. Voice exit, room exit, page exit and socket disconnect dispose peer connections, audio elements, meters and microphone tracks; reconnect requires a fresh explicit voice join.
- Audio-only WebRTC uses at most three peer links per player. Game sockets carry only bounded room-authenticated signaling with server-issued voice session IDs. Voice negotiation/control does not alter the game revision, deadline, dice, movement or emote protocol. Signaling has an independent message budget, and cleanup remains available after exhausting it.
- All 18 engine/network/hosting tests pass, including room isolation, forged/stale voice sessions, SDP bounds, independent signaling rate limits, flood cleanup and same-seat reconnect without automatic mic activation. Health now advertises voiceVersion 1. Syntax/build checks pass; game.mjs retains SHA256 4CD9C710272703357FDA548392C3B4CEA4B86C29A7FF5E1C252E94215CC2FBB1.
- Four real browser contexts on separate frontend/backend origins exchanged synthesized microphone audio through twelve actual Opus/RTP receive paths. Received packets, bytes, samples and nonzero audio energy were checked for each path. Muting yielded zero received-energy increase; unmuting restored audio. Shared dice/token entry, all speaking portraits, speaker mute, permission-denied recovery, blocked-autoplay recovery, voice rejoin, socket reconnect, mic cleanup on room exit, mobile overflow and zero page errors passed.
- Desktop/mobile screenshots in ignored output/playwright/voice-desktop.png and voice-mobile.png were visually inspected. Desktop voice controls occupy the header so they do not cover board tiles; mobile controls occupy the water gap below player cards.
- The default config uses STUN discovery only. No TURN account/credentials were provisioned and cross-network relay delivery has not been tested. Optional private voice-config.json supports a provider relay without replacing the existing PythonAnywhere startup command. The user will run the backend pull/reload commands and test two physical phones; physical microphone quality, phone lag and mobile-network connectivity remain unverified.

### Two-place race and comic victory celebrations — 2 October 2026

- First place pauses the dice for 15 seconds and celebrates only that player's four characters. The remaining seats then play for second place, requiring all four tokens home. Second place stops the race; both winning crews celebrate for 20 seconds, followed by a two-place result and host rematch. No third place is awarded.
- Bear belly-clap, Panda waddle/shimmy, Deer prance/twirl and Fox disco routines use existing model joints. All include comic flips, soft landings, winks and playful victory quips. Automatic dances affect only placed crews. Reduced motion uses a stationary victory pose. No new geometry, lights or render passes are added.
- Server timestamps control both celebrations. Dice/move/timeout/bot actions cannot advance the game during a dance; resume preserves the end time. A finished player's name/place remains recorded after departure. A lone remaining player still has to complete second place. Voice signaling remains available during celebrations.
- All 21 engine, socket, hosting and voice tests pass; syntax and build checks pass. Deterministic simulations finish with exactly two distinct players and both sets of four tokens home. Socket tests cover the timed pause, rejected rolls, voice during a pause, reconnect, second place, premature rematch rejection and a clean rematch.
- PythonAnywhere must pull/reload this update because the game rules and server clock changed. Reload clears existing rooms; start a fresh room after updating. Physical-phone animation quality/performance remains for the user to assess.

### Live TURN setup — 2 October 2026

- The user saved private Metered relay credentials in PythonAnywhere's ignored voice-config.json and reloaded. A live signaling probe confirmed four TURN endpoints including TLS/TCP fallback; credentials were neither printed nor committed.
- Two live browser contexts forced TLS-only relay connections. Both selected relay candidates using TLS and received actual synthesized Opus packets, bytes, samples and positive audio energy in both directions. This is a real relay test, not a test of two physical phones or their microphones.

### Victory browser verification — 2 October 2026

- Four real browser contexts, including a 390x844 high-DPI touch viewport, passed first-winner-only four-piece dancing, actual somersault body rotation with airborne height, dice pause, refreshed rank retention, continuation for second, exactly two final winners, the 20-second finale, two-row standings, rematch reset, all four distinct animal routines and reduced-motion poses. No page errors occurred. Screenshots in output/playwright/victory-first-mobile.png, victory-final-mobile.png and victory-deer-fox-desktop.png were captured; the mobile and desktop compositions were inspected.

