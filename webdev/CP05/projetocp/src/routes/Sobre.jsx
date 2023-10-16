import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lucas from '../medias/lucas.png'
import riqueto from '../medias/riqueto.png'
import oliveira from '../medias/oliveira.png'
import '../CSS/Home.css'; // Certifique-se de ter um arquivo CSS para estilizar o carrossel

function Sobre() {
  const settings = {
    dots: true, // Exibir pontos de navegação
    infinite: true, // Navegação infinita
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantidade de slides para rolar
  };

  return (
    <>
      <h1>Sobr</h1>
      <div className="slideshow-container">
        <Slider {...settings}>
          <div>
            <img src={lucas} alt="Imagem 1" />
          </div>
          <div>
            <img src={riqueto} alt="Imagem 2" />
          </div>
          <div>
            <img src={oliveira} alt="Imagem 3" />
          </div>
          {/* Adicione mais imagens conforme necessário */}
        </Slider>
      </div>
    </>
  );
}

export default Sobre;
