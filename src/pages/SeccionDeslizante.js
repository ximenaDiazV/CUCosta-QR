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
  bottom: 50px;
  left: 48%;
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
    title0: "Glosario botánico CUCosta",
    description0: "Descubre las plantas que son parte del centro universitario.",
    images: [
      { 
        src: "/plant1.jpg",
        top: 160, 
        left: 200, 
        height: 600, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/plant1.jpg",
        bottom: 60, 
        left: 500, 
        height: 500, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"  
      },
    ],
    title0Props: 
      { 
        left: 1090, 
        top: 400 
      },
    description0Props: 
      { 
        left: 1090, 
        bottom: 300 
      },
    bgColor: "#FFFFFF",
  },
  {
    title1: "Glosario botánico CUCosta",
    description1: "Descubre las plantas que son parte del centro universitario.",
    images: [
      { 
        src: "/TabebuiaRosea.jpg",
        top: 165, 
        left: 200, 
        height: 600, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/TabebuiaRosea2.jpg", 
        bottom: 60, 
        left: 500, 
        height: 500, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
    ],
    title1Props: 
      { 
        left: 1090, 
        top: 400 
      },
    description1Props: 
      { 
        left: 1090, 
        bottom: 300 
      },
    bgColor: "#83C5BE",
  },
  {
    title2: "Inspírate",
    description2: "Explora la variedad de especies que te rodean.",
    images: [
      { 
        src: "/DelonixRegia2.jpg",
        top: 200, 
        left: 150, 
        height: 600,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/DelonixRegia.jpg",
        bottom: 100, 
        left: 330, 
        height: 380,
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      {
        src: "/Plant1.jpg",
        top: 160,
        left: 330,
        height: 200,
        borderRadius: 20,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"
      },
    ],
    title2Props: 
      { 
        left: 1090, 
        top: 400 
      },
    description2Props: 
      { 
        left: 1090, 
        bottom: 300 
      },
    bgColor: "#90BCF6",
  },
  {
    title3: "Comparte con otros",
    description3: "Conecta y comparte tus ideas con una comunidad global.",
    images: [
      {
        src: "/PrunusDulcis(Almond)3.jpg",
        top: 160,
        left: 1200,
        height: 200,
        borderRadius: 20,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"
      },
      { 
        src: "/PrunusDulcis(Almond)2.jpg",
        top: 200, 
        left: 1400, 
        height: 550, 
        borderRadius: 20, 
        zIndex: 1,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/PrunusDulcis(Almond).jpg", 
        bottom: 60, 
        left: 1080, 
        height: 400,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
    ],
    title3Props: 
      { 
        left: 190, 
        top: 400 
      },
    description3Props: 
      { 
        left: 190, 
        bottom: 300 
      },
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
  z-index: ${(props) => props.zIndex};
  transition: transform 0.3s ease; /* Agregamos una transición */
  cursor: pointer;

  z-index: ${(props) => (props.zoomed ? 10 : 1)}; /* Z-index más alto si está ampliada */

  &:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
    z-index: 10; /* Asegura que la imagen ampliada esté en primer plano */
  }
`;

const FooterContainer = styled.div`
  background-color: #83C5BE; /* Color del botón de explorar */
  width: 1840px; /* Ancho en píxeles */
  height: 140px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
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
            {section.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image.src}
                  alt={`Imagen ${index}-${imgIndex}`}
                  {...image}
                />
              ))}
            </ImageContainer>
            <TextContainer>
              {section[`title${index}`] && (
                <>
                  <Title {...section[`title${index}Props`]}>
                    {section[`title${index}`]}
                  </Title>
                  <Description {...section[`description${index}Props`]}>
                    {section[`description${index}`]}
                  </Description>
                </>
              )}
              {index === 0 && (
                <FooterContainer>
                  <ScrollButtonDown
                    onClick={() =>
                      sectionRefs.current[1].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  >
                    <FaArrowDown className="arrow-icon" color="#111111" size={5} />
                  </ScrollButtonDown>
                </FooterContainer>
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
