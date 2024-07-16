import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NuevoArbol from '../../pages/NuevoArbol';
import { newArbol } from './NuevoA';

const FormNuevoArbol = (props) => {

    const [arbol, setArbol] = useState({
        nombre: props.arbol ? props.arbol.nombre : '',
        nombrecie: props.arbol ? props.libro.nombrecie : '',
        nombrecom: props.libro ? props.libro.nombrecom : ''
      });
    
      const [errorMsg, setErrorMsg] = useState('');
      //const { nombre, nombrecie, nombrecom } = arbol;
    
      const handleOnSubmit = async (event) => {
        event.preventDefault();
        console.log('Datos: ',arbol.nombre,' ',arbol.nombrecie,' ',arbol.nombrecom);
        try{
          const data = await newArbol(arbol);
          if(data.success){

          } 
        }catch(errorMsg){
          console.log(errorMsg, " catch");
          setErrorMsg('Error formulario');
        }
      };

      const handleChange = (event) => {
        const { id, value } = event.target;
        setArbol({ ...arbol, [id]: value });
      };

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <p>Seccion nombres</p>
                <TextField
                    type='text' 
                    id="nombre" 
                    label="Nombre" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                    value={arbol.nombre}
                    onChange={handleChange} required 
                />
                <TextField
                    type='text' 
                    id="nombrecie" 
                    label="Nombre cientifico" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                    value={arbol.nombrecie}
                    onChange={handleChange} required 
                />
                <TextField
                    type='text' 
                    id="nombrecom" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                    value={arbol.nombrecom}
                    onChange={handleChange} required 
                  />
                <p>Seccion especificacione</p>
                <TextField
                    type='text' 
                    id="familia" 
                    label="Familia" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="altura" 
                    label="Altura" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="diametro" 
                    label="Diametro tronco" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="copa" 
                    label="Copa" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="corteza" 
                    label="Corteza" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion frutas</p>
                <TextField
                    type='text' 
                    id="tipo_fruta" 
                    label="Tipo" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="forma" 
                    label="Forma" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="tamanio" 
                    label="Tamaño" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="color_fruta" 
                    label="Color" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion hojas</p>
                <TextField
                    type='text' 
                    id="tipo_hoja" 
                    label="Tipo" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="longitud" 
                    label="Longitud" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="follaje" 
                    label="Follaje" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion flores</p>
                <TextField
                    type='text' 
                    id="color_flor" 
                    label="Color" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="tipo_flor" 
                    label="Tipo" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="epoca" 
                    label="Epoca floracion" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion habitat</p>
                <TextField
                    type='text' 
                    id="distribucion" 
                    label="Distribucion" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="clima" 
                    label="Clima" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="altitud" 
                    label="Altitud" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="suelo" 
                    label="Suelo" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion usos</p>
                <TextField
                    type='text' 
                    id="madera" 
                    label="Madera" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="forraje" 
                    label="Forraje" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="medicinal" 
                    label="Medicinal" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='text' 
                    id="ornamental" 
                    label="Ornamental" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default FormNuevoArbol;