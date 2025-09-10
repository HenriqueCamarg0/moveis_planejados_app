import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';

// Imagens sala planejada
import salaplanejado01 from '../../assets/sala-planejado-01.jpg';
import salaplanejado02 from '../../assets/sala-planejado-02.jpg';
import salaplanejado03 from '../../assets/sala-planejado-03.jpg';
import salaplanejado04 from '../../assets/sala-planejado-04.jpg';
import salaplanejado05 from '../../assets/sala-planejado-05.jpg';

// Imagens Quarto planejada
import quartoplanejado01 from '../../assets/quarto-planejado-01.jpg';
import quartoplanejado02 from '../../assets/quarto-planejado-02.jpg';
import quartoplanejado03 from '../../assets/quarto-planejado-03.jpg';
import quartoplanejado04 from '../../assets/quarto-planejado-04.jpg';

// Imagens Escritório planejada
import escritorioplanejado01 from '../../assets/escritorio-planejado-01.jpg';
import escritorioplanejado02 from '../../assets/escritorio-planejado-02.jpg';
import escritorioplanejado03 from '../../assets/escritorio-planejado-03.jpg';
import escritorioplanejado04 from '../../assets/escritorio-planejado-04.jpg';

// Imagens Cozinha planejada
import cozinhaplanejado01 from '../../assets/cozinha-planejado-01.jpg';
import cozinhaplanejado02 from '../../assets/cozinha-planejado-02.jpg';
import cozinhaplanejado03 from '../../assets/cozinha-planejado-03.jpg';
import cozinhaplanejado04 from '../../assets/cozinha-planejado-04.jpg';
import cozinhaplanejado05 from '../../assets/cozinha-planejado-05.jpg';
import cozinhaplanejado06 from '../../assets/cozinha-planejado-06.jpg';

// Imagens Banheiro planejado
import banheiroplanejado01 from '../../assets/banheiro-planejado-01.jpg';
import banheiroplanejado02 from '../../assets/banheiro-planejado-02.jpg';

// Interface para tipagem das seções
interface CarouselSection {
  id: string;
  title: string;
  description: string;
  images: string[];
}

// Dados das seções organizados em um array
const carouselSections: CarouselSection[] = [
  {
    id: 'carouselCozinha',
    title: 'Cozinhas Planejadas',
    description: 'Transforme sua cozinha no coração da sua casa com soluções funcionais e elegantes',
    images: [cozinhaplanejado01, cozinhaplanejado02, cozinhaplanejado03, cozinhaplanejado04, cozinhaplanejado05, cozinhaplanejado06]
  },
  {
    id: 'carouselSala',
    title: 'Home Theater & Salas',
    description: 'Ambientes integrados para momentos únicos de entretenimento e convivência',
    images: [salaplanejado01, salaplanejado02, salaplanejado03, salaplanejado04, salaplanejado05]
  },
  {
    id: 'carouselQuarto',
    title: 'Dormitórios Planejados',
    description: 'Seu refúgio pessoal com máximo aproveitamento de espaço e conforto',
    images: [quartoplanejado01, quartoplanejado02, quartoplanejado03, quartoplanejado04]
  },
  {
    id: 'carouselEscritorio',
    title: 'Escritórios Planejados',
    description: 'Produtividade e organização em um ambiente profissional personalizado',
    images: [escritorioplanejado01, escritorioplanejado02, escritorioplanejado03, escritorioplanejado04]
  },
  {
    id: 'carouselBanheiro',
    title: 'Banheiros Planejados',
    description: 'Funcionalidade e design em cada detalhe do seu banheiro',
    images: [banheiroplanejado01, banheiroplanejado02]
  }
];

// Componente para renderizar indicadores do carousel
const CarouselIndicators: React.FC<{ id: string; imagesCount: number }> = ({ id, imagesCount }) => (
  <div className="carousel-indicators">
    {Array.from({ length: imagesCount }, (_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide-to={index}
        className={index === 0 ? 'active' : ''}
        aria-current={index === 0 ? 'true' : 'false'}
        aria-label={`Slide ${index + 1}`}
      />
    ))}
  </div>
);

// Componente para renderizar os controles do carousel
const CarouselControls: React.FC<{ id: string }> = ({ id }) => (
  <>
    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Próximo</span>
    </button>
  </>
);

// Componente principal do carousel
const ProjectCarousel: React.FC<{ section: CarouselSection }> = ({ section }) => {
  const { id, title, description, images } = section;

  return (
    <section className="carousel-section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <p className="section-description">{description}</p>
      </div>
      
      <div className="carousel-container">
        <div id={id} className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
          <CarouselIndicators id={id} imagesCount={images.length} />
          
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="image-container">
                  <img 
                    src={img} 
                    className="carousel-img" 
                    alt={`${title} - Projeto ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <span className="image-counter">{index + 1} / {images.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <CarouselControls id={id} />
        </div>
      </div>
    </section>
  );
};

// Componente principal da página Home
const Home: React.FC = () => {
  const handleQuoteRequest = () => {
    // Aqui você pode adicionar a lógica para solicitar orçamento
    // Por exemplo, abrir um modal, redirecionar para uma página, etc.
    console.log('Solicitação de orçamento iniciada');
    // Exemplo: window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <main className="home-section">
      <div className="container">
        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Bem-vindo à <span className="brand">Móveis Planejados</span>
            </h1>
            <p className="hero-subtitle">
              Sua casa, seu estilo. Nós planejamos o resto.
            </p>
            <p className="hero-description">
              Móveis sob medida que transformam ambientes em experiências únicas, 
              combinando funcionalidade, design e qualidade excepcional.
            </p>
          </div>
        </header>

        {/* Seções de Carousels */}
        <div className="projects-gallery">
          {carouselSections.map((section) => (
            <ProjectCarousel key={section.id} section={section} />
          ))}
        </div>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para transformar sua casa?</h2>
            <p className="cta-description">
              Entre em contato conosco e descubra como podemos criar o ambiente dos seus sonhos
            </p>
            <button 
              className="btn-orcamento"
              onClick={handleQuoteRequest}
              aria-label="Solicitar orçamento gratuito"
            >
              <span>Solicitar Orçamento Gratuito</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;