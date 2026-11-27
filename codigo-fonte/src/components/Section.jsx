import Reveal from './Reveal.jsx';

// Seção com título, descrição ao lado e conteúdo abaixo.
export default function Section({ id, title, description, children }) {
  return (
    <section className="secao" aria-labelledby={`${id}-titulo`} id={id}>
      <div className="container">
        <Reveal className="secao__topo">
          <div>
            <div className="barra" />
            <h2 id={`${id}-titulo`} className="secao__titulo">{title}</h2>
          </div>
          {description && <p className="secao__descricao">{description}</p>}
        </Reveal>
        <div className="secao__corpo">{children}</div>
      </div>
    </section>
  );
}
