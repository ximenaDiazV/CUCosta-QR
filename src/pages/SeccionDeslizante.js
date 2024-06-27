import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: relative;
  z-index: 0;               /* Asegura que el contenedor esté detrás del navbar */
  scrollbar-width: none;    /* Oculta el scrollbar en Firefox */
  &::-webkit-scrollbar {    /* Oculta el scrollbar en WebKit (Chrome, Safari, Edge) */
    display: none;
  }
  -ms-overflow-style: none; /* Oculta el scrollbar en Internet Explorer */
`;

const SectionContainer = styled.div`
  width: 100%;
  height: calc(100vh - 0vh); /* Ocupa toda la altura de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  text-align: center;
  scroll-snap-align: start;
  z-index: -1;              /* Asegura que las secciones estén detrás del navbar */
`;


const Title = styled.h2`
  color: #fff;
  font-size: 3rem;
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) => props.boxShadow}; 
`;

const Description = styled.p`
  color: #111111;
  font-size: 1.5rem;
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) => props.boxShadow}; 
`;

const bounceUp = keyframes`
  0%, 10%, 100% {
    transform: translateY(0);     /* Posición inicial y final */
  }
  60% {
    transform: translateY(20px);  /* Punto más alto del rebote */
  }
`;

const ScrollButtonUp = styled.button`
  background-color: #ffffff;
  border: none;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  bottom: 100px;
  animation: ${bounceUp} 2s infinite; /* Animación de rebote */

  .arrow-icon {
    border-radius: 50%;
    width: 45px;
    height: 50px;
  }
`;

const bounceDown = keyframes`
  0%, 10%, 100% {
    transform: translateY(0);     /* Posición inicial y final */
  }
  60% {
    transform: translateY(20px);  /* Punto más alto del rebote */
  }
`;

const ScrollButtonDown = styled.button`
  background-color: #ffffff;
  border: none;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  animation: ${bounceDown} 2s infinite; /* Animación de rebote */

  .arrow-icon {
    border-radius: 50%;
    width: 45px;
    height: 50px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  max-width: 50%;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  text-align: center;
`;


const sections = [
  {
    title1: "Glosario botánico CUCosta",
    description1: "Descubre las plantas que son parte del centro universitario.",
    leftImage: "/plant1.jpg",
    imageSrc: "/plant2.jpg",
    bgColor: "#83C5BE",
  },
  {
    title2: "Inspírate",
    description2: "Explora la variedad de especies que te rodean.",
    leftImage: "/plant1.jpg",
    imageSrc: "/plant2.jpg",
    bgColor: "#5692B7",
  },
  {
    title3: "Comparte con otros",
    description3: "Conecta y comparte tus ideas con una comunidad global.",
    leftImage: "/plant1.jpg",
    imageSrc: "/plant2.jpg",
    bgColor: "#FFCAD7",
  },
];


const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) => props.boxShadow}; 
`;


const SeccionDeslizante = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;
      const currentIndex = sectionRefs.current.findIndex(
        (ref) => ref && ref.getBoundingClientRect().top >= 0
      );

      if (deltaY > 0 && currentIndex < sections.length - 1) {
        event.preventDefault();
        sectionRefs.current[currentIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (deltaY < 0 && currentIndex > 0) {
        event.preventDefault();
        sectionRefs.current[currentIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const scrollToTop = () => {
    sectionRefs.current[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container>
      {sections.map((section, index) => (
        <SectionContainer
          key={index}
          bgColor={section.bgColor}
          ref={(ref) => (sectionRefs.current[index] = ref)}
        >
          <ContentContainer flexDirection={index % 2 === 0 ? "row-reverse" : "row"}>
            <ImageContainer>
            <Image 
              src={section.leftImage} 
              alt="imagen1" 
              left={200} 
              top={165} 
              height={600} 
              borderRadius={20}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 1)"
            />
            <Image 
              src={section.imageSrc} 
              alt="imagen2" 
              left={500} 
              bottom={60} 
              height={500} 
              borderRadius={20}
              boxShadow="0px 0px 30px rgba(1, 0, 0, 1)"
            />
            </ImageContainer>
            <TextContainer>
              <Title
                left={1090} 
                top={400}
              >
                {section.title1}
              </Title>
              <Description
                left={1090} 
                bottom={300}
              >
                {section.description1}
              </Description>
              <Title
              
              >
                {section.title2}
              </Title>
              <Description>
                {section.description2}
              </Description>
              <Title
                left={1090} 
                top={400}
              >
                {section.title3}
              </Title>
              <Description
                left={1090} 
                bottom={300}
              >
                {section.description3}
              </Description>
              {index === 0 && (
                <ScrollButtonDown onClick={() => sectionRefs.current[1].scrollIntoView({ behavior: "smooth", block: "start" })}>
                  <FaArrowDown className="arrow-icon" color="#111111" size={5} />
                </ScrollButtonDown>
              )}
              {index === sections.length - 1 && (
                <ScrollButtonUp onClick={scrollToTop}>
                  <FaArrowUp className="arrow-icon" color="#111111" size={10} />
                </ScrollButtonUp>
              )}
            </TextContainer>
          </ContentContainer>
        </SectionContainer>
      ))}
    </Container>
  );
};

export default SeccionDeslizante;
