import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Coluna da empresa */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h1 className="logo">
                <img
                  src="https://ik.imagekit.io/al1usqugs/assets/Logo_marca.png?updatedAt=1757638774696"
                  alt="Logo Huneto Marcenaria"
                />
              </h1>{" "}
              <p className="footer-description">
                Transformando espaços com móveis sob medida, qualidade e design
                exclusivo para sua casa.
              </p>
              <div className="social-links">
                <a
                  href="https://facebook.com/#"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/#"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/5511965271417"
                  className="social-link"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Coluna de serviços */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="footer-subtitle">Serviços</h6>
              <ul className="footer-links">
                <li>
                  <a href="/galeria">Cozinhas</a>
                </li>
                <li>
                  <a href="/galeria">Dormitórios</a>
                </li>
                <li>
                  <a href="/galeria">Escritórios</a>
                </li>
                <li>
                  <a href="/galeria">Closets</a>
                </li>
                <li>
                  <a href="/galeria">Banheiros</a>
                </li>
              </ul>
            </div>

            {/* Coluna de links rápidos */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="footer-subtitle">Links Rápidos</h6>
              <ul className="footer-links">
                <li>
                  <a href="/home">Início</a>
                </li>
                <li>
                  <a href="/sobre">Sobre Nós</a>
                </li>
                <li>
                  <a href="/galeria">Galeria</a>
                </li>
                <li>
                  <a href="/contato">Contato</a>
                </li>
              </ul>
            </div>

            {/* Coluna de contato */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h6 className="footer-subtitle">Contato</h6>
              <div className="contact-info">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <span>
                    Rua Alexandre Magno N°32 - Jardim dos Reis
                    <br />
                    Franco da Rocha - São Paulo - SP 07845-090
                  </span>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <span>(11) 96527-1417</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <span>contato@moveisplanejados.com</span>
                </div>
                <div className="contact-item">
                  <FaClock />
                  <span>
                    Seg - Sex: 8h às 18h
                    <br />
                    Sáb: 8h às 14h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {new Date().getFullYear()} Móveis Planejados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <small className="developer-credit">
                Desenvolvido  <span className="heart"></span> por Henrique
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
