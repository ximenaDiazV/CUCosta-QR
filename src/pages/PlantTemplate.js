// PlantTemplate.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { distribute } from 'gsap';

const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  max-height: 200vh;
  min-height: 50vh;
  padding-top: 2vh;
  padding-bottom: 0vh;
  position: relative;
`;

const ContenedorTitulo = styled.div`
  background-color: #83C5BE;
  width: 100%;
  height: 25vh;
  padding-top: 9vh;
  position: relative;
`;

const Titulo = styled.h1`
  font-size: 5rem;
  color: #2c6b6f;
  text-align: center;
  padding-top: 0vh;
`;

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
`;

const ContenedorColumnaIzquierda = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5vw;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-left: 3vw;
`;

const Tab = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => props.$active ? '#2c6b6f' : '#ffffff'};
  color: ${props => props.$active ? '#ffffff' : '#2c6b6f'};
  font-size: 1.1rem;
  font-weight: bold;
  border: 3px solid #2c6b6f;
  border-radius: 10px 10px 0 0;
  margin: 0 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #2c6b6f;
    color: #ffffff;
  }
`;

const ContenedorInfo = styled.div`
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  margin-bottom: 5vh;
  text-align: left;
  margin-top: 5vh;
  width: 60vw;
`;

const ContenedorColumnaDerecha = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const ContenedorRecuadros = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  width: 80%;
  margin: 0 auto;
  margin-top: 2vh;
  margin-left: 3vw;
  position: relative;
`;

const Recuadro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #006D77;
  border-radius: 10px;
  overflow: hidden;
  width: 22vw;
  height: 52vh;
  background-color: #83C5BE;
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
  border: 2px solid #223D61;
  border-radius: 5px;
  overflow: hidden;
  width: 18vw;
  height: 38vh;
  
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

const Info = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-top: 10px;
`;

const PlantTemplate = ({id, nombre, imagen, frutos, hojas, usos }) => {
  const [activeTab, setActiveTab] = useState('Nombre');
  
  const [nombres, setNombres] = useState({
    nombre: '',
    nombrecie: '',
    nombrecom: '',
  })
  const [especif, setEspecif] = useState({
    familia: '',
    altura: '',
    diamtro: '',
    copa: '',
    corteza: ''
  })
  const [flor, setFlor] = useState({
    color: '',
    tipo: '',
    epoca: '',
  })
  const [fruto, setFruto] = useState({
    tipo: '',
    forma: '',
    tamanio: '',
    color: ''
  })
  const [habitat, setHabitat] = useState({
    distribucion: '',
    clima: '',
    altitud: '',
    suelo: '',
  })
  const [hoja, setHoja] = useState({
    tipo: '',
    longitud: '',
    follaje: ''
  })
  const [uso, setUso] = useState({
    madera: '',
    forraje: '',
    medicinal: '',
    orna: '',
  })
  
  useEffect(()=>{
    const fecthAllnombres = async ()=>{
        try{
            const res = await axios.get("http://localhost:8800/nombres/"+id)
            setNombres({... nombres, 
              nombre:res.data.nombre,
              nombrecie:res.data.nombrecie,
              nombrecom:res.data.nombrecom,
            });
            setEspecif({... especif, 
              familia:res.data.familia,
              altura:res.data.altura,
              diametro:res.data.diametro,
              copa: res.data.copa,
              corteza: res.data.corteza
            });
            setFlor({... flor, 
              color:res.data.colorflor,
              tipo:res.data.tipoflor,
              epoca:res.data.epoca
            });
            setFruto({... fruto, 
              tipo:res.data.tipofruto,
              forma:res.data.forma,
              tamanio:res.data.tamanio,
              color: res.data.colorfruto,
            });
            setHabitat({... habitat, 
              distribucion:res.data.distribucion,
              clima:res.data.clima,
              altitud:res.data.altitud,
              suelo: res.data.suelo,
            });
            setHoja({... hoja, 
              tipo:res.data.tipohoja,
              longitud:res.data.longitud,
              follaje:res.data.follaje
            });
            setUso({... uso, 
              madera:res.data.madera,
              forraje:res.data.altura,
              medicinal:res.data.medicinal,
              orna: res.data.ornamental
            });
        }catch(err){
            console.log(err)
        }
    }
    fecthAllnombres()
},[])

  const renderInfo = () => {
    switch (activeTab) {
      case 'Nombre':
        return <Info>{nombres.nombre+nombres.nombrecie+nombres.nombrecom}</Info>;
      case 'Especificaciones':
        return <Info>{especif.familia+especif.altura+especif.diamtro+especif.copa+especif.corteza}</Info>;
      case 'Flores':
        return <Info>{flor.color+flor.tipo+flor.epoca}</Info>;
      case 'Frutos':
        return <Info>{fruto.tipo+fruto.forma+fruto.tamanio+fruto.color}</Info>;
      case 'Hábitat':
        return <Info>{habitat.distribucion+habitat.clima+habitat.altitud+habitat.suelo}</Info>;
      case 'Hojas':
        return <Info>{hoja.tipo+hoja.longitud+hoja.follaje}</Info>;
      case 'Usos':
        return <Info>{uso.madera+uso.forraje+uso.medicinal+uso.orna}</Info>;
      default:
        return <Info>{nombre}</Info>;
    }
  };

  return (
    <>
      <ContenedorTitulo>
        <Titulo>{nombre}</Titulo>
      </ContenedorTitulo>
      <Contenedor>
        <ContenedorPrincipal>
          <ContenedorColumnaIzquierda>
            <TabsContainer>
              <Tab $active={activeTab === 'Nombre'} onClick={() => setActiveTab('Nombre')}>Nombre</Tab>
              <Tab $active={activeTab === 'Especificaciones'} onClick={() => setActiveTab('Especificaciones')}>Especificaciones</Tab>
              <Tab $active={activeTab === 'Flores'} onClick={() => setActiveTab('Flores')}>Flores</Tab>
              <Tab $active={activeTab === 'Frutos'} onClick={() => setActiveTab('Frutos')}>Frutos</Tab>
              <Tab $active={activeTab === 'Hábitat'} onClick={() => setActiveTab('Hábitat')}>Hábitat</Tab>
              <Tab $active={activeTab === 'Hojas'} onClick={() => setActiveTab('Hojas')}>Hojas</Tab>
              <Tab $active={activeTab === 'Usos'} onClick={() => setActiveTab('Usos')}>Usos</Tab>
            </TabsContainer>
            <ContenedorInfo>
              {renderInfo()}
            </ContenedorInfo>
          </ContenedorColumnaIzquierda>
          <ContenedorColumnaDerecha>
          <ContenedorRecuadros>
              <Recuadro>
                <RecuadroImagen>
                <Imagen src={imagen} alt={nombre} />
                </RecuadroImagen>
              </Recuadro>
          </ContenedorRecuadros>
            
            {/* Agrega más imágenes aquí si es necesario */}
          </ContenedorColumnaDerecha>
        </ContenedorPrincipal>
      </Contenedor>
    </>
  );
};

export default PlantTemplate;
