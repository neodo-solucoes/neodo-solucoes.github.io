import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Grid from '../components/Grid.jsx';
import IconCard from '../components/IconCard.jsx';
import Feature from '../components/Feature.jsx';
import Steps from '../components/Steps.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button from '../components/Button.jsx';
import { img } from '../config/imagens.js';
import { site } from '../config/site.js';

const solucoes = [
  ['code', 'Software sob demanda', 'Sistemas web e aplicativos feitos para o processo da sua empresa, não o contrário.'],
  ['brain', 'Agentes de IA para atendimento', 'Assistentes que respondem clientes no WhatsApp e no site, a qualquer hora, e passam para a equipe quando precisa.'],
  ['refresh', 'Integrações e automação', 'Conexão entre sistemas, planilhas e plataformas, eliminando digitação repetida e retrabalho.'],
  ['layers', 'Sites e presença digital', 'Sites rápidos e profissionais, prontos para aparecer nas buscas e gerar contatos.'],
  ['shield', 'Câmeras e segurança', 'Monitoramento por câmeras e sensores, com acesso remoto e alertas.'],
  ['zap', 'Infraestrutura elétrica', 'Instalações e adequações elétricas para escritórios, lojas e salas comerciais.'],
];

export default function Negocios() {
  return (
    <>
      <Hero image={img.heroNegocios}
        title={<>Tecnologia sob medida para o seu <span className="destaque">negócio.</span></>}
        text="Software, integrações, inteligência artificial e infraestrutura para escritórios, comércios e serviços.">
        <Button href={site.whatsapp} icon="whatsapp" arrow={false}>Falar pelo WhatsApp</Button>
        <Button href="#solucoes" variant="contorno">Ver soluções</Button>
      </Hero>
      <Section id="solucoes" title="Soluções para negócios" description="Tecnologia que reduz trabalho manual, melhora o atendimento e organiza a operação.">
        <Grid min={320} gap={18}>{solucoes.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} />)}</Grid>
      </Section>
      <Section id="ganhos" title="Mais tempo para o que importa" description="Automatizar o que é repetitivo libera a equipe para atender melhor e vender mais.">
        <Feature image={img.featNegocios} title="Do atendimento à gestão, sem retrabalho"
          text="A NEODO entende como a empresa funciona hoje e desenvolve a tecnologia que encaixa nessa rotina."
          checks={['Atendimento automático no WhatsApp e no site', 'Dados de vendas e operação reunidos num só lugar', 'Sistemas que conversam entre si']} />
      </Section>
      <Section id="como-trabalhamos" title="Como trabalhamos" description="Um processo direto, com escopo e prazos claros desde o início.">
        <Steps items={[
          { icon: 'search', title: 'Diagnóstico', text: 'Entendemos o negócio, os processos e onde a tecnologia ajuda.' },
          { icon: 'file', title: 'Proposta', text: 'Apresentamos a solução com escopo, prazo e investimento.' },
          { icon: 'code', title: 'Desenvolvimento', text: 'Construímos, testamos e colocamos em operação.' },
          { icon: 'headset', title: 'Suporte', text: 'Acompanhamos, ajustamos e evoluímos a solução.' },
        ]} />
      </Section>
      <Section id="perguntas" title="Perguntas frequentes" description="Dúvidas comuns sobre soluções para empresas.">
        <Faq items={[
          ['Quanto custa um projeto?', 'Depende do escopo. Depois de entender a demanda, enviamos uma proposta com escopo, prazo e investimento.'],
          ['Vocês atendem pequenas empresas?', 'Sim. Atendemos desde negócios pequenos até empresas maiores, com soluções do tamanho da necessidade.'],
          ['O agente de IA pode atender pelo WhatsApp?', 'Sim. O agente pode atender no WhatsApp e no site, responder dúvidas frequentes e encaminhar para a equipe quando necessário.'],
          ['Dá para integrar com os sistemas que já uso?', 'Na maioria dos casos, sim. Avaliamos as formas de integração que cada sistema oferece e indicamos o melhor caminho.'],
        ]} />
      </Section>
      <CtaBand title={<>Coloque a tecnologia para<br />trabalhar pelo seu <span className="destaque">negócio.</span></>} label="Falar pelo WhatsApp" href={site.whatsapp} />
    </>
  );
}
