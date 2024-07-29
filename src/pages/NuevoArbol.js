import { useEffect, useState } from 'react'
import { Stack } from 'react-bootstrap';
import FormNuevoArbol from '../components/CrearArbol/FormularioNuevoA';


const NuevoArbol = () => {

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
            <p>Nuevo Arbol</p>
                <FormNuevoArbol/>
            </div>
            
        </>
    )
}

export default NuevoArbol