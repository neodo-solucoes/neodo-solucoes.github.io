import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Grid from '../components/Grid.jsx';
import IconCard from '../components/IconCard.jsx';
import Steps from '../components/Steps.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { img } from '../config/imagens.js';
import { site } from '../config/site.js';

const areas = [
  ['factory', 'Indústria', 'Automação, monitoramento e digitalização de processos.', '/industria'],
  ['briefcase', 'Negócios', 'Infraestrutura, tecnologia e sistemas inteligentes para escritórios, comércios e serviços.', '/negocios'],
  ['home', 'Residencial', 'Soluções elétricas, automação e conectividade para mais conforto.', '/residencial'],
  ['arm', 'Automação', 'Controle, supervisão e integração de processos e equipamentos.', '/solucoes'],
  ['code', 'Software', 'Sistemas sob medida e integração com equipamentos e dados.', '/solucoes'],
  ['brain', 'IA', 'Análise de dados, previsões e otimização para operações mais inteligentes.', '/solucoes'],
];

export default function Contato() {
  return (
    <>
      <Hero image={img.heroContato}
        title={<>Vamos conversar sobre sua <span className="destaque">demanda.</span></>}
        text="Conte o que sua empresa precisa e a NEODO ajuda a transformar em solução.">
        <Button href={site.whatsapp} icon="whatsapp" arrow={false}>Falar pelo WhatsApp</Button>
      </Hero>

      <Section id="canais" title="Canais de atendimento" description="Escolha o canal ideal para falar com a NEODO. Entendemos sua necessidade e indicamos a melhor solução.">
        <Grid min={300} gap={18}>
          <IconCard index={0} icon="whatsapp" title="WhatsApp" text={`Atendimento rápido e direto pelo ${site.telefone}.`} href={site.whatsapp} />
          <IconCard index={1} icon="mail" title="E-mail" text={`Envie sua demanda com os detalhes do projeto para ${site.email}.`} href={`mailto:${site.email}`} />
          <IconCard index={2} icon="calendar" title="Reunião técnica" text="Converse com a engenharia da NEODO e aprofunde os requisitos da sua solução."
            href={`mailto:${site.email}?subject=${encodeURIComponent('Agendar reunião técnica')}`} />
        </Grid>
      </Section>

      <section className="secao" aria-label="Formulário de contato">
        <div className="container contato-duplo">
          <ContactForm />
          <Reveal as="aside" delay={0.1} className="card porque" aria-labelledby="porque-titulo">
            <div className="porque__img-wrap"><img src={img.contatoNotebook.src} alt={img.contatoNotebook.alt} loading="lazy" /></div>
            <div className="porque__corpo">
              <div className="barra" />
              <h2 id="porque-titulo">Por que falar com a <span className="destaque">NEODO</span>?</h2>
              <p>Mais do que tecnologia, entregamos soluções de engenharia conectadas ao seu negócio, com foco em eficiência, segurança e resultado.</p>
              <ul className="checklist">
                <li><Icon name="check" size={22} strokeWidth={2} /><span><strong>Atendimento técnico</strong> com engenharia desde o primeiro contato.</span></li>
                <li><Icon name="check" size={22} strokeWidth={2} /><span><strong>Análise técnica</strong> da sua necessidade.</span></li>
                <li><Icon name="check" size={22} strokeWidth={2} /><span><strong>Proposta personalizada,</strong> alinhada aos seus objetivos.</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="areas" title="Áreas de interesse" description="Selecione no formulário o tema relacionado à sua demanda. Outros detalhes podem ir no campo de descrição.">
        <Grid min={300} gap={18}>{areas.map(([icon, title, text, to], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} to={to} />)}</Grid>
      </Section>

      <Section id="atendimento" title="Como funciona o atendimento" description="Um processo simples e ágil, com foco em entender sua necessidade para propor a melhor solução.">
        <Steps items={[
          { icon: 'message', title: 'Resposta inicial', text: 'Confirmamos o recebimento da sua demanda e alinhamos os próximos passos.' },
          { icon: 'gear', title: 'Avaliação técnica', text: 'Analisamos o cenário, os requisitos e os objetivos da sua solução.' },
          { icon: 'file', title: 'Proposta', text: 'Apresentamos a solução recomendada, com escopo, prazos e próximos passos.' },
        ]} />
      </Section>

      <CtaBand title={<>Pronto para dar o próximo passo?<br />Solicite uma proposta com a <span className="destaque">NEODO.</span></>} href="#formulario" />
    </>
  );
}
