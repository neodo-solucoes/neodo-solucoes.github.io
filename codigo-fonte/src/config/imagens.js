// TODAS as imagens do site ficam em src/assets/img.
// Para trocar uma imagem: substitua o arquivo mantendo o mesmo nome,
// ou troque o nome do arquivo no import abaixo. O texto "alt" descreve a imagem
// para leitores de tela e para o Google.
import logo from '../assets/logo/logo.svg';
import logoNegativo from '../assets/logo/logo-negativo.svg';

import heroHome from '../assets/img/capa-home.jpg';
import heroSolucoes from '../assets/img/hero-solucoes.jpg';
import heroIndustria from '../assets/img/capa-industria.jpg';
import heroSobre from '../assets/img/capa-sobre.jpg';
import heroContato from '../assets/img/capa-contato.jpg';
import segIndustria from '../assets/img/card-industria.jpg';
import segResidencial from '../assets/img/seg-residencial.jpg';
import capaResidencial from '../assets/img/capa-residencial.jpg';
import segNegocios from '../assets/img/seg-negocios.jpg';
import capaNegocios from '../assets/img/capa-negocios.jpg';
import cardNegocios from '../assets/img/card-negocios.jpg';
import appMonitoramento from '../assets/img/app-monitoramento.jpg';
import appRetrofit from '../assets/img/app-retrofit.jpg';
import appDados from '../assets/img/app-dados.jpg';
import exPaineis from '../assets/img/ex-paineis.jpg';
import exMonitoramento from '../assets/img/ex-monitoramento.jpg';
import exConectados from '../assets/img/ex-conectados.jpg';
import indAutomacao from '../assets/img/ind-automacao.jpg';
import indRetrofit from '../assets/img/ind-retrofit.jpg';
import indIot from '../assets/img/ind-iot.jpg';
import indVisao from '../assets/img/ind-visao.jpg';
import indDashboards from '../assets/img/ind-dashboards.jpg';
import indIntegracao from '../assets/img/ind-integracao.jpg';
import indLinha from '../assets/img/ind-linha.jpg';
import indAtivos from '../assets/img/ind-ativos.jpg';
import indAnalise from '../assets/img/ind-analise.jpg';
import sobreBancada from '../assets/img/sobre-bancada.jpg';
import contatoNotebook from '../assets/img/contato-notebook.jpg';

export const logos = {
  normal: logo,          // usada no cabeçalho (fundo branco)
  negativo: logoNegativo, // usada no rodapé (fundo escuro)
};

export const img = {
  heroHome: { src: heroHome, alt: 'Braço robótico amarelo sobre esteira com peças metálicas, à frente de um globo digital e de ícones de nuvem, dados, gráficos, automação e IA', posicao: '100% center' },
  heroSolucoes: { src: heroSolucoes, alt: 'Painel elétrico aberto ao lado de monitor com indicadores industriais' },
  heroIndustria: { src: heroIndustria, alt: 'Linha de produção automatizada com braço robótico amarelo e câmera de inspeção sobre a esteira', posicao: '72% center' },
  heroSobre: { src: heroSobre, alt: 'Equipe de engenharia da NEODO analisando o modelo 3D de uma peça em monitor, dentro de uma fábrica', posicao: '80% center' },
  heroContato: { src: heroContato, alt: 'Consultor da NEODO mostrando uma proposta no tablet para um cliente', posicao: '85% center' },
  // A mesma foto é usada na capa da página e no card da área (posicao = parte da foto que aparece no recorte).
  heroResidencial: { src: capaResidencial, alt: 'Casa moderna iluminada ao anoitecer, com jardim e garagem com carregador de carro elétrico', posicao: '70% center' },
  heroNegocios: { src: capaNegocios, alt: 'Loja de tecnologia com atendente mostrando informações no computador para uma cliente no balcão', posicao: '88% center' },
  segIndustria: { src: segIndustria, alt: 'Braço robótico amarelo e câmera de inspeção em esteira com peças metálicas' },
  segResidencial: { src: capaResidencial, alt: 'Casa moderna iluminada ao anoitecer, com jardim e garagem com carregador de carro elétrico', posicao: '70% center' },
  featResidencial: { src: segResidencial, alt: 'Residência moderna iluminada ao anoitecer' },
  segNegocios: { src: cardNegocios, alt: 'Atendente de loja de tecnologia ajudando uma cliente no balcão' },
  featNegocios: { src: segNegocios, alt: 'Fachada de edifício comercial com escritórios iluminados' },
  appMonitoramento: { src: appMonitoramento, alt: 'Técnico acompanhando indicadores de produção em vários monitores' },
  appRetrofit: { src: appRetrofit, alt: 'Motor elétrico industrial em close' },
  appDados: { src: appDados, alt: 'Notebook exibindo painel de indicadores em ambiente industrial' },
  exPaineis: { src: exPaineis, alt: 'Painel elétrico organizado com tela de controle' },
  exMonitoramento: { src: exMonitoramento, alt: 'Técnico analisando dados em vários monitores' },
  exConectados: { src: exConectados, alt: 'Motor industrial com sensor sem fio acoplado' },
  indAutomacao: { src: indAutomacao, alt: 'Braço robótico amarelo em célula de produção' },
  indRetrofit: { src: indRetrofit, alt: 'Motor industrial azul acoplado a redutor' },
  indIot: { src: indIot, alt: 'Sensor sem fio instalado junto a uma esteira' },
  indVisao: { src: indVisao, alt: 'Câmera industrial inspecionando peças em esteira' },
  indDashboards: { src: indDashboards, alt: 'Monitores com painéis de indicadores de produção' },
  indIntegracao: { src: indIntegracao, alt: 'Painel elétrico com bornes e disjuntores organizados' },
  indLinha: { src: indLinha, alt: 'Esteira de produção com câmera de inspeção' },
  indAtivos: { src: indAtivos, alt: 'Motor elétrico com sensor de monitoramento' },
  indAnalise: { src: indAnalise, alt: 'Técnico acompanhando indicadores de eficiência em monitor' },
  sobreBancada: { src: sobreBancada, alt: 'Bancada de eletrônica com osciloscópio, placa em desenvolvimento e notebook' },
  contatoNotebook: { src: contatoNotebook, alt: 'Notebook com painel de indicadores em ambiente industrial' },
};
