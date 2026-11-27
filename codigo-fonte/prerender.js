// Gera um HTML estático para cada página (bom para Google e carregamento rápido).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const client = path.join(root, 'dist/client');
const out = path.join(root, 'dist/site');
const template = fs.readFileSync(path.join(client, 'index.html'), 'utf-8');
const { render, routes, site } = await import('./dist/server/entry-server.js');

fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(client, out, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const r of [...routes, { path: '/404', title: 'Página não encontrada', description: site.descricao }]) {
  const html = render(r.path);
  const url = site.dominio + (r.path === '/' ? '/' : r.path);
  const title = r.path === '/' ? r.title : `${r.title} | ${site.nome}`;
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Organization', name: site.nome, legalName: site.razaoSocial,
      url: site.dominio, email: site.email, telephone: site.telefoneIntl, taxID: site.cnpj, sameAs: [site.linkedin],
    })}</script>`,
  ].join('\n    ');
  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  const file = r.path === '/' ? 'index.html' : r.path === '/404' ? '404.html' : `${r.path.slice(1)}/index.html`;
  fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  fs.writeFileSync(path.join(out, file), page);
  console.log('página gerada:', file);
}

const urls = routes.map((r) => `  <url><loc>${site.dominio}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n');
fs.writeFileSync(path.join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
