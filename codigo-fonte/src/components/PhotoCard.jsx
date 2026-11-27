import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Card com foto. image: { src, alt } de src/config/imagens.js.
export default function PhotoCard({ image, title, text, icon, to, index = 0 }) {
  const corpo = (
    <>
      <div className="card-foto__img-wrap">
        <img className="card-foto__img" src={image.src} alt={image.alt} loading="lazy" />
      </div>
      <div className="card-foto__corpo">
        {icon && <Icon name={icon} size={30} className="card__icone" />}
        <div className="card-icone__corpo">
          <div className="card__linha">
            <h3 className="card__titulo">{title}</h3>
            <Icon name="arrow" size={18} strokeWidth={2} className="card__seta" />
          </div>
          <p className="card__texto">{text}</p>
        </div>
      </div>
    </>
  );
  return (
    <Reveal delay={(index % 3) * 0.1} style={{ display: 'flex' }}>
      {to ? <Link to={to} className="card card-foto" style={{ flex: 1 }}>{corpo}</Link>
        : <div className="card card-foto card--interativo" style={{ flex: 1 }}>{corpo}</div>}
    </Reveal>
  );
}
