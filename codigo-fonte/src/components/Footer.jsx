import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { site } from '../config/site.js';

const colunas = [
  { titulo: 'Soluções', links: ['Engenharia e conformidade', 'Eletrônica embarcada', 'Automação industrial', 'IoT e monitoramento', 'Software e integrações', 'Inteligência artificial'].map((t) => [t, '/solucoes']) },
  { titulo: 'Atuação', links: [['Indústria', '/industria'], ['Negócios', '/negocios'], ['Residencial', '/residencial']] },
  { titulo: 'Institucional', links: [['Sobre a NEODO', '/sobre'], ['Contato', '/contato']] },
];

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="container rodape__inner">
        <div className="rodape__colunas">
          <div className="rodape__marca">
            <Logo negativo />
            <p>Engenharia e tecnologia para conectar pessoas, equipamentos e dados, gerando eficiência, segurança e novos resultados.</p>
          </div>
          {colunas.map((c) => (
            <div className="rodape__col" key={c.titulo}>
              <h2>{c.titulo}</h2>
              <ul>{c.links.map(([t, to]) => <li key={t}><Link to={to}>{t}</Link></li>)}</ul>
            </div>
          ))}
          <div className="rodape__col rodape__col--contato">
            <h2>Fale conosco</h2>
            <ul>
              <li><a className="rodape__contato" href={`mailto:${site.email}`}><Icon name="mail" size={18} />{site.email}</a></li>
              <li><a className="rodape__contato" href={site.whatsapp}><Icon name="whatsapp" size={18} />{site.telefone}</a></li>
            </ul>
            <a className="rodape__social" href={site.linkedin} aria-label="NEODO no LinkedIn" target="_blank" rel="noopener">
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>
        <div className="rodape__base">
          <span>© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</span>
          <span>{site.razaoSocial} · CNPJ {site.cnpj}</span>
        </div>
      </div>
    </footer>
  );
}
