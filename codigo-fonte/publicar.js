// Copia o site gerado (dist/site) para a raiz do repositório, que é o que o GitHub Pages publica.
// Uso: dentro de codigo-fonte, rode "npm run publicar" e depois faça commit e push.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fonte = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(fonte, '..');
const site = path.join(fonte, 'dist/site');
const manter = new Set(['.git', '.github', 'codigo-fonte', 'README.md', 'CNAME']);

for (const item of fs.readdirSync(raiz)) {
  if (!manter.has(item)) fs.rmSync(path.join(raiz, item), { recursive: true, force: true });
}
fs.cpSync(site, raiz, { recursive: true });
console.log('Site copiado para a raiz do repositório. Agora faça commit e push.');
