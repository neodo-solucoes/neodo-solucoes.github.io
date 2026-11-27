import Hero from '../components/Hero.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <Hero title={<>Página não <span className="destaque">encontrada.</span></>} text="O endereço que você acessou não existe ou foi movido.">
      <Button to="/">Ir para o início</Button>
    </Hero>
  );
}
