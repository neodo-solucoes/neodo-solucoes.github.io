import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Card com ícone. to = página interna, href = link externo. Sem link, o card é estático.
export default function IconCard({ icon, title, text, to, href, index = 0 }) {
  const corpo = (
    <>
      <Icon name={icon} size={32} className="card__icone" />
      <div className="card-icone__corpo">
        <div className="card__linha">
          <h3 className="card__titulo">{title}</h3>
          {(to || href) && <Icon name="arrow" size={18} strokeWidth={2} className="card__seta" />}
        </div>
        <p className="card__texto">{text}</p>
      </div>
    </>
  );
  const cls = 'card card-icone';
  return (
    <Reveal delay={(index % 3) * 0.08}>
      {to ? <Link to={to} className={cls}>{corpo}</Link>
        : href ? <a href={href} className={cls}>{corpo}</a>
        : <div className={`${cls} card--interativo`}>{corpo}</div>}
    </Reveal>
  );
}
