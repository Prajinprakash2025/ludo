// The browser connects directly to the game server, without a frontend proxy.
export function normalizeBackendUrl(value = '') {
  if (!value.trim()) return '';
  const url = new URL(value.trim());
  if (!['https:','http:','wss:','ws:'].includes(url.protocol) ||
      url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('BACKEND_URL must be a server origin such as https://ludoloop.pythonanywhere.com');
  }
  return url.origin;
}

export function socketAddress(backendUrl,frontendUrl) {
  const frontend = new URL(frontendUrl);
  const url = new URL(normalizeBackendUrl(backendUrl) || frontend.origin);
  url.protocol = ['https:','wss:'].includes(url.protocol) ? 'wss:' : 'ws:';
  if (frontend.protocol === 'https:' && url.protocol !== 'wss:') {
    throw new Error('An HTTPS frontend needs an HTTPS/WSS backend.');
  }
  return url.href;
}

export function inviteAddress(code,backendUrl,frontendUrl,shareBase) {
  // Split hosting invites must open the frontend. Same-host local play keeps LAN invites.
  const url = backendUrl
    ? new URL('./',frontendUrl)
    : new URL((shareBase || new URL(frontendUrl).origin).replace(/\/$/,'')+'/');
  url.search = '';
  url.hash = '';
  url.searchParams.set('room',code);
  return url.href;
}
