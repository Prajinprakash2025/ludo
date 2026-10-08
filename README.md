# Pakidakali

A jungle adventure, 2–4 player Ludo game with a real 3D board, live room codes, bots, reconnects, emotes, optional sound, room voice chat, and rematches. Each player uses their own browser.

## Talk while playing

Join a room, tap **Join voice**, and allow the microphone. Friends must each join voice themselves. **Mute** controls your microphone; **Sound on / Hear crew** controls incoming sound. A green ring around a player's portrait shows when they are speaking. **Leave voice** keeps you in the game. Leaving the room or losing the game connection stops the microphone; reconnecting requires another explicit Join voice click. Bots never join voice.

Voice uses native audio-only WebRTC, with echo cancellation and noise suppression requested from the browser. The room socket relays connection messages, while audio uses separate peer connections. There are at most three audio links per player; outgoing audio requests a 24 kbps limit per link. Speaking indicators sample eight times per second, independently of the game rendering loop. Audio is not recorded or stored by this application.

Microphone access needs HTTPS (localhost is also accepted), a supported browser and permission. Open the public site directly in Chrome/Safari if an embedded app browser refuses microphone access. If playback is blocked, tap **Hear crew**. Headphones help when two test devices are beside each other.

The default setup has STUN discovery and **no TURN relay**. Direct calls can work, but some mobile networks/firewalls need a relay. See [voice relay setup and phone testing](DEPLOYMENT.md#voice-chat-update-and-phone-test). Zero lag or universal connectivity is not promised. Four local browser clients exchanged real encoded audio using synthesized microphone tracks in automated testing; physical microphone quality, phone CPU, Bluetooth, and cross-network connectivity still require device testing.

## Jungle presentation

Bear, panda, deer and fox explorers have articulated 3D bodies, breathing, blinking, looking and turn reactions. Moves travel through every cell using the server's existing lastMove event and the original track/home-lane coordinates. Other players see the same route. Captures return defeated explorers to their camps, and safe landings sparkle. These effects grant no new rewards and change no rules.

The client queues visual events while the server remains authoritative. Reconnecting and rematching reset the visual positions; old moves are not replayed. Reduced-motion users see the final positions immediately. The large board, small player dice, optional trail journal and compact controls adapt to mobile.

Jump, Dance and Wave buttons animate only the sending player's visible explorers. Every connected player sees that player's animation through the existing room emote broadcast. Players can emote during any turn and can animate independently at the same time. Jump has three synchronized hops and soft landings; Dance has a rhythmic sway and foot shuffle; Wave raises one paw. Emotes do not move game pieces. Reduced-motion mode uses a brief ring glow instead.

Three.js renders actual stone tiles, raised camps, animals, palms, trees, grass, mossy rocks, flowing rivers, two waterfalls, bridges, flowers, mushrooms, torches and fireflies. Directional lighting and shadows give the board depth. Water and flame shaders animate continuously. Stone, grass and wood textures are generated locally; the reference image is not loaded as a backdrop. Existing SVG token controls remain available for keyboard input and are projected onto the 3D explorers for pointer input. A fullscreen button enlarges the scene.

The client bundle contains the renderer and shared board coordinates. No runtime external asset requests are needed. The game engine in game.mjs is unchanged; server.mjs includes optional frontend origin permissions and hosting socket startup for separate deployments. Browsers unable to create a WebGL renderer retain the previous SVG presentation.

Editable client sources are src/app.js, src/world3d.js and src/voice.js. Voice signaling is in voice-server.mjs. Run npm.cmd run build after editing client sources; public/app.js is generated. Styling is in public/styles.css.

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
- First player to bring four tokens home gets first place and a 15-second solo crew dance. Dice pause for the dance, then the remaining players race for second place. Second place requires all four tokens home, even in a two-player game. Once second place is earned, the race ends: both winning crews dance for 20 seconds, then the host can start a rematch. There is no third place.
- Bear belly-claps, Panda waddles and shimmies, Deer prances and twirls, and Fox does disco steps. Each routine also includes comic somersaults, soft bounce landings and a cheeky victory pose. Only winning crews join the automatic victory dances; timers are shared by all clients and survive refresh. Reduced motion shows a celebration pose.

## Room chat and explorer emotes

Open **Chat** beside the explorer actions. **All Chat** lets the room's human players send messages; **Movie Dialogues** offers the existing 33 credited film excerpts. Clicking a line sends it to the room transcript and shows a short bubble on your explorer. On phones, choosing a line closes the panel to reveal the character. The existing automatic movie conversations still run during suitable game events.

Messages are visible only to joined players in that room. The last 60 messages are kept in server memory for reconnect; they disappear when the room expires or the server restarts. History does not replay character speech. Text is limited to 240 characters and messages are spaced by 1.5 seconds. Chat does not pause dice, turns or optional voice. During winner celebrations, the dialogue remains in chat while the victory animation takes priority on the board.

Five actions are available: **Jump**, **Dance**, **Wave**, **Celebrate**, and **Laugh**. They animate only the sender's explorers using the existing joints; reduced-motion settings suppress animated movement. Chat and the two new actions require the updated backend; see the room-chat section in DEPLOYMENT.md.

## Verify

The browser scenario in `tests/room-chat-browser-smoke.js` uses the isolated visual fixture and a same-origin build at `output/playwright/chat-app.js`. It covers two real browser contexts, messages, clicked film lines, five actions, gameplay with chat open, reconnect, reduced motion, SVG fallback, small-screen layout and older-backend compatibility.

    npm.cmd test
    npm.cmd run check
    npm.cmd run build

The browser smoke scenario in tests/ui-smoke.js is run through Playwright CLI. The public WebSocket smoke scenario takes a temporary HTTPS URL as an argument.

For the deployed split setup, use `node tests/public-smoke.mjs https://ludoloop.pythonanywhere.com https://ludoloop.netlify.app`. It verifies backend health and four-player shared dice with the frontend's approved Origin header.

For deterministic animation checks, start tests/visual-fixture-server.mjs, then run tests/jungle-visual-smoke.js through Playwright CLI. This isolated fixture uses localhost ports 4174 and 4175 and sets known test positions; it is never started by the normal launcher. It verifies two-player entry, five separate steps on both clients, captures, safe squares, home lanes, remote moves, wins, rematches, reconnects, leaving and reduced motion. Layout checks cover widths 320, 390 and 768. The normal four-player browser scenario verifies real random dice and multiplayer controls.

Rule tests cover entry, exact finish, captures, safe squares, triple sixes, invalid moves, player rotation and wins. Network tests use real WebSocket clients to cover four-player rooms, host actions, forged dice, stale moves, reconnects and bot advancement.

The scene checks in tests/native-world-smoke.js verify the public 3D renderer, 72 tiles, 16 explorers, two waterfalls, eight torches, changing water/fire time, reduced motion, mobile camera proportions and absence of image backdrops. No fonts, tracking or accounts from third-party services are required to play.

## Funny emote picker

One compact native dropdown replaces the action cards. Select an action to play it immediately on your four explorers; the picker resets so the same action can be selected again after the two-second cooldown. The 15 choices are Jump, Dance, Wave, Celebrate, Laugh, Scared, Run away, Taunt, Cry, Angry stomp, Sneak, Faint, Bow, Flex and Spin. New actions have Malayalam labels. They animate existing joints for 2.2–3.2 seconds, with finite SVG fallback reactions and reduced-motion support. Each action is shared with the room, without changing token positions, dice or capture rules.

The ten new actions require backend `emoteVersion: 3`; older backends keep their supported actions available.
