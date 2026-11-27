import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Solucoes from './pages/Solucoes.jsx';
import Industria from './pages/Industria.jsx';
import Residencial from './pages/Residencial.jsx';
import Negocios from './pages/Negocios.jsx';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';
import NotFound from './pages/NotFound.jsx';
import './styles/index.css';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/industria" element={<Industria />} />
          <Route path="/residencial" element={<Residencial />} />
          <Route path="/negocios" element={<Negocios />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
