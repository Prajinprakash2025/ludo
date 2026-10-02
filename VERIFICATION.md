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
