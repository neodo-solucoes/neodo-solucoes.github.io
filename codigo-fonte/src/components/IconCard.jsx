import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import Button from './Button.jsx';

// Card com ícone. to = página interna, href = link externo. Sem link, o card é estático.
// servicos = lista de serviços: o card vira um botão que abre a lista numa janela.
export default function IconCard({ icon, title, text, to, href, servicos, index = 0 }) {
  const janela = useRef(null);
  const corpo = (
    <>
      <Icon name={icon} size={32} className="card__icone" />
      <div className="card-icone__corpo">
        <div className="card__linha">
          <h3 className="card__titulo">{title}</h3>
          {(to || href) && <Icon name="arrow" size={18} strokeWidth={2} className="card__seta" />}
        </div>
        <p className="card__texto">{text}</p>
        {servicos && <span className="card__ver">Ver serviços <Icon name="arrow" size={16} strokeWidth={2} className="card__seta" /></span>}
      </div>
    </>
  );
  const cls = 'card card-icone';
  if (servicos) {
    const abrir = () => janela.current?.showModal();
    const fechar = () => janela.current?.close();
    return (
      <Reveal delay={(index % 3) * 0.08}>
        <button type="button" className={`${cls} card--interativo card--botao`} onClick={abrir} aria-haspopup="dialog">{corpo}</button>
        <dialog ref={janela} className="servicos" aria-label={`Serviços de ${title}`}
          onClick={(e) => { if (e.target === e.currentTarget) fechar(); }}>
          <div className="servicos__caixa">
            <div className="servicos__topo">
              <Icon name={icon} size={30} className="card__icone" />
              <h3 className="servicos__titulo">{title}</h3>
              <button type="button" className="servicos__fechar" onClick={fechar} aria-label="Fechar">×</button>
            </div>
            <ul className="servicos__lista">
              {servicos.map((s) => <li key={s}><Icon name="check" size={18} strokeWidth={2.4} />{s}</li>)}
            </ul>
            <div className="servicos__acoes"><Button to="/contato">Solicitar proposta</Button></div>
          </div>
        </dialog>
      </Reveal>
    );
  }
  return (
    <Reveal delay={(index % 3) * 0.08}>
      {to ? <Link to={to} className={cls}>{corpo}</Link>
        : href ? <a href={href} className={cls}>{corpo}</a>
        : <div className={`${cls} card--interativo`}>{corpo}</div>}
    </Reveal>
  );
}
