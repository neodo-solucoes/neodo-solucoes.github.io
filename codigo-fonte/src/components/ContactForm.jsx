import { useState } from 'react';
import Icon from './Icon.jsx';
import Button from './Button.jsx';
import { site } from '../config/site.js';

const AREAS = ['Indústria', 'Negócios', 'Residencial', 'Automação', 'Software', 'Inteligência artificial'];
const VAZIO = { nome: '', empresa: '', email: '', telefone: '', area: '', demanda: '' };

// Formulário de contato. Envia para o e-mail configurado em src/config/site.js (serviço FormSubmit).
export default function ContactForm() {
  const [dados, setDados] = useState(VAZIO);
  const [status, setStatus] = useState({ tipo: '', msg: '' });
  const [enviando, setEnviando] = useState(false);
  const muda = (e) => setDados({ ...dados, [e.target.name]: e.target.value });

  const textoMensagem = () =>
    `Nome: ${dados.nome}\nEmpresa: ${dados.empresa}\nE-mail: ${dados.email}\nTelefone: ${dados.telefone}\nÁrea: ${dados.area}\n\n${dados.demanda}`;

  async function enviar(e) {
    e.preventDefault();
    const faltando = Object.keys(VAZIO).find((k) => !dados[k].trim());
    if (faltando) {
      setStatus({ tipo: 'erro', msg: 'Preencha todos os campos obrigatórios.' });
      document.getElementById(`f-${faltando}`)?.focus();
      return;
    }
    setEnviando(true);
    setStatus({ tipo: '', msg: 'Enviando...' });
    try {
      const r = await fetch(site.formulario, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nova solicitação pelo site - ${dados.area}`, _template: 'table', _captcha: 'false', _replyto: dados.email,
          Nome: dados.nome, Empresa: dados.empresa, 'E-mail': dados.email, Telefone: dados.telefone,
          'Área de interesse': dados.area, Demanda: dados.demanda,
        }),
      });
      const j = await r.json();
      if (!(j.success === true || j.success === 'true')) throw new Error('falha');
      setDados(VAZIO);
      setStatus({ tipo: 'ok', msg: 'Solicitação enviada. A NEODO entra em contato em breve.' });
    } catch {
      setStatus({ tipo: 'erro', msg: 'falha' });
    } finally {
      setEnviando(false);
    }
  }

  const campo = (name, label, el) => (
    <div className="form__campo">
      <label htmlFor={`f-${name}`}>{label} <span aria-hidden="true">*</span></label>
      {el}
    </div>
  );
  const input = (name, type, placeholder, autoComplete) => (
    <input id={`f-${name}`} name={name} type={type} placeholder={placeholder} autoComplete={autoComplete}
      required value={dados[name]} onChange={muda} />
  );

  return (
    <form id="formulario" className="card form" aria-labelledby="form-titulo" noValidate onSubmit={enviar}>
      <div className="barra" />
      <h2 id="form-titulo">Envie sua solicitação</h2>
      <p className="form__intro">Preencha o formulário e a NEODO entra em contato em breve.</p>
      <div className="form__grade">
        {campo('nome', 'Nome', input('nome', 'text', 'Seu nome completo', 'name'))}
        {campo('empresa', 'Empresa', input('empresa', 'text', 'Nome da sua empresa', 'organization'))}
        {campo('email', 'E-mail', input('email', 'email', 'seu@email.com', 'email'))}
        {campo('telefone', 'Telefone', input('telefone', 'tel', '(00) 00000-0000', 'tel'))}
      </div>
      {campo('area', 'Área de interesse', (
        <select id="f-area" name="area" required value={dados.area} onChange={muda}>
          <option value="">Selecione uma opção</option>
          {AREAS.map((a) => <option key={a}>{a}</option>)}
        </select>
      ))}
      {campo('demanda', 'Descreva sua demanda', (
        <textarea id="f-demanda" name="demanda" rows={4} maxLength={1000} required value={dados.demanda} onChange={muda}
          placeholder="Conte o que sua empresa precisa, os desafios, objetivos ou algum detalhe do projeto." />
      ))}
      <p className="form__contador" aria-live="polite">{dados.demanda.length.toLocaleString('pt-BR')}/1.000</p>
      <Button type="submit" icon="send" arrow={false} disabled={enviando}>Enviar solicitação</Button>
      <p role="status" className={`form__status ${status.tipo ? `form__status--${status.tipo}` : ''}`}>
        {status.msg === 'falha' ? (
          <>Não foi possível enviar agora. <a href={`${site.whatsapp}?text=${encodeURIComponent(textoMensagem())}`}>Envie pelo WhatsApp</a> ou{' '}
            <a href={`mailto:${site.email}?subject=${encodeURIComponent('Solicitação pelo site')}&body=${encodeURIComponent(textoMensagem())}`}>por e-mail</a>.</>
        ) : status.msg}
      </p>
    </form>
  );
}
