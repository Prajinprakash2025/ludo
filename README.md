# Ludo Loop

A jungle adventure, 2–4 player Ludo game with a real 3D board, live room codes, bots, reconnects, emotes, optional sound, and rematches. Each player uses their own browser.

## Jungle presentation

Bear, panda, deer and fox explorers have articulated 3D bodies, breathing, blinking, looking and turn reactions. Moves travel through every cell using the server's existing lastMove event and the original track/home-lane coordinates. Other players see the same route. Captures return defeated explorers to their camps, and safe landings sparkle. These effects grant no new rewards and change no rules.

The client queues visual events while the server remains authoritative. Reconnecting and rematching reset the visual positions; old moves are not replayed. Reduced-motion users see the final positions immediately. The large board, small player dice, optional trail journal and compact controls adapt to mobile.

Jump, Dance and Wave buttons animate only the sending player's visible explorers. Every connected player sees that player's animation through the existing room emote broadcast. Players can emote during any turn and can animate independently at the same time. Jump has three synchronized hops and soft landings; Dance has a rhythmic sway and foot shuffle; Wave raises one paw. Emotes do not move game pieces. Reduced-motion mode uses a brief ring glow instead.

Three.js renders actual stone tiles, raised camps, animals, palms, trees, grass, mossy rocks, flowing rivers, two waterfalls, bridges, flowers, mushrooms, torches and fireflies. Directional lighting and shadows give the board depth. Water and flame shaders animate continuously. Stone, grass and wood textures are generated locally; the reference image is not loaded as a backdrop. Existing SVG token controls remain available for keyboard input and are projected onto the 3D explorers for pointer input. A fullscreen button enlarges the scene.

The client bundle contains the renderer and shared board coordinates. No runtime external asset requests are needed. The game engine in game.mjs is unchanged; server.mjs includes optional frontend origin permissions and hosting socket startup for separate deployments. Browsers unable to create a WebGL renderer retain the previous SVG presentation.

Editable client sources are src/app.js and src/world3d.js. Run npm.cmd run build after editing them; public/app.js is generated. Styling is in public/styles.css.

## Run

Node.js 20 or newer:

    npm.cmd install
    npm.cmd start

Open http://localhost:4173, create a room, and copy the invite. On a local computer, the invite uses your network address so phones on the same network can join. Windows Firewall must allow TCP port 4173 for local multiplayer.

On this Windows laptop you can also double-click START-GAME.cmd to open the game. If it is already running, the launcher opens the existing game instead of starting a second server.

## Play over the Internet

For a Netlify frontend and a separate PythonAnywhere backend, follow [DEPLOYMENT.md](DEPLOYMENT.md). Netlify builds this frontend using BACKEND_URL; the server permits the exact frontend origin through ALLOWED_ORIGINS. PythonAnywhere deployment uses its experimental async hosting system with DOMAIN_SOCKET, not a classic WSGI web app. Account compatibility and actual live WebSockets must be verified after deployment.

A temporary Internet preview is recorded in LIVE-PREVIEW.txt. It is backed by this laptop and ends when the game server or tunnel stops. Cloudflare Quick Tunnels are a development preview, not permanent hosting: https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/

The Node server must be deployed on a service that supports persistent WebSocket connections. A Dockerfile and render.yaml are included. On Render, create a Blueprint from a Git repository containing this project. Set PUBLIC_URL to your deployed HTTPS URL if your hosting service needs an explicit invite address.

This project is not automatically published by running it locally. Local rooms are reachable on the same network; Internet rooms need hosting. Rooms are held in memory and are lost when the server restarts. Use one server instance; shared multi-instance storage is not included. Rooms support session reconnection while the server remains alive. A room/session saved in the same browser restores that player instead of creating another seat.

## Rules in this version

- Four tokens per player; roll a six to leave the nest, consuming the roll.
- Clockwise movement. Exact roll required to finish at step 56.
- Eight safe squares. Captures send opponents home.
- A six, capture or finish grants a bonus roll.
- Three consecutive sixes lose the third roll and end the turn; prior completed moves stand.
- Tokens of the same color can stack. This version does not use blockades.
- 45 seconds per action. A timeout passes the turn; nobody is eliminated for poor strategy.
- An intentional departure forfeits that player. Disconnected players can reconnect.
- Server uses Node's cryptographic random number generator and enforces dice values, turns, tokens and revisions. Invalid and stale requests do not move tokens. The browser does not determine dice outcomes.
- First player to bring four tokens home wins. The host can start a rematch.

## Verify

    npm.cmd test
    npm.cmd run check
    npm.cmd run build

The browser smoke scenario in tests/ui-smoke.js is run through Playwright CLI. The public WebSocket smoke scenario takes a temporary HTTPS URL as an argument.

For deterministic animation checks, start tests/visual-fixture-server.mjs, then run tests/jungle-visual-smoke.js through Playwright CLI. This isolated fixture uses localhost ports 4174 and 4175 and sets known test positions; it is never started by the normal launcher. It verifies two-player entry, five separate steps on both clients, captures, safe squares, home lanes, remote moves, wins, rematches, reconnects, leaving and reduced motion. Layout checks cover widths 320, 390 and 768. The normal four-player browser scenario verifies real random dice and multiplayer controls.

Rule tests cover entry, exact finish, captures, safe squares, triple sixes, invalid moves, player rotation and wins. Network tests use real WebSocket clients to cover four-player rooms, host actions, forged dice, stale moves, reconnects and bot advancement.

The scene checks in tests/native-world-smoke.js verify the public 3D renderer, 72 tiles, 16 explorers, two waterfalls, eight torches, changing water/fire time, reduced motion, mobile camera proportions and absence of image backdrops. No fonts, tracking or accounts from third-party services are required to play.
