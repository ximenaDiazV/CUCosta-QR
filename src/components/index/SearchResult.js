import React from "react";
import "./SearchResult.css"
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

export const SearchResult = ({result}) => {

    const navigate = useNavigate();

    return(
        <Link 
            component="button"
            color="inherit"
            underline="hover"
            onClick={() => navigate('/' + result.Nombre)
            }>
                {result.Nombre }
        </Link>
    )
}
