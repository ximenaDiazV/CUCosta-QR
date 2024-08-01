import React from 'react';
import FormNuevoArbol from '../components/CrearArbol/FormularioNuevoA';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1vh;
  margin-top: 2.5vh;
  color: #0B5351;
  align-text: center;
`;

const NuevoArbol = () => {
    const navigate=useNavigate();
    return(
        <>

            <div style={{padding:100, width:"100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            flexDirection: 'column',
            }}>
            {/*Agregar boton de regresar */}
                <Grid container >
                    <Grid xs={6} md={4}>
                    <IconButton aria-label="regresar" size="large" onClick={()=>navigate('/dashboard')}><ArrowBackIcon fontSize="inherit" /></IconButton>
                    </Grid>
                    <Grid xs={6} md={8}>
                    <Titulo>Nuevo Arbol</Titulo>
                    </Grid>
                </Grid>
                    <FormNuevoArbol/>
            </div>
            
        </>
    )
}

export default NuevoArbol