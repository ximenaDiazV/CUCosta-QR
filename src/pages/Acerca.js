// Acerca.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CarouselComponent from './Carousel';

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  max-height: 100%;
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

const MenuContainer = styled.div`
  width: 100%;
  background-color: #83C5BE;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
  position: sticky;
  margin-top: 17px;
  z-index: 100;
  transition: top 0.3s ease;
`;

//CONTENEDOR PARA LAS IMAGENES.
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 80vw; /* Ajusta el ancho máximo según sea necesario */
  margin-top: 5vh;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.$top}vh;
  bottom: ${(props) => props.bottom}vh;
  left: ${(props) => props.$left}vw;
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
  border-radius: ${(props) => props.$borderradius}px;
  box-shadow: ${(props) => props.boxShadow};
  z-index: ${(props) => props.zIndex};
  transform: rotate(${(props) => props.$rotation}deg);
  transition: transform 0.3s ease; /* Agregamos una transición */
  cursor: pointer;

  z-index: ${(props) => (props.zoomed ? 10 : 1)}; /* Z-index más alto si está ampliada */

  &:hover {
    transform: scale(1.1); /* Efecto de zoom al pasar el mouse */
    z-index: 10; /* Asegura que la imagen ampliada esté en primer plano */
  }

  @media (max-width: 768px) {
    top: ${(props) => props.$top * 1.5}vh;
    left: ${(props) => props.$left * 1.5}vw;
    right: ${(props) => props.right * 1.5}vw;
    width: ${(props) => props.width * 1.5}vw;
    height: ${(props) => props.height * 1.5}vh;
    bottom: ${(props) => props.bottom * 1.5}vh;
  }
`;

const Button = styled.button`
  color: ${(props) => (props.$active ? '#FFFFFF' : '#0B5351')};
  background-color: ${(props) => (props.$active ? '#0B5351' : 'transparent')};
  border: 2px solid ${(props) => (props.$active ? 'none' : '#0B5351')};
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: transparent;
    color: #ffffff;
    border: 2px solid #FFFFFF;
  }
`;

const Titulo = styled.h1`
  font-size: 3.7rem;
  margin-bottom: 6vh;
  margin-top: 20vh;
  color: #0B5351;
`;

// Componente Subtitulo
const SubtituloWrapper = styled.h1`
  font-size: ${(props) => props.fontSize || '2.5rem'};
  margin-bottom: ${(props) => props.$marginbottom || '5vh'};
  margin-top: ${(props) => props.$margintop || '10vh'};
  color: ${(props) => props.color || '#0B5351'};
  margin-right: ${(props) => props.$marginright || '47vw'};
`;

const SubTitulo = ({ children, ...props }) => {
  return <SubtituloWrapper {...props}>{children}</SubtituloWrapper>;
};

// Componente Descripcion
const DescripcionWrapper = styled.p`
  line-height: ${(props) => props.lineHeight || '1.5'};
  font-size: ${(props) => props.fontSize || '1.1rem'};
  margin-top: ${(props) => props.$margintop || '0'};
  color: ${(props) => props.color || '#0B5351'};
  text-align: ${(props) => props.textAlign || 'justify'};
  margin-right: ${(props) => props.$marginright || '35vw'};
  max-width: ${(props) => props.$maxwidth || '40vw'};
  padding: ${(props) => props.padding || '0 20px'};
`;

const Descripcion = ({ children, ...props }) => {
  return <DescripcionWrapper {...props}>{children}</DescripcionWrapper>;
};

const Descripcion2 = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
  margin-top: 0vh;
  color: #0B5351;
  text-align: justify;
  margin-right: 35vw;
  max-width: 40vw;
  padding: 0 20px;
`;

const Separador = styled.p`
  width: 100%;
  margin-top: ${(props) => props.$margintop || '1vh'};
  margin-bottom: ${(props) => props.$marginbottom || '1vh'};
  text-align: center;
  font-size: 4rem;
  color: #0B5351;
  font-weight: bold;
`;


const Acerca = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [menuFixed, setMenuFixed] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const menuTop = menuRef.current.offsetTop;

      if (scrollPosition >= menuTop) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0 } // Ajusta este valor según tus necesidades
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  // Función para manejar el clic en los botones del menú
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        $top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ContenedorPrincipal>
      <Titulo>CUCBotánico</Titulo>
      <MenuContainer ref={menuRef}
        style={{
          position: menuFixed ? 'fixed' : 'relative',
          top: menuFixed ? '80px' : 'auto',
          margintop: menuFixed ? '90px' : '10vh', 
        }}
      >
        <Button
          $active={activeSection === 'seccion1'}
          onClick={() => scrollToSection('seccion1')}
        >
          ¿Qué es?
        </Button>
        <Button
          $active={activeSection === 'seccion2'}
          onClick={() => scrollToSection('seccion2')}
        >
          Navega y explora
        </Button>
        <Button
          $active={activeSection === 'seccion3'}
          onClick={() => scrollToSection('seccion3')}
        >
          Encuentra con QR
        </Button>
        <Button
          $active={activeSection === 'seccion4'}
          onClick={() => scrollToSection('seccion4')}
        >
          Contacto
        </Button>
      </MenuContainer>
      <SubTitulo 
        id="seccion1"
        className="section"
      >
        ¿Qué es CUCBotánico?
      </SubTitulo>
      <Descripcion 
      className="section"
        id="seccion1"
      >
        CUCBotánico es un glosario botánico visual diseñado para descubrir, reconocer y aprender sobre las plantas que se encuentran en el Centro Universitario de la Costa.
      </Descripcion>
      <Descripcion2 
        className="section"
        id="seccion1"
      >
        Accediendo a CUCBotánico, podrás buscar y explorar la variedad de flora que te rodea y así, saciar tu curiosidad.
      </Descripcion2>
      <ImageContainer>
        <Image
          src="/plant2.jpg"
          alt="Imagen 1"
          width="16%"
          height="auto"
          $margintop="10vh"
          $borderradius={20}
          $top={-45}
          $left={49}
          $rotation="-15"
        />
        <Image
          src="/sauceLloron.jpg"
          alt="Imagen 2"
          width="16%"
          height="auto"
          $borderradius={20}
          $top={-45}
          $left={58}
        />
        <Image
          src="/plant1.jpg"
          alt="Imagen 3"
          width="14%"
          height="auto"
          $borderradius={20}
          $top={-45}
          $left={68}
          $rotation="15"
        />
      </ImageContainer>
      <Separador $margintop="5vh" $marginbottom="0vh">
        ---------------------------------------------
      </Separador>
      <SubTitulo 
        id="seccion2" 
        className="section"
        $margintop="10vh"
        $marginright="1vw"
      >
        Navega y explora
      </SubTitulo>
      <Descripcion 
        id="seccion2"
        className="section"
        $marginright="0vw"
        $maxwidth="50vw"
      >
        Tu página principal es donde encontrarás un avance sobre el glosario botánico, basado en la variedad y existencia de la flora del Centro Universitario de la Costa.
      </Descripcion>
      <CarouselComponent />
      <Descripcion
        id="seccion2"
        className="section"
        $marginright="0vw"
        $maxwidth="50vw"
        $margintop="4vh"
      >
        En base a ello podrás buscar y encontrar las plantas que te rodean al ingresar el nombre en la barra de búsqueda que se encuentra en el panel superior. Intenta escribiendo "Parota" y descubre la información que ofrece CUCBotánico sobre ella.
      </Descripcion>
      <ImageContainer>
        <Image
          src="/captura_searchBar.png"
          alt="Imagen 1"
          width="40%"
          height="auto"
          $margintop="1vh"
          $borderradius={20}
          $marginright="0vw"
        />
      </ImageContainer>
      <Descripcion 
        id="seccion2"
        className="section"
        $marginright="0vw"
        $maxwidth="50vw"
        $margintop="8vh"
      >
        Entre otras opciones, accede al menú lateral por medio del botón "Explorar" y navega hasta el "Glosario Botánico" para tener una amplia visión de las plantitas que puedes encontrar.
      </Descripcion>
      <ImageContainer>
        <Image
          src="/captura_BtnExplorar.png"
          alt="Imagen 1"
          width="16%"
          height="auto"
          $margintop="20vh"
          $borderradius={20}
          $left={25}
        />
        <Image
          src="/captura_DropdownMenu.png"
          alt="Imagen 2"
          width="16%"
          height="auto"
          $top={-4}
          $borderradius={20}
          $left={40}
        />
      </ImageContainer>
      <Separador $margintop="25vh" $marginbottom="5vh">
      ---------------------------------------------
      </Separador>
      <SubTitulo 
        id="seccion3"
        className="section"
        $margintop="10vh"
        $marginright="1vw"
      >
        Encuentra con QR
      </SubTitulo>
      <Descripcion 
        id="seccion3"
        className="section"
        $marginright="0vw"
        $maxwidth="50vw"
        $margintop="8vh"
      >
        
      </Descripcion>
      <Separador $margintop="5vh" $marginbottom="5vh">
      ---------------------------------------------
      </Separador>
      <SubTitulo 
        id="seccion4"
        className="section"
        $margintop="10vh"
        $marginright="1vw"
      >
        Contacto
      </SubTitulo>
      <Descripcion 
        id="seccion4"
        className="section"
      >
        jfjfd
      </Descripcion>
    </ContenedorPrincipal>
  );
};


export default Acerca;
