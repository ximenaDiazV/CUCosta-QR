import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { newArbol } from './NuevoA';
import { Grid } from '@mui/material';

const FormNuevoArbol = (props) => {

    const [arbol, setArbol] = useState({
        nombre: props.arbol ? props.arbol.nombre : '',
        nombrecie: props.arbol ? props.arbol.nombrecie : '',
        nombrecom: props.arbol ? props.arbol.nombrecom : '',
        familia: props.arbol ? props.arbol.familia : '',
        altura: props.arbol ? props.arbol.altura :'',
        diametro: props.arbol ? props.arbol.diametro :'',
        copa: props.arbol ? props.arbol.copa :'',
        corteza: props.arbol ? props.arbol.corteza :'',
        tipo_fruta: props.arbol ? props.arbol.tipo_fruta :'' ,
        forma: props.arbol ? props.arbol.forma :'',
        tamanio: props.arbol ? props.arbol.tamanio :'',
        color_fruta: props.arbol ? props.arbol.color_fruta :'',
        tipo_hoja: props.arbol ? props.arbol.tipo_hoja :'',
        longitud: props.arbol ? props.arbol.longitud :'',
        follaje: props.arbol ? props.arbol.follaje :'',
        color_flor: props.arbol ? props.arbol.color_flor :'',
        tipo_flor: props.arbol ? props.arbol.tipo_flor :'',
        epoca: props.arbol ? props.arbol.epoca :'',
        distribucion: props.arbol ? props.arbol.distribucion :'',
        clima: props.arbol ? props.arbol.clima :'',
        altitud: props.arbol ? props.arbol.altitud :'',
        suelo: props.arbol ? props.arbol.suelo :'',
        madera: props.arbol ? props.arbol.madera :'', 
        forraje: props.arbol ? props.arbol.forraje :'',
        medicinal: props.arbol ? props.arbol.medicinal :'',
        ornamental: props.arbol ? props.arbol.ornamental :'',
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
        <div style={{width:'50%',}}>
            <form onSubmit={handleOnSubmit}>
                <Grid  container direction="column" p={5} spacing={5} >
                <TextField
                    style={{marginBottom:15}}
                    type='text' 
                    id="nombre" 
                    label="Nombre" 
                    variant="outlined" 
                    size='small'
                    value={arbol.nombre}
                    onChange={handleChange} required 
                />
                <TextField
                    type='text' 
                    id="nombrecie" 
                    label="Nombre cientifico" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.nombrecie}
                    onChange={handleChange} required 
                />
                <TextField
                    type='text' 
                    id="nombrecom" 
                    label="Nombre comun" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.nombrecom}
                    onChange={handleChange} required 
                  />
                <p>Sección especificaciones</p>
                <TextField
                    type='text' 
                    id="familia" 
                    label="Familia" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.familia}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="altura" 
                    label="Altura" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.altura}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="diametro" 
                    label="Diametro tronco" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.diametro}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="copa" 
                    label="Copa" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.copa}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="corteza" 
                    label="Corteza" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.corteza}
                    onChange={handleChange} required
                />
                <p>Sección frutas</p>
                <TextField
                    type='text' 
                    id="tipo_fruta" 
                    label="Tipo" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.tipo_fruta}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="forma" 
                    label="Forma" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.forma}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="tamanio" 
                    label="Tamaño" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.tamanio}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="color_fruta" 
                    label="Color" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.color_fruta}
                    onChange={handleChange} required
                />
                <p>Sección hojas</p>
                <TextField
                    type='text' 
                    id="tipo_hoja" 
                    label="Tipo" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.tipo_hoja}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="longitud" 
                    label="Longitud" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.longitud}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="follaje" 
                    label="Follaje" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.follaje}
                    onChange={handleChange} required
                />
                <p>Sección flores</p>
                <TextField
                    type='text' 
                    id="color_flor" 
                    label="Color" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.color_flor}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="tipo_flor" 
                    label="Tipo" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.tipo_flor}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="epoca" 
                    label="Epoca floracion" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.epoca}
                    onChange={handleChange} required
                />
                <p>Sección habitat</p>
                <TextField
                    type='text' 
                    id="distribucion" 
                    label="Distribucion" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.distribucion}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="clima" 
                    label="Clima" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.clima}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="altitud" 
                    label="Altitud" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.altitud}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="suelo" 
                    label="Suelo" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.suelo}
                    onChange={handleChange} required
                />
                <p>Sección usos</p>
                <TextField
                    type='text' 
                    id="madera" 
                    label="Madera" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.madera}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="forraje" 
                    label="Forraje" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.forraje}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="medicinal" 
                    label="Medicinal" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.medicinal}
                    onChange={handleChange} required
                />
                <TextField
                    type='text' 
                    id="ornamental" 
                    label="Ornamental" 
                    variant="outlined" 
                    style={{marginBottom:15}}
                    size='small'
                    value={arbol.ornamental}
                    onChange={handleChange} required
                />
                    <Button fullWidth variant="contained" size="large" type="submit">
                        Enviar
                    </Button>
                </Grid>
            </form>
        </div>
    );
};

export default FormNuevoArbol;