import React,{ useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function BttonAgregarArbol() {

    const navigate = useNavigate();

    function handleClick(event) {
      navigate('/nuevoarbol');
    }

    return (
        <Button
            variant="contained"
            color= "secondary"
            size="large"
            to="/nuevoarbol"
            onClick={handleClick}
        >
            Agregar arbol
        </Button>
    );
}
