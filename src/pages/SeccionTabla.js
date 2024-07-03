import React,{ useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { purple, yellow } from '@mui/material/colors';
const verdeF = '#006D77';

const renderDetailsButton = (params) => {
  return (
      <strong>
          <Button
              variant="contained"
              size="small"
              style={{backgroundColor: verdeF  }}
              onClick={() => {
                  console.log(params)
              }}
          >
              Mas info
          </Button>
      </strong>
  )
}

const renderEditarButton = (params) => {
    return (
        <strong>
            <Button
                style={{ backgroundColor: verdeF}}
                variant="contained"
                color= "secondary"
                size="small"
                onClick={() => {
                    console.log(params)
                }}
            >
                Editar
            </Button>
        </strong>
    )
  }


const renderDeleteButton = (params) => {
    return (
        <strong>
            <Button
                variant="outlined" 
                startIcon={<DeleteIcon />}
                color="error"
                size="small"
                //style={{ marginLeft: 16 }}
                onClick={() => {
                    console.log(params)
                }}
            >
                Eliminar
            </Button>
        </strong>
    )
  }


const columns = [
  { field: 'IdArbol', headerName: 'ID', width: 70 },
  { field: 'Nombre', headerName: 'Nombre', width: 130 },
  {
    field: 'ButonVisualizar',
    headerName: 'Visualizar',
    width: 150,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
  },
  {
    field: 'ButonEditar',
    headerName: 'Editar',
    width: 150,
    renderCell: renderEditarButton,
    disableClickEventBubbling: true,
  },
  {
    field: 'ButonElimiar',
    headerName: 'Eliminar',
    width: 150,
    renderCell: renderDeleteButton,
    disableClickEventBubbling: true,
  },
];

export default function DataTable() {

    const [plantas, setplantas] = useState([])
    useEffect(()=>{
        const fecthAllplantas = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/plantas")
                setplantas(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllplantas()
    },[])


  return (
    <div style={{ height: 400, width: '47%'}}>
      <DataGrid
        rows={plantas}
        getRowId={(plantas) => plantas.IdArbol}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
