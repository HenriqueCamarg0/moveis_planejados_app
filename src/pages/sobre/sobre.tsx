import React from 'react';
import './sobre.css'; // Se quiser estilizar separadamente

const Sobre: React.FC = () => (
  <section className="sobre-section container py-5">
    <div className="text-center mb-4">
      <h2 className="sobre-titulo">Sobre Nós</h2>
      <p className="sobre-subtitulo">
        Transformando espaços com design inteligente e móveis sob medida.
      </p>
    </div>

    <div className="sobre-conteudo">
      <p>
        Na <strong>Móveis Planejados</strong>, acreditamos que cada ambiente tem o potencial de se tornar único. 
        Combinamos funcionalidade, estética e personalização para criar móveis que refletem o estilo de vida de cada cliente.
      </p>

      <p>
        Desde cozinhas gourmet até escritórios inteligentes, nossos projetos são pensados nos mínimos detalhes. 
        Utilizamos materiais de alta qualidade, tecnologia de ponta e uma equipe apaixonada por design e marcenaria.
      </p>

      <p>
        Mais do que móveis, entregamos experiências. Do primeiro contato à instalação final, cuidamos de tudo com precisão, carinho e compromisso.
      </p>

      <p className="sobre-frase-final">
        <em>Sua casa, seu estilo. Nós planejamos o resto.</em>
      </p>
    </div>
  </section>
);

export default Sobre;