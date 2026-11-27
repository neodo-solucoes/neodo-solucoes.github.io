import { Fragment } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Etapas de um processo. items: [{ icon, title, text }]
export default function Steps({ items }) {
  return (
    <ol className="etapas">
      {items.map((s, i) => (
        <Fragment key={s.title}>
          {i > 0 && <li className="etapa__seta" aria-hidden="true"><Icon name="arrow" size={22} strokeWidth={2} /></li>}
          <Reveal as="li" delay={i * 0.12} className="card etapa">
            <Icon name={s.icon} size={32} className="card__icone" />
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </Reveal>
        </Fragment>
      ))}
    </ol>
  );
}
