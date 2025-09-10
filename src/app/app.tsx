import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/app.css';

// Components
import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';

//pages
import Home from '../pages/home/home.tsx';
import Sobre from '../pages/sobre/sobre.tsx';
import Contato from '../pages/contato/contato.tsx';
import Galeria from '../pages/galeria/galeria.tsx';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <Header />
      
      <main className="main-content container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  </Router>
);

export default App;