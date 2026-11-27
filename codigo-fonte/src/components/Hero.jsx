import Wave from './Wave.jsx';

// Topo de página. image: { src, alt } de src/config/imagens.js. Sem imagem, usa a onda animada.
export default function Hero({ image, lema, title, text, children }) {
  return (
    <section className="hero">
      {image ? (
        <>
          <img className="hero__img" src={image.src} alt={image.alt} fetchpriority="high" />
          <div className="hero__fade" aria-hidden="true" />
        </>
      ) : <Wave />}
      <div className="container hero__inner">
        <div className="hero__conteudo">
          <div className="hero__barra" />
          {lema && <p className="hero__lema">{lema}</p>}
          <h1>{title}</h1>
          <p className="hero__texto">{text}</p>
          {children && <div className="hero__botoes">{children}</div>}
        </div>
      </div>
    </section>
  );
}
