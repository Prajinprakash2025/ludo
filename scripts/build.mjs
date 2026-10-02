import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { normalizeBackendUrl } from '../src/hosting.js';

const root = fileURLToPath(new URL('../',import.meta.url));
export async function buildFrontend({backendUrl = process.env.BACKEND_URL || '', outfile = 'public/app.js'} = {}) {
  backendUrl = normalizeBackendUrl(backendUrl);
  await build({
  absWorkingDir:root,
  entryPoints:['src/app.js'],
  bundle:true,
  format:'esm',
  minify:true,
  outfile,
  define:{__LUDO_BACKEND_URL__:JSON.stringify(backendUrl)},
  logLevel:'info'
  });
  console.log(backendUrl ? 'Frontend backend: '+backendUrl : 'Frontend backend: same origin (local/combined hosting)');
}
if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await buildFrontend();
