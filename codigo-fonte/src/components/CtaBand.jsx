import Wave from './Wave.jsx';
import Button from './Button.jsx';
import Reveal from './Reveal.jsx';

// Faixa azul de chamada no fim das páginas.
export default function CtaBand({ title, label = 'Solicitar proposta', to = '/contato', href, icon }) {
  return (
    <section className="cta" aria-label="Chamada para contato">
      <Reveal className="cta__caixa">
        <Wave />
        <div className="cta__conteudo">
          <h2>{title}</h2>
          <Button to={href ? undefined : to} href={href} icon={icon}>{label}</Button>
        </div>
      </Reveal>
    </section>
  );
}
