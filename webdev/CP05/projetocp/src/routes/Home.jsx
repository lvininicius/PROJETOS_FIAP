import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sushi from '../medias/sushi.png'
import logo from '../medias/0_1.png'
import pukemo from '../medias/sushipukemo.png'
import '../CSS/Home.css'; // Certifique-se de ter um arquivo CSS para estilizar o carrossel

function Home() {
  const settings = {
    dots: true, // Exibir pontos de navegação
    infinite: true, // Navegação infinita
    speed: 500, // Velocidade de transição
    slidesToShow: 1, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantidade de slides para rolar
  };

  return (
    <>
      <h1>Home</h1>
      <div className="slideshow-container">
        <Slider {...settings}>
          <div>
            <img src={sushi} alt="Imagem 1" />
          </div>
          <div>
            <img src={logo} alt="Imagem 2" />
          </div>
          <div>
            <img src={pukemo} alt="Imagem 3" />
          </div>
          {/* Adicione mais imagens conforme necessário */}
        </Slider>
      </div>
    </>
  );
}

export default Home;
