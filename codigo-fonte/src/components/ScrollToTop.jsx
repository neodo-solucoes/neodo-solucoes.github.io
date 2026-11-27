import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes, site } from '../config/site.js';

// Ao trocar de página: volta ao topo (ou vai até a âncora) e atualiza o título da aba.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const r = routes.find((x) => x.path === pathname.replace(/\/$/, '') || (x.path === '/' && pathname === '/'));
    document.title = r ? (r.path === '/' ? r.title : `${r.title} | ${site.nome}`) : `Página não encontrada | ${site.nome}`;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
