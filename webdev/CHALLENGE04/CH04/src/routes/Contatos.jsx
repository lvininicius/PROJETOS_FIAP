// Contatos.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../SCSS/Contatos.scss';
import Riqueto from '../assets/Riqueto2.jpeg';
import Oliveria from '../assets/oliveira.png';
import Lucas from '../assets/lucas.png';

const Contatos = () => {
  const participants = [
    { id: 1, name: 'Gabriel Riqueto', image: Riqueto },
    { id: 2, name: 'Gabiriel Oliveria', image: Oliveria },
    { id: 3, name: 'Lucas Vinicius', image: Lucas },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="contatos-container">
      <Slider {...settings}>
        {participants.map(participant => (
          <div key={participant.id} className="carousel-item">
            <img src={participant.image} alt={participant.name} />
            <p>{participant.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Contatos;
