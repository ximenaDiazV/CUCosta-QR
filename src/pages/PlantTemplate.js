// PlantTemplate.js
import React from 'react';
import styled from 'styled-components';

const ContenedorGeneralTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  margin-top: 10vh;
  min-height: 100vh;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #0B5351;
  text-align: center;
`;

const Imagen = styled.img`
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
  border: 2px solid #0B5351;
  border-radius: 10px;
`;

const PlantTemplate = ({ nombre, imagen }) => {
  return (
    <ContenedorGeneralTemplate>
      <Titulo>{nombre}</Titulo>
      <Imagen src={imagen} alt={nombre} />
    </ContenedorGeneralTemplate>
  );
};

export default PlantTemplate;
