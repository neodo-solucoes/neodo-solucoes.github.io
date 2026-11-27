import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Grid from '../components/Grid.jsx';
import PhotoCard from '../components/PhotoCard.jsx';
import IconCard from '../components/IconCard.jsx';
import Steps from '../components/Steps.jsx';
import Faq from '../components/Faq.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { img } from '../config/imagens.js';
import { segmentos } from './_shared.js';

const diferenciais = [
  ['network', 'Visão integrada', 'Atuação multidisciplinar, da infraestrutura ao software e à inteligência artificial.'],
  ['sliders', 'Solução sob medida', 'Projetos personalizados, alinhados aos objetivos e à realidade de cada cliente.'],
  ['cpu', 'Tecnologia atual', 'Uso de tecnologias consolidadas e emergentes, com foco em confiabilidade e escalabilidade.'],
  ['chartup', 'Foco em resultado', 'Soluções que aumentam a eficiência, a segurança, a produtividade e o valor do negócio.'],
];

export default function Sobre() {
  return (
    <>
      <Hero image={img.heroSobre}
        title={<>Engenharia e tecnologia para <span className="destaque">resolver problemas reais.</span></>}
        text="A NEODO integra competências de elétrica, eletrônica, automação, software e inteligência artificial em uma abordagem única.">
        <Button to="/solucoes">Conheça nossas soluções</Button>
        <Button to="/contato" variant="contorno">Entrar em contato</Button>
      </Hero>
      <Section id="quem-somos" title="Quem somos">
        <Reveal className="quem">
          <p className="quem__lead">A NEODO Soluções Inteligentes é uma empresa de engenharia e tecnologia focada em transformar desafios complexos em soluções concretas.</p>
          <div className="quem__texto">
            <p>Atuamos de forma integrada em elétrica, eletrônica, automação, software e inteligência artificial, combinando conhecimento técnico, experiência prática e inovação para aumentar a eficiência, a segurança e a inteligência de operações, infraestruturas e ambientes.</p>
            <p>Mais do que entregar projetos, construímos parcerias de longo prazo, com foco em gerar valor real, confiabilidade e evolução contínua para nossos clientes.</p>
          </div>
          <div className="quem__img-wrap"><img className="quem__img" src={img.sobreBancada.src} alt={img.sobreBancada.alt} loading="lazy" /></div>
        </Reveal>
      </Section>
      <Section id="abordagem" title="Nossa abordagem" description="Um processo completo e colaborativo, da compreensão do desafio à evolução da solução.">
        <Steps items={[
          { icon: 'search', title: 'Diagnóstico', text: 'Entendimento profundo do contexto, dos requisitos e dos desafios do cliente.' },
          { icon: 'layers', title: 'Projeto', text: 'Desenvolvimento da solução técnica, com arquitetura, tecnologias e viabilidade.' },
          { icon: 'gear', title: 'Execução', text: 'Implantação com qualidade, integração e testes rigorosos.' },
          { icon: 'refresh', title: 'Evolução contínua', text: 'Acompanhamento, otimização e expansão conforme novas necessidades.' },
        ]} />
      </Section>
      <Section id="diferenciais" title="Diferenciais" description="O que nos torna um parceiro estratégico em engenharia e tecnologia.">
        <Grid min={250} gap={18}>{diferenciais.map(([icon, title, text], i) => <IconCard key={title} index={i} icon={icon} title={title} text={text} />)}</Grid>
      </Section>
      <Section id="areas" title="Áreas de atuação" description="Soluções de engenharia e tecnologia que geram eficiência, segurança e valor em diferentes contextos.">
        <Grid>{segmentos.map((s, i) => <PhotoCard key={s.title} index={i} {...s} />)}</Grid>
      </Section>
      <Section id="perguntas" title="Perguntas frequentes" description="Tire suas principais dúvidas sobre a NEODO, nossa atuação e forma de trabalho.">
        <Faq items={[
          ['O que a NEODO faz?', 'Desenvolvemos soluções de engenharia e tecnologia que unem elétrica, eletrônica, automação, software e inteligência artificial, do diagnóstico ao suporte depois da entrega.'],
          ['Em quais setores a NEODO atua?', 'Indústria, negócios, como escritórios, comércios e serviços, e residências.'],
          ['A NEODO desenvolve soluções personalizadas?', 'Sim. Cada solução é projetada a partir do problema e dos objetivos do cliente.'],
          ['Como funciona o processo de um projeto?', 'Diagnóstico, projeto, execução e evolução contínua. Escopo e prazos são definidos com o cliente antes do início da execução.'],
          ['A NEODO oferece suporte após a implantação?', 'Sim. Acompanhamos a solução, fazemos a manutenção e a evoluímos conforme novas necessidades.'],
        ]} />
      </Section>
      <CtaBand title={<>Traga seu desafio.<br />A <span className="destaque">NEODO</span> transforma em solução.</>} label="Entrar em contato" />
    </>
  );
}
