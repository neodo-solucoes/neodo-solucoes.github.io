// Dados da empresa usados em todo o site. Altere aqui e o site inteiro muda.
export const site = {
  nome: 'NEODO Soluções Inteligentes',
  razaoSocial: 'NEODO ENGENHARIA LTDA',
  cnpj: '65.317.269/0001-41',
  dominio: 'https://neodo.com.br',
  descricao: 'Elétrica, eletrônica, automação, software e inteligência artificial para indústria, residências e negócios.',
  email: 'atendimentoneodo@gmail.com',
  telefone: '(85) 98705-3309',
  telefoneIntl: '+55-85-98705-3309',
  whatsapp: 'https://wa.me/5585987053309',
  linkedin: 'https://www.linkedin.com/company/neodo-solucoes-inteligentes',
  // Endereço que recebe o formulário de contato (serviço FormSubmit).
  formulario: 'https://formsubmit.co/ajax/atendimentoneodo@gmail.com',
};

// Menu principal.
export const menu = [
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Indústria', to: '/industria' },
  { label: 'Negócios', to: '/negocios' },
  { label: 'Residencial', to: '/residencial' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

// Título e descrição de cada página (aparecem no Google e na aba do navegador).
export const routes = [
  { path: '/', title: 'NEODO Soluções Inteligentes | Engenharia, automação e tecnologia', description: site.descricao },
  { path: '/solucoes', title: 'Soluções', description: 'Engenharia e conformidade, eletrônica embarcada, automação industrial e IoT, software e IA, e automação para negócios e residências.' },
  { path: '/industria', title: 'Indústria', description: 'Automação industrial, retrofit, IoT, visão computacional, dashboards e integração de sistemas para a sua indústria.' },
  { path: '/negocios', title: 'Negócios', description: 'Software sob demanda, agentes de IA para atendimento, integrações, sites e infraestrutura para empresas.' },
  { path: '/residencial', title: 'Residencial', description: 'Instalações elétricas, automação residencial, controle por voz, câmeras e segurança para a sua casa.' },
  { path: '/sobre', title: 'Sobre', description: 'Conheça a NEODO: engenharia e tecnologia integradas para resolver problemas reais.' },
  { path: '/contato', title: 'Contato', description: 'Fale com a NEODO pelo WhatsApp, e-mail ou formulário e solicite uma proposta.' },
];
