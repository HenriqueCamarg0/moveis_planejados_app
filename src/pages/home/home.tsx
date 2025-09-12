import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./home.css";

// --- Tipagem ---
interface CarouselSection {
  id: string;
  title: string;
  description: string;
  images: string[];
}

// --- Dados ---
const carouselSections: CarouselSection[] = [
  {
    id: "carouselCozinha",
    title: "Cozinhas Planejadas",
    description: "Transforme sua cozinha no coração da sua casa com soluções funcionais e elegantes",
    images: [
      "https://ik.imagekit.io/al1usqugs/assets/cozinha-planejado-02.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/cozinha-planejado-06.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/cozinha-planejado-03.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/cozinha-planejado-05.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/cozinha-planejado-01.jpg",
    ],
  },
  {
    id: "carouselSala",
    title: "Home Theater & Salas",
    description: "Ambientes integrados para momentos únicos de entretenimento e convivência",
    images: [
      "https://ik.imagekit.io/al1usqugs/assets/sala-planejado-05.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/sala-planejado-04.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/sala-planejado-02.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/sala-planejado-03.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/sala-planejado-01.jpg",
    ],
  },
  {
    id: "carouselQuarto",
    title: "Dormitórios Planejados",
    description: "Seu refúgio pessoal com máximo aproveitamento de espaço e conforto",
    images: [
      "https://ik.imagekit.io/al1usqugs/assets/quarto-planejado-04.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/quarto-planejado-01.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/quarto-planejado-02.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/quarto-planejado-03.jpg",
    ],
  },
  {
    id: "carouselEscritorio",
    title: "Escritórios Planejados",
    description: "Produtividade e organização em um ambiente profissional personalizado",
    images: [
      "https://ik.imagekit.io/al1usqugs/assets/escritorio-planejado-03.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/escritorio-planejado-04.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/escritorio-planejado-02.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/escritorio-planejado-01.jpg",
    ],
  },
  {
    id: "carouselBanheiro",
    title: "Banheiros Planejados",
    description: "Funcionalidade e design em cada detalhe do seu banheiro",
    images: [
      "https://ik.imagekit.io/al1usqugs/assets/banheiro-planejado-02.jpg",
      "https://ik.imagekit.io/al1usqugs/assets/banheiro-planejado-01.jpg",
    ],
  },
];

// --- Componentes Carousel ---
const CarouselIndicators: React.FC<{ id: string; imagesCount: number }> = ({ id, imagesCount }) => (
  <div className="carousel-indicators">
    {Array.from({ length: imagesCount }).map((_, i) => (
      <button
        key={i}
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide-to={i}
        className={i === 0 ? "active" : ""}
        aria-current={i === 0 ? "true" : undefined}
        aria-label={`Slide ${i + 1}`}
      />
    ))}
  </div>
);

const CarouselControls: React.FC<{ id: string }> = ({ id }) => (
  <>
    <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Próximo</span>
    </button>
  </>
);

const ProjectCarousel: React.FC<{ section: CarouselSection }> = ({ section }) => {
  const { id, title, description, images } = section;

  return (
    <section className="carousel-section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <p className="section-description">{description}</p>
      </div>

      <div className="carousel-container">
        <div id={id} className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={4000}>
          <CarouselIndicators id={id} imagesCount={images.length} />

          <div className="carousel-inner">
            {images.map((img, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <div className="image-container">
                  <img src={img} className="carousel-img" alt={`${title} - Projeto ${i + 1}`} loading="lazy" />
                  <div className="image-overlay">
                    <span className="image-counter">
                      {i + 1} / {images.length}
                    </span>
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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleQuoteRequest = () => {
    setIsLoading(true);
    setTimeout(() => navigate("/contato"), 1000);
  };

  return (
    <main className="home-section">
      <div className="container">
        {/* Hero */}
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Bem-vindo à <span className="brand">Huneto Marcenaria</span>
            </h1>
            <p className="hero-subtitle">Sua casa, seu estilo. Nós planejamos o resto.</p>
            <p className="hero-description">
              Móveis sob medida que transformam ambientes em experiências únicas, 
              combinando funcionalidade, design e qualidade excepcional.
            </p>
          </div>
        </header>

        {/* Carousels */}
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
            <button className="btn-orcamento" onClick={handleQuoteRequest} aria-label="Solicitar orçamento gratuito">
              <span>Solicitar Orçamento Gratuito</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
