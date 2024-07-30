// PlantTemplate.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Info = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.3;
  margin-top: 1.5vh;
`;

const Detalle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled.h3`
  color: #006D77;
  font-size: 1.2rem;
  margin: 0;
  flex-shrink: 0;
  width: 15vw;
`;

const Valor = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
  flex: 1; // Para que ocupe el espacio restante
`;

const PlantTemplate = ({id, nombre, imagen }) => {
  const [activeTab, setActiveTab] = useState('Nombre');
  
  const [nombres, setNombres] = useState({
    nombre: '',
    nombrecie: '',
    nombrecom: '',
  })
  const [especif, setEspecif] = useState({
    familia: '',
    altura: '',
    diametro: '',
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
    const fetchData = async ()=>{
        try{
            const res = await axios.get(`http://localhost:8800/nombres/${id}`)
            setNombres({
              nombre: res.data.nombre,
              nombrecie: res.data.nombrecie,
              nombrecom: res.data.nombrecom,
            });
            setEspecif({
              familia: res.data.familia,
              altura: res.data.altura,
              diametro: res.data.diametro,
              copa: res.data.copa,
              corteza: res.data.corteza
            });
            setFlor({ 
              color: res.data.colorflor,
              tipo: res.data.tipoflor,
              epoca: res.data.epoca
            });
            setFruto({ 
              tipo: res.data.tipofruto,
              forma: res.data.forma,
              tamanio: res.data.tamanio,
              color: res.data.colorfruto,
            });
            setHabitat({
              distribucion: res.data.distribucion,
              clima: res.data.clima,
              altitud: res.data.altitud,
              suelo: res.data.suelo,
            });
            setHoja({
              tipo: res.data.tipohoja,
              longitud: res.data.longitud,
              follaje: res.data.follaje
            });
            setUso({ 
              madera: res.data.madera,
              forraje: res.data.altura,
              medicinal: res.data.medicinal,
              orna: res.data.ornamental
            });
        }catch(err){
            console.log(err);
        }
    }
    fetchData();
  }, [id]);

  const imagenURL = `http://localhost:8800/images/${id}.jpg`;

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
            {activeTab === 'Nombre' && (
                <div>
                  <h2>Identificación botánica, denominaciones o sinónimos.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Nombre:</Label>
                    <Valor>{nombres.nombre}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Nombre común:</Label>
                    <Valor>{nombres.nombrecom}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Nombre científico:</Label>
                    <Valor>{nombres.nombrecie}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Especificaciones' && (
                <div>
                  <h2>Características y detalles botánicos.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Familia:</Label>
                    <Valor>{especif.familia}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Altura:</Label>
                    <Valor>{especif.altura}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Diámetro del tronco:</Label>
                    <Valor>{especif.diametro}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Diámetro de la copa:</Label>
                    <Valor>{especif.copa}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Corteza:</Label>
                    <Valor>{especif.corteza}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Flores' && (
                <div>
                  <h2>Aspectos y detalles florales.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Tipo:</Label>
                    <Valor>{flor.tipo}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Color:</Label>
                    <Valor>{flor.color}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Época de foración:</Label>
                    <Valor>{flor.epoca}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Frutos' && (
                <div>
                  <h2>Descripción y clasificación del fruto.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Tipo:</Label>
                    <Valor>{fruto.tipo}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Color:</Label>
                    <Valor>{fruto.color}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Forma:</Label>
                    <Valor>{fruto.forma}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Tamaño:</Label>
                    <Valor>{fruto.tamanio}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Hábitat' && (
                <div>
                  <h2>Condiciones del entorno natural.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Clima:</Label>
                    <Valor>{habitat.clima}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Suelo:</Label>
                    <Valor>{habitat.suelo}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Altitud:</Label>
                    <Valor>{habitat.altitud}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Distribución:</Label>
                    <Valor>{habitat.distribucion}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Hojas' && (
                <div>
                  <h2>Características y aspectos de la hoja.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Tipo:</Label>
                    <Valor>{hoja.tipo}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Follaje:</Label>
                    <Valor>{hoja.follaje}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Longitud:</Label>
                    <Valor>{hoja.longitud}</Valor>
                  </Detalle>
                </div>
              )}
              {activeTab === 'Usos' && (
                <div>
                  <h2>Propósitos, utilidades y beneficios de la planta.</h2>
                  <h2>--------------------------------------------------------------------------------------------</h2>
                  <Detalle>
                    <Label>Madera:</Label>
                    <Valor>{uso.madera}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Forraje:</Label>
                    <Valor>{uso.forraje}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Medicinal:</Label>
                    <Valor>{uso.medicinal}</Valor>
                  </Detalle>
                  <Detalle>
                    <Label>Otros:</Label>
                    <Valor>{uso.orna}</Valor>
                  </Detalle>
                </div>
              )}
            </ContenedorInfo>
          </ContenedorColumnaIzquierda>
          <ContenedorColumnaDerecha>
          <ContenedorRecuadros>
              <Recuadro>
                <RecuadroImagen>
                <Imagen src={imagenURL} alt={nombres.nombre} />
                </RecuadroImagen>
              </Recuadro>
          </ContenedorRecuadros>
          </ContenedorColumnaDerecha>
        </ContenedorPrincipal>
      </Contenedor>
    </>
  );
};

export default PlantTemplate;
