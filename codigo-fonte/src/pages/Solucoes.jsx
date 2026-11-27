import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Grid from '../components/Grid.jsx';
import PhotoCard from '../components/PhotoCard.jsx';
import IconCard from '../components/IconCard.jsx';
import Steps from '../components/Steps.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button from '../components/Button.jsx';
import { img } from '../config/imagens.js';
import { segmentos } from './_shared.js';
import { competencias, servicos } from './_servicos.js';

const exemplos = [
  [img.exPaineis, 'Painéis e automação', 'Painéis elétricos e sistemas de automação desenvolvidos sob medida, com organização, segurança e confiabilidade.'],
  [img.exMonitoramento, 'Monitoramento e dados', 'Coleta, visualização e análise de dados em tempo real, com indicadores e alertas para uma operação mais eficiente.'],
  [img.exConectados, 'Sistemas inteligentes conectados', 'Equipamentos e processos integrados via IoT, com monitoramento contínuo, análise e controle remoto.'],
];

export default function Solucoes() {
  return (
    <>
      <Hero image={img.heroSolucoes}
        title={<>Soluções integradas de engenharia e <span className="destaque">tecnologia.</span></>}
        text="Projetamos e conectamos elétrica, eletrônica, automação, software e inteligência artificial para resolver desafios reais.">
        <Button to="/contato">Solicitar proposta</Button>
        <Button to="/contato" variant="contorno">Falar com a NEODO</Button>
      </Hero>
      <Section id="competencias" title="Nossas competências" description="Áreas que se conectam para criar soluções completas, eficientes, seguras e inteligentes.">
        <Grid min={320} gap={18}>{competencias.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} servicos={servicos[title]} />)}</Grid>
      </Section>
      <Section id="segmentos" title="Soluções por segmento" description="Aplicamos tecnologia e engenharia em diferentes contextos, com soluções sob medida para cada necessidade.">
        <Grid>{segmentos.map((s, i) => <PhotoCard key={s.title} index={i} {...s} />)}</Grid>
      </Section>
      <Section id="entregas" title="O que entregamos" description="Um ciclo completo de soluções, do projeto ao suporte contínuo, com foco em resultado, confiabilidade e evolução do seu negócio.">
        <Steps items={[
          { icon: 'search', title: 'Projeto', text: 'Levantamento de requisitos, engenharia e definição da solução ideal.' },
          { icon: 'layers', title: 'Implementação', text: 'Instalação, configuração e comissionamento com alto padrão técnico.' },
          { icon: 'gear', title: 'Integração', text: 'Conexão entre sistemas, equipamentos e plataformas, com operação unificada.' },
          { icon: 'headset', title: 'Suporte', text: 'Acompanhamento, manutenção e evolução contínua da solução.' },
        ]} />
      </Section>
      <Section id="exemplos" title="Exemplos de aplicação" description="Como a tecnologia da NEODO gera eficiência, controle e inteligência na prática.">
        <Grid>{exemplos.map(([image, title, text], i) => <PhotoCard key={title} index={i} image={image} title={title} text={text} to="/contato" />)}</Grid>
      </Section>
      <CtaBand title={<>Conte com a <span className="destaque">NEODO</span> para transformar tecnologia em <span className="destaque">resultado.</span></>} />
    </>
  );
}
