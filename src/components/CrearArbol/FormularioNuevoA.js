import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FormNuevoArbol = (props) => {

    const [arbol, setArbol] = useState({
        nombre: props.arbol ? props.arbol.nombre : '',
        nombrecie: props.arbol ? props.libro.nombrecie : '',
        nombrecom: props.libro ? props.libro.nombrecom : ''
      });
    
      const [errorMsg, setErrorMsg] = useState('');
      const { nombre, nombrecie, nombrecom } = arbol;
    
      const handleOnSubmit = (event) => {
        event.preventDefault();
        const valores = [nombre, nombrecie, nombrecom];
        let errorMsg = '';
    
        const todosLosCamposLlenos = valores.every((campo) => {
          const valor = `${campo}`.trim();
          return valor !== '' && valor !== '0';
        });
    
        if (todosLosCamposLlenos) {
          const arbol = {
            nombre,
            nombrecie,
            nombrecom
          };
          props.handleOnSubmit(arbol);
        } else {
          errorMsg = 'Por favor, rellene todos los campos.';
        }
        setErrorMsg(errorMsg);
      };
    
      const handleInputChange = (event) => {
        const { nombre, valor } = event.target;
        switch (nombre) {
          case 'nombre':
            if (valor === '' || parseInt(valor) === +valor) {
              setArbol((prevState) => ({
                ...prevState,
                [nombre]: valor
              }));
            }
            break;
          default:
            setArbol((prevState) => ({
              ...prevState,
              [nombre]: valor
            }));
        }
      };


    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <p>Seccion nombres</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                    value={nombre}
                    onChange={handleInputChange}
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre cientifico" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion especificacione</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion frutas</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion hojas</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion flores</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion habitat</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <p>Seccion usos</p>
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
                    variant="outlined" 
                    helperText="Obligatorio"
                    size='small'
                />
                <TextField
                    type='nombre' 
                    id="nombre" 
                    label="Nombre comun" 
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