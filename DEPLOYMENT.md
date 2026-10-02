# Netlify frontend + PythonAnywhere backend

Prepared for GitHub repository https://github.com/Prajinprakash2025/ludo and PythonAnywhere account **ludoloop** on the US service.

The frontend renders the jungle and connects directly to the backend over secure WebSockets. The backend owns rooms, dice and legal moves. You do not need this laptop running after both services are deployed.

**Status, 2 October 2026:** the user deployed the frontend at https://ludoloop.netlify.app and the backend at https://ludoloop.pythonanywhere.com. Live HTTPS health and four-player WebSocket/dice synchronization checks passed. These instructions describe the setup used for that deployment.

## 1. Deploy the frontend on Netlify

1. Log in to Netlify. Add a new project by importing an existing Git repository.
2. Select `Prajinprakash2025/ludo`, branch `main`.
3. Build command: `npm run build`. Publish directory: `public`. Base directory: leave empty. These settings are also in `netlify.toml`.
4. Add this environment variable, available during **builds**, before deploying:

   ```text
   BACKEND_URL=https://ludoloop.pythonanywhere.com
   ```

5. Deploy, then copy the actual Netlify site URL, for example `https://your-real-site.netlify.app`. The page will reconnect until the backend is running. This is expected at this stage.

Use the primary production URL in the steps below. Temporary deploy-preview addresses are not automatically allowed. If you later add a custom domain, update the backend allowlist too.

## 2. Prepare Node.js on PythonAnywhere

Confirm your email and open **Consoles → Bash** in the **ludoloop** account. These are Linux Bash commands for the PythonAnywhere console, not Windows PowerShell commands.

Check the installed runtime:

```bash
node --version
npm --version
```

The project needs Node.js 20 or newer. If Node is missing or older, install Node 22 using NVM. This follows PythonAnywhere's documented NVM approach:

```bash
git clone --depth 1 https://github.com/nvm-sh/nvm.git /home/ludoloop/nvm
source /home/ludoloop/nvm/nvm.sh
nvm install 22
nvm use 22
nvm alias default 22
node --version
npm --version
```

If `/home/ludoloop/nvm` already exists, skip the clone and start with `source`. In later consoles, use `source /home/ludoloop/nvm/nvm.sh` and `nvm use 22` before running npm.

Free accounts restrict outbound Internet access. GitHub, npmjs.org and nodejs.org are listed in the provider's allowlist at the time these instructions were prepared. If an install fails with a proxy/access error, keep the exact error; do not assume installation succeeded or disable certificate checks.

## 3. Download the backend

Run these in the PythonAnywhere Bash console:

```bash
git clone --depth 1 https://github.com/Prajinprakash2025/ludo.git /home/ludoloop/ludo
cd /home/ludoloop/ludo
npm ci --omit=dev --cache /tmp/ludoloop-npm-cache
```

The compiled frontend is already committed. Do not run `npm run build` in this backend installation: development dependencies were intentionally omitted and Netlify performs its own frontend build.

If `/home/ludoloop/ludo` already contains this checkout, use `cd /home/ludoloop/ludo` and `git pull --ff-only` instead of cloning again.

## 4. Enable PythonAnywhere's experimental async hosting

This Node WebSocket server needs PythonAnywhere's **async/ASGI beta hosting system**, which also accepts non-ASGI servers listening on a Unix domain socket. The normal **Web → Add a new web app → Flask/Django/WSGI** workflow does not run this server.

1. Open **Account → API token** and generate a token yourself if none exists. Keep it in PythonAnywhere; do not paste it into chat, GitHub or Netlify. Their console tool can use the account token without you copying it.
2. Open a fresh Bash console and install their deployment tool:

   ```bash
   python3 -m pip install --user --upgrade pythonanywhere
   ```

3. If you installed Node using NVM, load it in this fresh console:

   ```bash
   source /home/ludoloop/nvm/nvm.sh
   nvm use 22
   ```

4. Replace **only** `https://YOUR-SITE.netlify.app` below with the real Netlify URL from step 1. Use the origin only: no path, query string or trailing slash.

   ```bash
   LUDO_FRONTEND='https://YOUR-SITE.netlify.app'
   LUDO_NODE="$(command -v node)"
   LUDO_ENV="$(command -v env)"
   if [ -x "$LUDO_NODE" ] && [ -x "$LUDO_ENV" ]; then
     pa website create --domain ludoloop.pythonanywhere.com --command "$LUDO_ENV ALLOWED_ORIGINS=$LUDO_FRONTEND PUBLIC_URL=$LUDO_FRONTEND $LUDO_NODE /home/ludoloop/ludo/server.mjs"
   else
     printf 'Node or env executable is missing. Stop and check the installation.\n'
   fi
   ```

`DOMAIN_SOCKET` is supplied automatically by PythonAnywhere. The server reads it and listens on the hosting socket instead of local port 4173. The website command must start with the absolute `env` executable (normally `/usr/bin/env`), and also uses the absolute Node executable. The launcher does not resolve a bare `env` command through PATH; using it produces `[Errno 2] No such file or directory: env`. Website startup does not depend on loading NVM in a login shell.

If `pa` is not found, try `/home/ludoloop/.local/bin/pa` in place of `pa`.

If the account/API refuses to create an async website, or you get a beta eligibility/plan error, stop and keep that error. Code changes cannot grant account eligibility. PythonAnywhere describes this hosting feature as experimental; account availability and future pricing are not guaranteed. Do not purchase an upgrade without deciding whether you want one.

## 5. Verify that it is live

Open:

```text
https://ludoloop.pythonanywhere.com/health
```

It should return:

```json
{"ok":true}
```

Then open the Netlify frontend. It must say **Ready to play**. Create a room, copy its invite, and join from another phone/browser. Roll and move a token; both players must see the same result. Press Jump, Dance or Wave; both players must see the sender's explorers animate.

A health response alone does not prove WebSockets work. The two-device room test is the deployment check that matters.

You can inspect the deployed website from the Bash console:

```bash
pa website get --domain ludoloop.pythonanywhere.com
```

If the backend fails, read the error/server log paths shown by this command. The beta website might not appear in the regular Web tab. Do not create a duplicate WSGI app to resolve that.

## Updating later

Netlify can rebuild after each GitHub push. If BACKEND_URL changes, trigger a new Netlify build; it is compiled into the frontend.

Backend changes need a pull and reload in PythonAnywhere:

```bash
cd /home/ludoloop/ludo
git pull --ff-only
npm ci --omit=dev --cache /tmp/ludoloop-npm-cache
pa website reload --domain ludoloop.pythonanywhere.com
```

Load NVM first if necessary. Reloading clears active rooms because they are stored in memory. Keep one server instance; shared multi-instance storage is not implemented.

Changing the startup command requires replacing the async website configuration. PythonAnywhere's beta API supports patching `enabled`, but does not support patching `command`. `ALLOWED_ORIGINS` accepts exact origins separated by commas. Do not use a wildcard. Netlify proxies are not needed for WebSockets.

### Repair a deployment that reports `No such file or directory: env`

Use this only for the broken website created with the earlier bare `env` command. It replaces that backend hosting configuration using the existing project files in `/home/ludoloop/ludo`. Successful replacement will restart the backend and clear any active in-memory rooms. In the Bash console:

```bash
source /home/ludoloop/nvm/nvm.sh
nvm use 22
LUDO_FRONTEND='https://ludoloop.netlify.app'
LUDO_NODE="$(command -v node)"
LUDO_ENV="$(command -v env)"
if [ -x "$LUDO_NODE" ] && [ -x "$LUDO_ENV" ]; then
  pa website delete --domain ludoloop.pythonanywhere.com &&
  pa website create --domain ludoloop.pythonanywhere.com --command "$LUDO_ENV ALLOWED_ORIGINS=$LUDO_FRONTEND PUBLIC_URL=$LUDO_FRONTEND $LUDO_NODE /home/ludoloop/ludo/server.mjs"
else
  printf 'Node or env executable is missing. Stop and check the installation.\n'
fi
```

Then check `/health` and a two-device game as described above. If startup still fails, inspect new log messages; old `env` errors remain in the log history.

If deletion returns an HTTP 504 timeout, check the state with `pa website get --domain ludoloop.pythonanywhere.com` before trying another mutation. The timeout does not prove the website was deleted. If the old configuration is still present, disable it first using the provider's supported API:

```bash
python3 - <<'PY'
from pythonanywhere_core.base import call_api
url = "https://www.pythonanywhere.com/api/v1/user/ludoloop/websites/ludoloop.pythonanywhere.com/"
r = call_api(url, "patch", json={"enabled": False}, timeout=30)
print("HTTP:", r.status_code)
r.raise_for_status()
print("Enabled:", r.json().get("enabled"))
PY
```

After HTTP 200 and `Enabled: False`, run the repair block above once. This sequence succeeded for the user's deployment after the initial delete timeout. The PythonAnywhere package reads the account token from the console environment; the token is never printed or stored in this repository. If disabling also fails, resolve the provider/API error before continuing.

## Voice chat update and phone test

Netlify rebuilds automatically after the voice commit is pushed. The PythonAnywhere backend also needs updating; until then, the new frontend shows **Voice server update pending** and leaves the mic disabled. Run in the existing account's Bash console:

```bash
source /home/ludoloop/nvm/nvm.sh
nvm use 22
cd /home/ludoloop/ludo
git pull --ff-only
pa website reload --domain ludoloop.pythonanywhere.com
curl -sS https://ludoloop.pythonanywhere.com/health
```

Only run the reload if the pull succeeded. This update adds no packages, so an npm install is unnecessary. Reload clears existing rooms. Successful updated health returns `{"ok":true,"voiceVersion":1}`. Open a fresh room after the update.

### Two real phones

1. Open https://ludoloop.netlify.app directly in each phone's browser, and join the same fresh room.
2. Tap **Join voice** on each phone and allow the microphone. Prefer headphones, or separate the test devices to avoid feedback.
3. Confirm both players see **2 in voice**. Speak in both directions; the speaking portrait should light up.
4. Roll/move while speaking. Check speech delay, board scrolling and dice response. Mute/unmute your mic, then mute/unmute incoming sound separately.
5. Leave voice and confirm the browser's microphone indicator stops. Rejoin, then leave the room. Reconnecting the game must not silently enable the mic.
6. First try both on Wi-Fi, then one on mobile data. If the second test cannot connect, configure TURN below; the local browser test cannot prove mobile-network connectivity.

### TURN relay for restrictive networks

By default the app only uses `stun:stun.l.google.com:19302`; **a relay is not configured**. [WebRTC's official TURN guide](https://webrtc.org/getting-started/turn-server) explains why direct connections may need a relay. The PythonAnywhere HTTP backend does not act as a TURN server.

Obtain actual TURN URLs/credentials from a relay provider or your own TURN server. Create `/home/ludoloop/ludo/voice-config.json`, following `voice-config.example.json`, and replace all placeholders with those values. Reload the website afterward. Use UDP plus a TLS/TCP fallback where the provider supports them. File-based configuration works with the current startup command, so the website does not need to be deleted/recreated.

`VOICE_ICE_SERVERS` can alternatively supply the ICE server list as JSON in the server environment, overriding the file. Credentials are sent only to room players who explicitly join voice, but browsers necessarily receive them; use provider quotas and rotate credentials as appropriate. Never put a relay account API key in this file. The private file is ignored by Git and is never included in Netlify's `public/` directory. Provider availability, free quota and cross-network relay delivery need independent verification; no TURN account or paid plan is created by this update.

## Free account limits

PythonAnywhere currently lists 512 MiB disk space, one web app with one worker and a one-month expiry for new free accounts. Check the account's expiry/renewal controls. Async hosting is beta and its longer-term pricing is undecided; permanent free uptime is not promised by this project.

## Official references

- [PythonAnywhere async hosting and non-ASGI socket support](https://help.pythonanywhere.com/pages/ASGICommandLine/)
- [PythonAnywhere async API and command replacement limitation](https://help.pythonanywhere.com/pages/ASGIAPI/)
- [PythonAnywhere API token](https://help.pythonanywhere.com/pages/GettingYourAPIToken/)
- [PythonAnywhere Node/NVM instructions](https://help.pythonanywhere.com/pages/Node/)
- [PythonAnywhere free account limits](https://help.pythonanywhere.com/pages/FreeAccountsFeatures/)
- [PythonAnywhere outbound allowlist](https://www.pythonanywhere.com/whitelist/)
- [Netlify build environment variables](https://docs.netlify.com/build/configure-builds/environment-variables/)

## Updating the two-place race and victory dances

This update changes both frontend and backend. Netlify rebuilds after GitHub main is pushed. In the existing PythonAnywhere Bash console run:

```bash
source /home/ludoloop/nvm/nvm.sh
nvm use 22
cd /home/ludoloop/ludo
git pull --ff-only && pa website reload --domain ludoloop.pythonanywhere.com
```

Keep the existing startup command and private voice-config.json. Reload clears RAM rooms; refresh every player's page and create a fresh room. First place dances alone for 15 seconds, then the race continues for second. Second place ends the race, both winning crews dance for 20 seconds, and the host can rematch. No third place is played.
