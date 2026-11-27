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
  ['zap', 'Instalações elétricas', 'Projeto, instalação e adequação de circuitos e quadros elétricos, com segurança e conformidade às normas.'],
  ['home', 'Automação residencial', 'Iluminação, cortinas, portões e equipamentos acionados por horário, sensores ou aplicativo.'],
  ['message', 'Controle por voz', 'Comandos por assistente de voz para luzes, climatização e cenas do dia a dia.'],
  ['shield', 'Câmeras e segurança', 'Câmeras, sensores e alertas no celular para acompanhar a casa de onde estiver.'],
  ['radio', 'Conectividade', 'Rede estável e dispositivos integrados em todos os ambientes da casa.'],
  ['sliders', 'Projeto sob medida', 'Soluções desenhadas para a planta e a rotina da família, em obra nova ou reforma.'],
];

export default function Residencial() {
  return (
    <>
      <Hero image={img.heroResidencial}
        title={<>Tecnologia e conforto para a sua <span className="destaque">casa.</span></>}
        text="Instalações elétricas, automação, segurança e controle por voz, projetados para a sua rotina.">
        <Button href={site.whatsapp} icon="whatsapp" arrow={false}>Falar pelo WhatsApp</Button>
        <Button href="#solucoes" variant="contorno">Ver soluções</Button>
      </Hero>
      <Section id="solucoes" title="Soluções residenciais" description="Da instalação elétrica à casa conectada, com segurança e acabamento profissional.">
        <Grid min={320} gap={18}>{solucoes.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} />)}</Grid>
      </Section>
      <Section id="obra" title="Para obra nova ou reforma" description="Planejar a parte elétrica e a automação junto com a obra evita retrabalho e custos extras.">
        <Feature image={img.featResidencial} title="Uma casa pensada para o seu jeito de viver"
          text="A NEODO avalia o imóvel, entende a rotina dos moradores e propõe só o que faz sentido para a casa."
          checks={['Instalação elétrica segura e bem dimensionada', 'Automação que funciona com ou sem internet, conforme o projeto', 'Controle pelo celular e por voz']} />
      </Section>
      <Section id="como-funciona" title="Como funciona" description="Um processo simples, do primeiro contato à casa funcionando.">
        <Steps items={[
          { icon: 'search', title: 'Visita técnica', text: 'Conhecemos o imóvel, a rotina e o que você quer resolver.' },
          { icon: 'layers', title: 'Projeto', text: 'Definimos a solução, os equipamentos e o orçamento.' },
          { icon: 'gear', title: 'Instalação', text: 'Executamos com cuidado, testes e organização.' },
          { icon: 'headset', title: 'Suporte', text: 'Ensinamos a usar e acompanhamos depois da entrega.' },
        ]} />
      </Section>
      <Section id="perguntas" title="Perguntas frequentes" description="Dúvidas comuns sobre soluções para residências.">
        <Faq items={[
          ['É possível automatizar uma casa que já está pronta?', 'Sim. Existem soluções sem fio que dispensam quebra-quebra. Na visita técnica avaliamos o que é possível em cada ambiente.'],
          ['Preciso trocar toda a instalação elétrica?', 'Nem sempre. Avaliamos a instalação existente e indicamos só as adequações necessárias para segurança e para a automação.'],
          ['A automação funciona com assistentes de voz?', 'Sim. Integramos com os assistentes de voz mais usados, conforme os dispositivos escolhidos para o projeto.'],
          ['Vocês atendem apartamentos?', 'Sim. Atendemos casas e apartamentos, em obra nova ou reforma.'],
        ]} />
      </Section>
      <CtaBand title={<>Sua casa mais <span className="destaque">segura</span>,<br />confortável e conectada.</>} label="Falar pelo WhatsApp" href={site.whatsapp} />
    </>
  );
}
