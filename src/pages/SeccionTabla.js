import React,{ useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Modal from 'react-modal';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/system/Unstable_Grid';
import SendIcon from '@mui/icons-material/Send';
import { UpdateArbol, UpdateArbolE, UpdateArbolFlor } from '../components/index/Editar';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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
  const navigate = useNavigate();
  const [eliminado, setEliminar] = useState(false);
  const [editado, setEditar] = useState(false);
  const [nombre, setNombre] = useState(null);
  const [nombreCientifico, setNombreCientifico] = useState(null);
  const [nombreComun, setNombreComun] = useState(null);
  const [error, setError] = useState('');
  const [IdArbol, setIdArbol] = useState('');
  const [familia, setFamilia] = useState(null);
  const [altura, setAltura] = useState(null);
  const [diametro, setDiametro] = useState(null);
  const [copa,setCopa] = useState(null);
  const [corteza, setCorteza] = useState(null);
  const [colorflor, setColorflor] = useState(null);
  const [tipoflor, setTipoflor] = useState(null);
  const [epoca, setEpoca] = useState(null);
  const [tipofruto, setTipoFruto] = useState(null);
  const [forma, setForma] = useState(null);
  const [tamanio, setTamanio] = useState(null);
  const [colorfruto, setColorfruto] = useState(null);
  const [distribucion, setDistribucion] = useState(null);
  const [clima, setClima] = useState(null);  
  const [altitud, setAltitud] = useState(null);
  const [suelo, setSuelo] = useState(null);
  const [tipohoja, setTipohoja] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [follaje, setFollaje] = useState(null);
  const [madera, setMadera] = useState(null);
  const [forraje, setForraje] = useState(null);
  const [medicinal, setMedicinal] = useState(null);
  const [orna, setOrna] = useState(null);

  


  const [valueTab, setValueTab] = React.useState('1');

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  
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
        if(eliminado || editado){
          setEliminar(false);
          setEditar(false);
        }
    },[modalData,eliminado,editado]);

  const eliminar = async (id) => {
      console.log('desde eliminar'+id)
      try{
        const res = await axios.get("http://localhost:8800/eliminar/"+id);
        //alert
        console.log('success try')
        setEliminar(true);
      }catch (error){
        console.log('fail try'+error)
      }
  }
  
  const editarnombres = async (e) => {
    setError("");
    console.log("editar nombres");
    if(!nombre){
      setNombre(modalData[0]);
    }
    if(!nombreCientifico){
      setNombreCientifico(modalData[1]);
    }
    if(!nombreComun){
      setNombreComun(modalData[2]);
    }
    console.log("pasamos los if");
    e.preventDefault();
    console.log("Entre a la funcion editar");
    try {
        const data = await UpdateArbol(nombre, nombreCientifico, nombreComun, IdArbol);
        if(data.success){
          console.log("SUCCESS");
          setEditar(true);
          //Alert succes  
        }else{
          setError(data.message);
          console.log('Error al actualizar datos: ',error);
        }
        //Incompleta
    } catch (error) {
      console.log(error, " catch");
      setError('Error editar in. Please try again later.');
    }
  };

  const editarespecif = async (e) => {
    setError("");
    console.log("editar especificaciones");
    if(!familia){
      setFamilia(modalData[3]);
      console.log(familia);
    }
    if(!altura){
      setAltura(modalData[4]);
      console.log(altura);
    }
    if(!diametro){
      setDiametro(modalData[5]);
      console.log(diametro);
    }
    if(!copa){
      setCopa(modalData[6]);
      console.log(copa);
    }
    if(!corteza){
      setCorteza(modalData[7]);
      console.log(corteza+modalData[7]);
    }
    console.log("pasamos los if");
    e.preventDefault();
    console.log("Entre a la funcion editar E");
    try {
        const data = await UpdateArbolE(familia, altura, diametro, copa, corteza ,IdArbol);
        if(data.success){
          console.log("SUCCESS");
          setEditar(true);
          //Alert succes  
        }else{
          setError(data.message);
          console.log('Error al actualizar datos: ',error);
        }
        //Incompleta
    } catch (error) {
      console.log(error, " catch");
      setError('Error editar in. Please try again later.');
    }
  };

  const editarflor = async (e) => {
    setError("");
    //e.preventDefault();
    console.log("Entre a la funcion editar");
    try {
        const data = await UpdateArbolFlor(colorflor, tipoflor, epoca, IdArbol);
        if(data.success){
          console.log("SUCCESS");
          setEditar(true);
          //Alert succes  
        }else{
          setError(data.message);
          console.log('Error al actualizar datos: ',error);
        }
        //Incompleta
    } catch (error) {
      console.log(error, " catch");
      setError('Error editar in. Please try again later.');
    }
  };


  function openModal(){
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
                    navigate('/'+params.row.Nombre);
                    console.log(params.row.Nombre)
                  }}
              >
                  Mas info
              </Button>
          </strong>
      )
    }

    const renderEditarButton =  (params) => {
        return (
            <strong>
                <Button
                    style={{ backgroundColor: verdeF}}
                    variant="contained"
                    color= "secondary"
                    size="small"
                    onClick={async()=>{
                      const res =  await axios.get("http://localhost:8800/nombres/"+params.row.IdArbol);
                      setModalData(Object.values(res.data));
                      setNombre(modalData[0]);
                      setNombreCientifico(modalData[1]);
                      setNombreComun(modalData[2]);
                      setFamilia(modalData[3]);
                      setAltura(modalData[4]);
                      setDiametro(modalData[5]);
                      setCopa(modalData[6]);
                      setCorteza(modalData[7]);
                      setColorflor(modalData[8]);
                      setTipoflor(modalData[9]);
                      setEpoca(modalData[10]);
                      setTipoFruto(modalData[11]);
                      setForma(modalData[12]);
                      setTamanio(modalData[13]);
                      setColorfruto(modalData[14]);
                      setDistribucion(modalData[15]);
                      setClima(modalData[16]);
                      setAltitud(modalData[17]);
                      setSuelo(modalData[18]);
                      setTipohoja(modalData[19]);
                      setLongitud(modalData[20]);
                      setFollaje(modalData[21]);
                      setMadera(modalData[22]);
                      setForraje(modalData[23]);
                      setMedicinal(modalData[24]);
                      setOrna(modalData[25]);
                      setIdArbol(params.row.IdArbol);
                      console.log("1.Boton Editar: "+IdArbol)
                      openModal();
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
                    onClick={() =>eliminar(params.row.IdArbol)}
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

    

  return (
      <>
        <div style={{ height: 400, width: '60%'}}>
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
          <Stack spacing={2}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={valueTab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                    <Tab label="Nombres" value="1" />
                    <Tab label="Especificaciones" value="2" />
                    <Tab label="Flores" value="3" />
                    <Tab label="Frutos" value="4" />
                    <Tab label="Habitat" value="5" />
                    <Tab label="Hojas" value="6" />
                    <Tab label="Usos" value="7" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <form onSubmit={editarnombres}>
                    <Grid container spacing={2}>
                      <Grid>
                        <TextField 
                              id="nombre" 
                              label="Nombre" 
                              variant="outlined" 
                              defaultValue={modalData[0]} 
                              helperText="Obligatorio" 
                              onChange={(e) => setNombre(e.target.value)}
                              required/>
                      </Grid>
                      <Grid>
                        <TextField 
                              id="nombrecie" 
                              label="Nombre cientifico" 
                              defaultValue={modalData[1]} 
                              helperText="Obligatorio"
                              onChange={(e) => setNombreCientifico(e.target.value)} 
                              required/>
                      </Grid>
                      <Grid>
                        <TextField 
                              id="nombrecom"
                              label="Nombre comun" 
                              defaultValue={modalData[2]} 
                              helperText="Obligatorio" 
                              onChange={(e) => setNombreComun(e.target.value)} 
                              required/>
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}>
                      Enviar
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value="2">
                  <form onSubmit={editarespecif}>
                    <Grid container spacing={2}>
                      <Grid>
                        <TextField 
                            id="familia" 
                            label="Familia" 
                            variant="outlined" 
                            defaultValue={modalData[3]} 
                            helperText="Obligatorio" 
                            onChange={(e) => setFamilia(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField 
                            id="altura" 
                            label="Altura" 
                            defaultValue={modalData[4]} 
                            helperText="Obligatorio" 
                            onChange={(e) => setAltura(e.target.value)} />
                      </Grid>
                      <Grid>
                        <TextField 
                            id="diametro" 
                            label="Diametro tronco" 
                            defaultValue={modalData[5]} 
                            helperText="Obligatorio" 
                            onChange={(e) => setDiametro(e.target.value)} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid>
                          <TextField 
                              id="copa" 
                              label="Copa" 
                              defaultValue={modalData[6]} 
                              helperText="Obligatorio" 
                              onChange={(e) => setCopa(e.target.value)} />
                      </Grid>
                      <Grid>
                        <TextField 
                              id="corteza" 
                              label="Corteza" 
                              defaultValue={modalData[7]} 
                              helperText="Obligatorio" 
                              onChange={(e) => setCorteza(e.target.value)} />
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                      Enviar
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value="3">
                  <form onSubmit={editarflor}>
                    <Grid container spacing={2}>
                      <Grid>
                        <TextField id="colorflor" label="Color" variant="outlined" defaultValue={modalData[8]} helperText="Obligatorio" onChange={(e) => setColorflor(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField id="tipoflor" label="Tipo" defaultValue={modalData[9]} helperText="Obligatorio" onChange={(e) => setTipoflor(e.target.value)} />
                      </Grid>
                      <Grid>
                        <TextField id="epoca" label="Epoca floracion" defaultValue={modalData[10]} helperText="Obligatorio" onChange={(e) => setEpoca(e.target.value)} />
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                      Enviar
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value="4">
                    <Grid container spacing={2}>
                      <Grid>
                        <TextField id="tipofruto" label="Tipo" variant="outlined" defaultValue={modalData[11]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField id="forma" label="Forma" defaultValue={modalData[12]} helperText="Obligatorio" onChange={(e) => setNombreCientifico(e.target.value)} />
                      </Grid>
                      <Grid>
                        <TextField id="tamanio" label="Tamaño" defaultValue={modalData[13]} helperText="Obligatorio" onChange={(e) => setNombreComun(e.target.value)} />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid>
                        <TextField id="colorfruto" label="Color" variant="outlined" defaultValue={modalData[14]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                      Enviar
                    </Button>
                </TabPanel>
                <TabPanel value="5">
                    <Grid container
                        direction='column'
                        spacing={2}>
                      <Grid>
                        <TextField fullWidth id="distribucion" label="Distribución" variant="outlined" defaultValue={modalData[15]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid >
                        <TextField fullWidth id="clima" label="Clima" variant="outlined" defaultValue={modalData[16]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField fullWidth id="altitud" label="Altitud" variant="outlined" defaultValue={modalData[17]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField fullWidth id="suelo" label="Suelo" variant="outlined" defaultValue={modalData[18]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                        Enviar
                      </Button>
                </TabPanel>
                <TabPanel value="6">
                <Grid container spacing={2}>
                      <Grid>
                        <TextField id="tipohoja" label="Tipo" variant="outlined" defaultValue={modalData[19]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField id="longitud" label="Longitud" defaultValue={modalData[20]} helperText="Obligatorio" onChange={(e) => setNombreCientifico(e.target.value)} />
                      </Grid>
                    </Grid>
                    <Grid container direction='column' spacing={2}>
                      <Grid>
                        <TextField fullWidth id="follaje" label="Follaje" variant="outlined" defaultValue={modalData[21]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                      Enviar
                    </Button>
                </TabPanel>
                <TabPanel value="7">
                <Grid container
                        direction='column'
                        spacing={2}>
                      <Grid>
                        <TextField fullWidth id="madera" label="Madera" variant="outlined" defaultValue={modalData[22]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid >
                        <TextField fullWidth id="forraje" label="Forraje" variant="outlined" defaultValue={modalData[23]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField fullWidth id="medicinal" label="Medicinal" variant="outlined" defaultValue={modalData[24]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                      <Grid>
                        <TextField fullWidth id="ornamental" label="Ornamental" variant="outlined" defaultValue={modalData[25]} helperText="Obligatorio" onChange={(e) => setNombre(e.target.value)}/>
                      </Grid>
                    </Grid>
                    <Button
                            type='submit'
                            variant="contained" 
                            endIcon={<SendIcon />}
                            size="small"
                            style={{ marginTop: 10 }}
                        >
                        Enviar
                      </Button>
                </TabPanel>
              </TabContext>
            </Box>
            
          </Stack>
      </Modal>

      </>
  );
}
