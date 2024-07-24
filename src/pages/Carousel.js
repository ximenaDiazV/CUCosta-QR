// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos CSS del carrusel
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 5vh;
  position: relative;
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
  z-index: 2;
  height: 1vh;
  margin-left: 10vw;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
  }

  ${(props) => props.left ? 'left: 10px;' : 'right: 10px;'}
`;

const CarouselComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % 5);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + 5) % 5);
  };

  return (
    <ImageCarousel>
      <Button onClick={prevSlide} $left="true"></Button>
      <Button onClick={nextSlide}></Button>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3500}
        stopOnHover
        selectedItem={slideIndex}
        onChange={(index) => setSlideIndex(index)}
      >
        <div>
          <Image src="/ceibaPentandra2.jpg" alt="Ceiba Pentandra" />
        </div>
        <div>
          <Image src="/DelonixRegia.jpg" alt="Delonix Regia" />
        </div>
        <div>
          <Image src="/FicusBenjamina2.jpg" alt="Ficus Benjamina" />
        </div>
        <div>
          <Image src="/TabebuiaRosea2.jpg" alt="Tabebuia Rosea" />
        </div>
        <div>
          <Image src="/PrunusDulcis(Almond)3.jpg" alt="Prunus Dulcis" />
        </div>
      </Carousel>
    </ImageCarousel>
  );
};

export default CarouselComponent;
