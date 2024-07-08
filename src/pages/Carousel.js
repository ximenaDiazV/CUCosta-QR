// Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos CSS del carrusel

const ImageCarousel = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3vh;
  position: relative;
`;

const Image = styled.img`
  max-width: 20%;
  height: auto;
  border-radius: 20px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.5rem;
  z-index: 2;
  height: 1vh;
  margin-left: 10vw;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  ${(props) => props.left ? 'left: 10px;' : 'right: 10px;'}
`;

const CarouselComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % 3);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + 3) % 3);
  };

  return (
    <ImageCarousel>
      <Button onClick={prevSlide} left></Button>
      <Button onClick={nextSlide}></Button>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        stopOnHover
        selectedItem={slideIndex}
        onChange={(index) => setSlideIndex(index)}
      >
        <div>
          <Image src="/plant1.jpg" alt="Imagen 1" />
        </div>
        <div>
          <Image src="/DelonixRegia2.jpg" alt="Imagen 2" />
        </div>
        <div>
          <Image src="/FicusBenjamina.jpg" alt="Imagen 3" />
        </div>
        <div>
          <Image src="/plant2.jpg" alt="Imagen 4" />
        </div>
        <div>
          <Image src="/PrunusDulcis(Almond)2.jpg" alt="Imagen 5" />
        </div>
      </Carousel>
    </ImageCarousel>
  );
};

export default CarouselComponent;
