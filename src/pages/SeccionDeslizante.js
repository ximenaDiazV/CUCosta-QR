import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

const Container = styled.div`
  overflow: hidden;
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 79.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.bgColor};
`;

const BackgroundImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 2); /* Cambiar sombra al pasar el mouse */
    border-radius: 50%;
    }

  /* Estilos adicionales para el icono */
  .arrow-icon {
    background-color: #ffffff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const SeccionDeslizante = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);

  const navigateNext = () => {
    setCurrentSection((prev) => (prev + 1 < sections.length ? prev + 1 : prev));
  };

  const scrollToTop = () => {
    setCurrentSection(0);
  };

  return (
    <Container>
      {sections.map((section, index) => (
        <SectionContainer
          key={index}
          bgColor={section.bgColor}
          style={{ display: index === currentSection ? "flex" : "none" }}
          ref={(ref) => (sectionRefs.current[index] = ref)}
        >
          <BackgroundImage src={section.imageSrc} alt="Background" />
          <Title>{section.title}</Title>
          {index === currentSection && (
            <ScrollButton onClick={index === sections.length - 1 ? scrollToTop : navigateNext}>
                <FaArrowDown 
                    className="arrow-icon" 
                    color={section.iconColor} size={30} 
                />
            </ScrollButton>
          )}
        </SectionContainer>
      ))}
    </Container>
  );
};

export default SeccionDeslizante;