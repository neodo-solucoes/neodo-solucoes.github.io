import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Button from './Button.jsx';
import { menu } from '../config/site.js';

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolado, setRolado] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setAberto(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${rolado ? 'header--rolado' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <button className="menu-btn" type="button" aria-label="Abrir menu" aria-expanded={aberto}
          aria-controls="menu" onClick={() => setAberto((v) => !v)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {aberto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="menu" aria-label="Principal" className={`nav ${aberto ? 'nav--aberto' : ''}`}>
          {menu.map((m) => (
            <NavLink key={m.to} to={m.to} className="nav__link">{m.label}</NavLink>
          ))}
        </nav>
        <Button to="/contato" className="header__cta">Solicitar proposta</Button>
      </div>
    </header>
  );
}
