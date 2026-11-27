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

const solucoes = [
  [img.indAutomacao, 'arm', 'Automação industrial', 'Projetos completos de automação, controle e otimização de processos.'],
  [img.indRetrofit, 'gear', 'Retrofit de equipamentos', 'Modernização de máquinas e sistemas, com ganho de desempenho, segurança e vida útil.'],
  [img.indIot, 'radio', 'IoT e monitoramento', 'Conectividade de equipamentos, coleta de dados em tempo real e monitoramento contínuo da operação.'],
  [img.indVisao, 'scan', 'Visão computacional', 'Inspeção automática, controle de qualidade e rastreabilidade com IA e processamento de imagens.'],
  [img.indDashboards, 'bars', 'Dashboards e dados', 'Coleta, tratamento e visualização de dados operacionais (SCADA, IIoT e BI) para decisões mais rápidas.'],
  [img.indIntegracao, 'layers', 'Integração de sistemas', 'Conexão entre máquinas, sistemas de controle (SCADA, MES, ERP) e dados da operação, com fluxo de informações unificado.'],
];
const aplicacoes = [
  [img.indLinha, 'Linha de produção inteligente', 'Automação integrada, controle de processo e ajustes em tempo real, com mais produtividade e qualidade.'],
  [img.indAtivos, 'Monitoramento de ativos', 'Acompanhamento da condição de máquinas, com dados de desempenho, alarmes e manutenção preditiva.'],
  [img.indAnalise, 'Análise operacional em tempo real', 'Indicadores sobre produção, eficiência (OEE) e desempenho da planta, com visão completa da operação.'],
];
const valor = [
  ['chartup', 'Eficiência', 'Mais produtividade, menos paradas e melhor uso dos recursos.'],
  ['shield', 'Segurança', 'Operações mais seguras, conformes às normas e com maior confiabilidade.'],
  ['box', 'Rastreabilidade', 'Controle completo do processo, com registro e histórico de dados.'],
  ['brain', 'Inteligência operacional', 'Dados que viram informação, antecipam falhas e orientam decisões.'],
];

export default function Industria() {
  return (
    <>
      <Hero image={img.heroIndustria}
        title={<>Automação e tecnologia para a sua <span className="destaque">indústria.</span></>}
        text="Mais produtividade, mais controle e decisões orientadas por dados.">
        <Button to="/contato">Solicitar proposta</Button>
        <Button href="#solucoes" variant="contorno">Ver soluções industriais</Button>
      </Hero>
      <Section id="solucoes" title="Principais soluções" description="Tecnologia e engenharia para modernizar a sua planta, automatizar processos, conectar equipamentos e elevar a performance industrial.">
        <Grid>{solucoes.map(([image, icon, title, text], i) => <PhotoCard key={title} index={i} image={image} icon={icon} title={title} text={text} to="/contato" />)}</Grid>
      </Section>
      <Section id="aplicacoes" title="Aplicações" description="Soluções que geram resultado em diferentes contextos da indústria.">
        <Grid>{aplicacoes.map(([image, title, text], i) => <PhotoCard key={title} index={i} image={image} title={title} text={text} to="/contato" />)}</Grid>
      </Section>
      <Section id="valor" title="Como geramos valor" description="Tecnologia, dados e engenharia aplicados para tornar a sua indústria mais produtiva, segura e competitiva.">
        <Grid min={250} gap={18}>{valor.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} />)}</Grid>
      </Section>
      <Section id="fluxo" title="Fluxo de trabalho" description="Um processo estruturado, do diagnóstico à operação assistida, para garantir resultado, qualidade e continuidade.">
        <Steps items={[
          { icon: 'search', title: 'Diagnóstico', text: 'Análise da planta, processos e oportunidades.' },
          { icon: 'layers', title: 'Engenharia', text: 'Projeto da solução, com definição técnica, integrações e cronograma.' },
          { icon: 'gear', title: 'Implementação', text: 'Desenvolvimento, instalação, comissionamento e validação.' },
          { icon: 'headset', title: 'Suporte', text: 'Acompanhamento contínuo, manutenção e evolução da solução.' },
        ]} />
      </Section>
      <Section id="perguntas" title="Perguntas frequentes" description="Tire suas principais dúvidas sobre nossas soluções para a indústria.">
        <Faq items={[
          ['A NEODO atende projetos de automação em plantas já em operação?', 'Sim. Atuamos tanto em novas plantas quanto na modernização de linhas e equipamentos existentes, com soluções que minimizam paradas e respeitam as condições da sua operação.'],
          ['Quais tecnologias vocês utilizam nos projetos industriais?', 'A tecnologia é escolhida conforme o processo: controladores e instrumentação, hardware embarcado próprio, comunicação industrial e sem fio, plataformas de supervisão e software sob medida para dados e integração.'],
          ['É possível integrar a automação com meus sistemas (SCADA, MES ou ERP)?', 'Sim. A integração com os sistemas que a empresa já usa faz parte do projeto, para que os dados da operação cheguem a quem decide sem retrabalho.'],
          ['A NEODO oferece suporte após a implantação?', 'Sim. Acompanhamos a operação depois da entrega, com manutenção, ajustes e evolução da solução.'],
        ]} />
      </Section>
      <CtaBand title={<>Modernize a sua indústria<br />com a <span className="destaque">NEODO.</span></>} />
    </>
  );
}
