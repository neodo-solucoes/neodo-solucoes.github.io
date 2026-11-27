import { Link } from 'react-router-dom';
import { logos } from '../config/imagens.js';

// Logo horizontal oficial (src/assets/logo). Troque o arquivo para mudar a logo no site inteiro.
export default function Logo({ negativo = false }) {
  return (
    <Link to="/" className="logo" aria-label="NEODO Soluções Inteligentes, página inicial">
      <img src={negativo ? logos.negativo : logos.normal} alt="NEODO Soluções Inteligentes" width="229" height="50" />
    </Link>
  );
}
