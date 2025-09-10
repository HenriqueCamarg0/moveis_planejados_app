import React from 'react';
import './galeria.css';

// Importando vídeos locais
import video01 from '../../assets/videos/video-01.mp4';
import video02 from '../../assets/videos/video-02.mp4';
import video03 from '../../assets/videos/video-03.mp4';
import video04 from '../../assets/videos/video-04.mp4';
import video05 from '../../assets/videos/video-05.mp4';
import video06 from '../../assets/videos/video-06.mp4';
import video07 from '../../assets/videos/video-07.mp4';
import video08 from '../../assets/videos/video-08.mp4';
import video09 from '../../assets/videos/video-09.mp4';
import video10 from '../../assets/videos/video-10.mp4';

const videos = [
  { src: video01, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video02, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video03, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video04, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video05, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video06, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video07, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video08, title: 'Tour 360° pela Cozinha Planejada' },
  { src: video09, title: 'Sala de Estar Planejada' },
  { src: video10, title: 'Sala de Estar Planejada' },
];

const GaleriaVideos: React.FC = () => {
  return (
    <section className="video-gallery container py-5">
      <h2 className="text-center mb-4">🎥 Tour</h2>
      <p className="text-center mb-5">
        Explore nossos projetos, conheça nossa fábrica e veja como transformamos ideias em ambientes reais.
      </p>

      <div className="row g-4">
        {videos.map((video, index) => (
          <div className="col-md-6" key={index}>
            <video className="video-frame" controls>
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
            <h5 className="mt-2 text-center">{video.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GaleriaVideos;