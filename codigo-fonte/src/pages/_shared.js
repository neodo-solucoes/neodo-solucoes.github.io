import { img } from '../config/imagens.js';

// Conteúdo reaproveitado em mais de uma página.
export const segmentos = [
  { image: img.segIndustria, title: 'Indústria', text: 'Automação, modernização e digitalização de processos produtivos.', icon: 'factory', to: '/industria' },
  { image: img.segNegocios, title: 'Negócios', text: 'Infraestrutura, automação e sistemas inteligentes para escritórios, comércios e serviços.', icon: 'briefcase', to: '/negocios' },
  { image: img.segResidencial, title: 'Residencial', text: 'Soluções elétricas, automação e conectividade para mais conforto, segurança e eficiência.', icon: 'home', to: '/residencial' },
];
