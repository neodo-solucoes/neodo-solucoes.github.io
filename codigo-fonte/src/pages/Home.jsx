import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Grid from '../components/Grid.jsx';
import PhotoCard from '../components/PhotoCard.jsx';
import IconCard from '../components/IconCard.jsx';
import Steps from '../components/Steps.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button from '../components/Button.jsx';
import { img } from '../config/imagens.js';
import { segmentos } from './_shared.js';

const competencias = [
  ['zap', 'Engenharia elétrica', 'Projetos, instalações e sistemas elétricos com segurança, conformidade e eficiência.'],
  ['cpu', 'Eletrônica embarcada', 'Desenvolvimento de hardware e firmware para controle e aquisição de dados.'],
  ['arm', 'Automação industrial', 'Controle, supervisão e otimização de processos e equipamentos.'],
  ['radio', 'IoT e monitoramento', 'Conectividade de equipamentos, sensores e ambientes em tempo real.'],
  ['code', 'Software e integrações', 'Sistemas sob medida e integração entre equipamentos, dados e plataformas.'],
  ['brain', 'Inteligência artificial', 'Análise de dados, previsões e otimização para operações mais inteligentes.'],
];
const aplicacoes = [
  [img.appMonitoramento, 'Monitoramento de produção', 'Acompanhamento em tempo real de máquinas, processos e indicadores críticos.'],
  [img.appRetrofit, 'Retrofit de equipamentos', 'Modernização de máquinas e sistemas, ampliando desempenho, segurança e vida útil.'],
  [img.appDados, 'Operação inteligente de dados', 'Coleta, análise e uso de dados para decisões mais rápidas, eficientes e assertivas.'],
];

export default function Home() {
  return (
    <>
      <Hero image={img.heroHome}
        title={<>Engenharia que conecta o mundo <span className="destaque">físico ao digital.</span></>}
        text="Elétrica, eletrônica, automação, software e inteligência artificial para transformar operações, equipamentos e negócios.">
        <Button to="/solucoes">Conheça nossas soluções</Button>
        <Button to="/contato" variant="contorno">Falar com a NEODO</Button>
      </Hero>

      <Section id="onde-atuamos" title="Onde atuamos" description="Soluções de engenharia e tecnologia que geram eficiência, segurança e valor em diferentes contextos.">
        <Grid>{segmentos.map((s, i) => <PhotoCard key={s.title} index={i} {...s} />)}</Grid>
      </Section>

      <Section id="competencias" title="Competências" description="Um portfólio completo de tecnologias e engenharia para criar soluções integradas, seguras e escaláveis.">
        <Grid min={320} gap={18}>{competencias.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} to="/solucoes" />)}</Grid>
      </Section>

      <Section id="aplicacoes" title="Aplicações" description="Tecnologia na prática, aplicada à operação, à modernização de equipamentos e ao uso inteligente de dados.">
        <Grid>{aplicacoes.map(([image, title, text], i) => <PhotoCard key={title} index={i} image={image} title={title} text={text} to="/solucoes" />)}</Grid>
      </Section>

      <Section id="como-trabalhamos" title="Como trabalhamos" description="Um processo estruturado, do entendimento da demanda ao suporte contínuo, com foco em resultado para o seu negócio.">
        <Steps items={[
          { icon: 'search', title: 'Diagnóstico', text: 'Entendemos sua demanda, processos e objetivos.' },
          { icon: 'layers', title: 'Projeto', text: 'Desenhamos a melhor solução técnica e tecnológica.' },
          { icon: 'gear', title: 'Execução', text: 'Implementamos com qualidade, segurança e controle.' },
          { icon: 'headset', title: 'Suporte', text: 'Acompanhamos, mantemos e evoluímos a solução.' },
        ]} />
      </Section>

      <Section id="perguntas" title="Perguntas frequentes" description="Tire suas principais dúvidas sobre as soluções, projetos e serviços da NEODO.">
        <Faq items={[
          ['A NEODO atua apenas em projetos industriais?', 'Não. Atendemos indústria, negócios, como escritórios, comércios e serviços, e ambientes residenciais, com soluções de engenharia, automação, software e inteligência artificial adaptadas a cada necessidade.'],
          ['Vocês desenvolvem soluções personalizadas?', 'Sim. Cada projeto começa pelo entendimento do problema e é desenhado para a realidade do cliente, em vez de adaptar a operação a um produto pronto.'],
          ['Como é o processo de implementação de um projeto?', 'Começamos com um diagnóstico, definimos o projeto com escopo e prazos, executamos a implantação com testes e acompanhamos a operação depois da entrega.'],
          ['A NEODO também oferece suporte e manutenção?', 'Sim. Depois da implantação, acompanhamos a solução, fazemos a manutenção e evoluímos o sistema conforme surgem novas necessidades.'],
        ]} />
      </Section>

      <CtaBand title={<>Traga sua demanda.<br />A <span className="destaque">NEODO</span> transforma em solução.</>} />
    </>
  );
}
