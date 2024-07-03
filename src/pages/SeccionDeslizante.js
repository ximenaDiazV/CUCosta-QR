// ---------------  PAGINA PRINCIPAL - SECCIONES.
import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// ---------------  CONTENEDORES.
//CONTENEDOR PRINCIPAL.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ sectionCount }) => sectionCount * 100}vh;
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

//CONTENEDOR DE LAS SECCIONES.
const SectionContainer = styled.div`
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  text-align: center;
  scroll-snap-align: start;
  z-index: -1;              /* Asegura que las secciones estén detrás del navbar */
`;

//CONTENEDOR PARA EL CONTENIDO DE CADA SECCION.
const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

//CONTENEDOR PARA EL TEXTO.
const TextContainer = styled.div`
  max-width: 50%;

  @media (max-width: 1000px) {
      margin: 1rem 0;
  }
`;

//CONTENEDOR PARA LAS IMAGENES.
const ImageContainer = styled.div`
  max-width: 100%;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1000px) {
      margin: 1rem 0;
  }
`;

//CONTENEDOR DEL FOOTER.
const FooterContainer = styled.div`
  background-color: #83C5BE; /* Color del botón de explorar */
  width: 140vw;
  height: 15vh;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 1000px) {
      margin: 1rem 0;
  }
`;

// ---------------  PARTES DE CADA SECCION.
// TITULO POR SECCION- GENERAL.
const Title = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem; 
  position: absolute;
  top: ${(props) => props.top}vh;
  bottom: ${(props) => props.bottom}vh;
  margin-right:  ${(props) => props.marginRight}vw; 
  margin-left:  ${(props) => props.marginLeft}vw; 
  left: ${(props) => props.left}vw;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) => props.boxShadow}; 

  line-height: 1.2; /* Ajuste de altura de línea */
  letter-spacing: 0.02em; /* Ajuste de espacio entre letras */

   @media (max-width: 768px) {
    font-size: calc(${(props) => props.fontSize}rem * 0.8);
  }

  @media (max-width: 1200px) {
    font-size: 1.125rem; /* Ajuste para pantallas medianas */
  }

  /* Prefijos para navegadores */
  -webkit-font-smoothing: antialiased; /* Mejora la legibilidad del texto en WebKit (Chrome, Safari) */
  -moz-osx-font-smoothing: grayscale; /* Mejora la legibilidad del texto en Firefox */

  @supports (-ms-ime-align: auto) {
    /* Estilos específicos para Edge */
    top: 1100px;
  }
  `;

//DESCRIPCION POR SECCION- GENERAL.
const Description = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  margin-right:  ${(props) => props.marginRight}vw;
  position: absolute;
  top: ${(props) => props.top}vh;
  bottom: ${(props) => props.bottom}vh;
  left: ${(props) => props.left}vw;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
  border-radius: ${(props) => props.borderRadius}px;
  box-shadow: ${(props) => props.boxShadow}; 
  text-align: ${(props) => (props.width ? "center" : "left")};

  line-height: 1.5; /* Ajuste de altura de línea */
  letter-spacing: 0.01em; /* Ajuste de espacio entre letras */

  @media (max-width: 768px) {
    font-size: calc(${(props) => props.fontSize}rem * 0.8); 
  }

  @media (max-width: 1200px) {
    font-size: 2.125rem; /* Ajuste para pantallas medianas */
  }

  /* Prefijos para navegadores */
  -webkit-font-smoothing: antialiased; /* Mejora la legibilidad del texto en WebKit (Chrome, Safari) */
  -moz-osx-font-smoothing: grayscale; /* Mejora la legibilidad del texto en Firefox */

  @supports (-ms-ime-align: auto) {
    /* Estilos específicos para Edge */
    /* Ejemplo: */
    font-size: 1.5rem; /* Ejemplo de ajuste específico para Edge */
  }
  `;

//IMAGENES POR SECCION- GENERAL.
const Image = styled.img`
  position: absolute;
  top: ${(props) => props.top}vh;
  bottom: ${(props) => props.bottom}vh;
  left: ${(props) => props.left}vw;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
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

  @media (max-width: 768px) {
    top: ${(props) => props.top * 1.5}vh;
    left: ${(props) => props.left * 1.5}vw;
    right: ${(props) => props.right * 1.5}vw;
    width: ${(props) => props.width * 1.5}vw;
    height: ${(props) => props.height * 1.5}vh;
    bottom: ${(props) => props.bottom * 1.5}vh;
  }
`;

// ---------------  ANIMACION PARA LOS BOTONES DE DESPLAZAMIENTO EN LAS SECCIONES.
// ANIMACION BOTON - HACIA ARRIBA.
const bounceUp = keyframes`
  0%, 10%, 100% {
    transform: translateY(0);     /* Posición inicial y final */
  }
  60% {
    transform: translateY(20px);  /* Punto más alto del rebote */
  }
`;

//ANIMACION BOTON - HACIA ABAJO.
const bounceDown = keyframes`
  0%, 10%, 100% {
    transform: translateY(0);     /* Posición inicial y final */
  }
  60% {
    transform: translateY(20px);  /* Punto más alto del rebote */
  }
`;

// ---------------  DISEÑO PARA BOTONES DE DESPLAZAMIENTO.
//BOTON SUBIR - SECCION FINAL.
const ScrollButtonUp = styled.button`
  background-color: #ffffff;
  border: none;
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  display: flex; /* Para centrar el contenido dentro del div */
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  bottom: 70px;
  animation: ${bounceUp} 2s infinite; /* Animación de rebote */

  .arrow-icon {
    border-radius: 50%;
    width: 2.5vw;
    height: 5.5vh;
  }

`;

//BOTON BAJAR - SECCION CON FOOTER.
const ScrollButtonDown = styled.button`
  background-color: #ffffff;
  border: none;
  position: absolute;
  bottom: 5vh;
  left: 48%;
  transform: translateX(-50%);
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  display: flex; /* Para centrar el contenido dentro del div */
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  animation: ${bounceDown} 2s infinite; /* Animación de rebote */

  .arrow-icon {
    border-radius: 50%;
    width: 2.5vw;
    height: 5.6vh;
  }
`;

// ---------------  DISEÑO DE CADA SECCION.
const sections = [
  { 
    //SECCION PRINCIPAL - 0
    title0: "Glosario botánico CUCosta",
    description0: "Descubre más sobre las plantas que son parte del centro universitario.",
    images: [
      { 
        src: "/CeibaPentandra.jpg",
        top: 18, 
        left: 11, 
        height: 56, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/CeibaPentandra2.jpg",
        bottom: 22, 
        left: 26, 
        height: 33, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"  
      },
    ],
    title0Props: 
      { 
        left: 57.2, 
        top: 20,
        fontSize: 3.8,
        marginLeft: -3,
        width: 40,
        color: "#0B5351",
      },
    description0Props: 
      { 
        left: 56.9, 
        bottom: 34,
        fontSize: 1.9, 
        marginRight: 8,
        color: "#0B5351",
        width: 35,
      },
    bgColor: "#FFFFFF",
  },
  { //SECCION - 1
    title1: "Busca y nutréte.",
    description1: "¿Quieres un dato interesante para abrir conversación?, nombra esa planta que encuentras fuera de tu aula y veamos que aprendes.",
    images: [
      { 
        src: "/TabebuiaRosea.jpg",
        top: 10, 
        left: 74.5, 
        height: 62, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/TabebuiaRosea2.jpg", 
        top: 8, 
        left: 50, 
        height: 30, 
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      {
        src: "/Plant1.jpg",
        bottom: -2,
        left: 56,
        height: 60,
        borderRadius: 20,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"
      },
    ],
    title1Props: 
      { 
        left: 12.4, 
        top: 30,
        fontSize: 3.8,
        marginRight: 10,
        color: "#006D77",
      },
    description1Props: 
      { 
        left: 5, 
        bottom: 25,
        fontSize: 1.7, 
        marginRight: 53,
        color: "#006D77",
        width: 47,
      },
    bgColor: "#83C5BE",
  },
  { //SECCION - 2
    title2: "¡Inspírate!",
    description2: "Explora la variedad de especies que te rodean.",
    images: [
      { 
        src: "/DelonixRegia2.jpg",
        top: 7, 
        left: 15, 
        height: 60,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/DelonixRegia.jpg",
        top: 15, 
        left: 40, 
        height: 25,
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/FicusBenjamina.jpg",
        bottom: 8, 
        left: 37, 
        height: 50,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/FicusBenjamina2.jpg",
        bottom: 2, 
        left: 10, 
        height: 28.5,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
    ],
    title2Props: 
      { 
        left: 64.7, 
        top: 31.5,
        fontSize: 4.78,
        color: "#223D61",

      },
    description2Props: 
      { 
        left: 65.79, 
        bottom: 27.5,
        fontSize: 1.7,
        color: "#223D61",
        width: 24,
      },
    bgColor: "#90BCF6",
  },
  { //SECCION - 3
    title3: "Conoce y comparte.",
    description3: "Este glosario no solo informa sobre las plantas del campus, sino que también te invita a conocerlas y compartir tu conocimiento.",
    images: [
      {
        src: "/PrunusDulcis(Almond)3.jpg",
        top: 18,
        left: 72,
        height: 28,
        borderRadius: 20,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)"
      },
      { 
        src: "/PrunusDulcis(Almond)2.jpg",
        bottom: -10, 
        left: 60, 
        height: 60, 
        borderRadius: 20, 
        zIndex: 1,
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/PrunusDulcis(Almond).jpg", 
        top: 6, 
        left: 50, 
        height: 40,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
      { 
        src: "/PrunusDulcis(Almond)4.jpg", 
        bottom: 12.5, 
        left: 82.3, 
        height: 40,  
        borderRadius: 20, 
        boxShadow: "0px 0px 30px rgba(1, 0, 0, 1)" 
      },
    ],
    title3Props: 
      { 
        left: 7, 
        top: 37,
        fontSize: 3.7,
        color: "#C24361" 
      },
    description3Props: 
      { 
        left: 5.6, 
        bottom: 21,
        color: "#C24361",
        fontSize: 1.5,
        width: 40,
      },
    bgColor: "#FFCAD7",
  },
];


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
      }  else {
        event.preventDefault();
        if (deltaY > 0 && currentIndex === sections.length - 1) {
          // Si estamos en la última sección y se intenta desplazar hacia abajo, no hacemos nada
          return;
        }
        if (deltaY < 0 && currentIndex === 0) {
          // Si estamos en la primera sección y se intenta desplazar hacia arriba, no hacemos nada
          return;
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  },  []);

  const scrollToTop = () => {
    sectionRefs.current[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <Container>
      {sections.map((section, index) => (
        <SectionContainer
          key={index}
          flexDirection={section.flexDirection}
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
                  top={image.top}
                  bottom={image.bottom}
                  left={image.left}
                  width={image.width}
                  height={image.height}
                  borderRadius={image.borderRadius}
                  boxShadow={image.boxShadow}
                  zoomed={image.zoomed}
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
            </TextContainer>
          </ContentContainer>
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
        </SectionContainer>
      ))}
      {sections.length > 0 && (
        <ScrollButtonUp onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" color="#111111" size={10} />
        </ScrollButtonUp>
      )}
    </Container>
  );
};

export default SeccionDeslizante;
