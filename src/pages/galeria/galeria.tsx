import React from 'react';
import './galeria.css';

const videos = [
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-09.mp4?updatedAt=1757638879257', title: 'Tour 360° pela Cozinha Planejada' },
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-07.mp4?updatedAt=1757638868642', title: 'Tour 360° pela Cozinha Planejada' },
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-02.mp4?updatedAt=1757638838482', title: 'Tour 360° pela Cozinha Planejada' },
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-08.mp4?updatedAt=1757638833729', title: 'Tour 360° pela Cozinha Planejada' },
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-05.mp4?updatedAt=1757638809459', title: 'Tour 360° pela Cozinha Planejada' },
  { src: 'https://ik.imagekit.io/al1usqugs/assets/videos/video-04.mp4?updatedAt=1757638792081', title: 'Tour 360° pela Cozinha Planejada' },
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