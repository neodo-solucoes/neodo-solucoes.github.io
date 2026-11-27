import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Bloco com foto de um lado e texto com lista do outro.
export default function Feature({ image, title, text, checks }) {
  return (
    <Reveal className="card destaque-bloco">
      <div className="destaque-bloco__img-wrap">
        <img className="destaque-bloco__img" src={image.src} alt={image.alt} loading="lazy" />
      </div>
      <div className="destaque-bloco__texto">
        <h3>{title}</h3>
        <p>{text}</p>
        <ul className="checklist">
          {checks.map((c) => <li key={c}><Icon name="check" size={22} strokeWidth={2} />{c}</li>)}
        </ul>
      </div>
    </Reveal>
  );
}
