// TODAS as imagens do site ficam em src/assets/img.
// Para trocar uma imagem: substitua o arquivo mantendo o mesmo nome,
// ou troque o nome do arquivo no import abaixo. O texto "alt" descreve a imagem
// para leitores de tela e para o Google.
import logo from '../assets/logo/logo.svg';
import logoNegativo from '../assets/logo/logo-negativo.svg';

import heroHome from '../assets/img/hero-home.jpg';
import heroSolucoes from '../assets/img/hero-solucoes.jpg';
import heroIndustria from '../assets/img/hero-industria.jpg';
import heroSobre from '../assets/img/hero-sobre.jpg';
import heroContato from '../assets/img/hero-contato.jpg';
import segIndustria from '../assets/img/seg-industria.jpg';
import segResidencial from '../assets/img/seg-residencial.jpg';
import segNegocios from '../assets/img/seg-negocios.jpg';
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
  heroHome: { src: heroHome, alt: 'Braço robótico em linha de produção com painel de supervisão' },
  heroSolucoes: { src: heroSolucoes, alt: 'Painel elétrico aberto ao lado de monitor com indicadores industriais' },
  heroIndustria: { src: heroIndustria, alt: 'Linha de produção automatizada com braços robóticos' },
  heroSobre: { src: heroSobre, alt: 'Engenheiros analisando um diagrama em monitor no laboratório' },
  heroContato: { src: heroContato, alt: 'Reunião de equipe diante de tela com projeto de automação' },
  heroResidencial: null, // sem foto: usa o fundo animado. Coloque { src, alt } para usar foto.
  heroNegocios: null,
  segIndustria: { src: segIndustria, alt: 'Instalação industrial com tubulações e estruturas metálicas' },
  segResidencial: { src: segResidencial, alt: 'Residência moderna iluminada ao anoitecer' },
  segNegocios: { src: segNegocios, alt: 'Fachada de edifício comercial com escritórios iluminados' },
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
