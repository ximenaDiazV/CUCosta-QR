import React,{ useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { purple, yellow } from '@mui/material/colors';
import Modal from 'react-modal';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/system/Unstable_Grid';
import SendIcon from '@mui/icons-material/Send';


const verdeF = '#006D77';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function DataTable() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [plantas, setplantas] = useState([]);
  const [nombre, setNombre] = useState(null);
  const [nombreCientifico, setNombreCientifico] = useState(null);
  const [nombreComun, setNombreComun] = useState(null);
  const [error, setError] = useState('');

  const editar = async (e) => {
    setError("");
    e.preventDefault();
    console.log("Entre a la funcion editar");
    try {
        console.log('hola');
    } catch (error) {
      console.log(error, " catch");
      setError('Error editar in. Please try again later.');
    }
  };


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    const renderDetailsButton = (params) => {
      return (
          <strong>
              <Button
                  variant="contained"
                  size="small"
                  style={{backgroundColor: verdeF  }}
                  onClick={() => {
                      
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
                    onClick={()=>{
                      setModalData(Object.values(params.row));
                      openModal();
                      console.log(modalData," Desde botoncito");
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
      <>
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
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Editar: {modalData[0]} - {modalData[1]} </h2>
        <button onClick={closeModal}>close</button>
        <div>Selecciona la seccion que deseas modificar: </div>
        <form onSubmit={editar}>
          <Stack spacing={2}>
            <Grid>
            <Button>Nombres</Button>
            <Button>Especificaciones</Button>
            <Button>Flores</Button>
            <Button>Frutos</Button>
            <Button>Habitat</Button>
            <Button>Hojas</Button>
            <Button>Usos</Button>
            </Grid>
            <Grid container spacing={2}>
              <Grid>
                <TextField type='nombre' value={nombre} id="nombre" label="Nombre" variant="outlined" defaultValue={modalData[1]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
              </Grid>
              <Grid>
                <TextField id="nombreCientifico" value={nombreCientifico} label="Nombre cientifico" defaultValue={modalData[2]} helperText="Obligatorio" onChange={(e) => setNombreCientifico(e.target.value)} />
              </Grid>
              <Grid>
                <TextField id="nombreComun" value={nombreComun} label="Nombre comun" defaultValue={modalData[3]} helperText="Obligatorio" onChange={(e) => setNombreComun(e.target.value)} />
              </Grid>
            </Grid>
            <Button
                    type='submit'
                    variant="contained" 
                    endIcon={<SendIcon />}
                    size="small"
                    //style={{ marginLeft: 16 }}
                    onClick={() => {
                        
                    }}
                >
              Enviar
            </Button>
          </Stack>
        </form>
      </Modal>

      </>
  );
}
