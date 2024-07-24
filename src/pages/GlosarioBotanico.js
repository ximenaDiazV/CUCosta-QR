// Pagina para el glosario botanico en general, donde se podrá "descubrir".
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  max-height: 100%;
  overflow: hidden;
  margin-bottom: 2vh;
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

const Titulo = styled.h1`
  font-size: 3.7rem;
  margin-bottom: 2vh;
  margin-top: 22.5vh;
  color: #0B5351;
  align-text: center;
`;

const Descripcion = styled.h1`
  font-size: 1rem;
  margin-bottom: 6.3vh;
  color: #0B5351;
  align-text: center;
`;


const ContenedorRecuadros = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  margin-top: 7vh;
  margin-left: 12.5vw;
`;

const Recuadro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #111111;
  border-radius: 10px;
  overflow: hidden;
  width: 19.5vw;
  height: 40vh;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
        background: #006D77;
    }
`;

const RecuadroImagen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vh;
  margin-top: 2vh;
  border: 2px solid #111111;
  border-radius: 1px;
  overflow: hidden;
  width: 16vw;
  height: 30vh;
  
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Boton = styled.button`
  background-color: #83C5BE;
  color: #0B5351;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 2vh;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: auto;
  width: 13vw;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
        background: #FFFFFF;
        color: #0B5351;
        font-weight: bold;
        transform: scale(1.1);
    }
`;

const BotonPaginacion = styled.button`
  background-color: #0B5351;
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 2vh;
  cursor: pointer;
  font-size: 1.1rem;
  width: auto;
  text-align: center;
  margin-top: 10vh;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #006D77;
    color: #FFFF;
    font-weight: bold;
    transform: scale(1.1);
  }
  &:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const GlosarioBotanico = ({ plantas }) => {
  const navigate = useNavigate();
  const [paginaActual, setPaginaActual] = useState(0);
  const plantasPorPagina = 6;

  const manejarClick = (pagina) => {
    navigate(pagina);
  };

  const manejarPaginaSiguiente = () => {
    setPaginaActual((prevPagina) => prevPagina + 1);
  };

  const manejarPaginaAnterior = () => {
    setPaginaActual((prevPagina) => prevPagina - 1);
  };

  const indiceInicial = paginaActual * plantasPorPagina;
  const indiceFinal = indiceInicial + plantasPorPagina;
  const plantasMostradas = plantas.slice(indiceInicial, indiceFinal);

  return (
    <ContenedorPrincipal>
      <Titulo>Glosario Botánico</Titulo>
      <Descripcion>
        Descubre la variedad de especies que son parte de la flora del Centro Universitario de la Costa.
      </Descripcion>
      <ContenedorRecuadros>
        {plantasMostradas.map((planta, index) => (
          <Recuadro key={index}>
            <RecuadroImagen>
              <Imagen src={planta.imagen} alt={planta.nombre} />
            </RecuadroImagen>
            <Boton onClick={() => manejarClick(planta.pagina)}>{planta.nombre}</Boton>
          </Recuadro>
        ))}
      </ContenedorRecuadros>
      <div>
        <BotonPaginacion onClick={manejarPaginaAnterior} disabled={paginaActual === 0}>
          Anterior
        </BotonPaginacion>
        <BotonPaginacion onClick={manejarPaginaSiguiente} disabled={indiceFinal >= plantas.length}>
          Siguiente
        </BotonPaginacion>
      </div>
    </ContenedorPrincipal>
    );
};

export default GlosarioBotanico;
