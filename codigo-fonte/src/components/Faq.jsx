import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

// Perguntas frequentes. items: [[pergunta, resposta]]. A primeira começa aberta.
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <Reveal key={q} delay={i * 0.06}>
          <details className="card faq__item" open={i === 0}>
            <summary>{q}<Icon name="plus" size={20} strokeWidth={2} /></summary>
            <p>{a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
