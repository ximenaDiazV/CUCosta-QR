import React,{ useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Modal from 'react-modal';
import Stack from '@mui/system/Stack';
import TextField from '@mui/material/TextField';
import { UpdateArbol, 
        UpdateArbolE, 
        UpdateArbolFlor,
        UpdateArbolFruto,
        UpdateArbolHabitat,
        UpdateArbolHojas, 
        UpdateArbolU } from '../components/index/Editar';
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [plantas, setPlantas] = useState([]);
  const navigate = useNavigate();
  const [eliminado, setEliminar] = useState(false);
  const [editado, setEditar] = useState(false);

  // States for modal fields
  const [nombre, setNombre] = useState('');
  const [nombreCientifico, setNombreCientifico] = useState('');
  const [nombreComun, setNombreComun] = useState('');
  const [familia, setFamilia] = useState('');
  const [altura, setAltura] = useState('');
  const [diametro, setDiametro] = useState('');
  const [copa, setCopa] = useState('');
  const [corteza, setCorteza] = useState('');
  const [colorflor, setColorflor] = useState('');
  const [tipoflor, setTipoflor] = useState('');
  const [epoca, setEpoca] = useState('');
  const [tipofruto, setTipoFruto] = useState('');
  const [forma, setForma] = useState('');
  const [tamanio, setTamanio] = useState('');
  const [colorfruto, setColorfruto] = useState('');
  const [distribucion, setDistribucion] = useState('');
  const [clima, setClima] = useState('');
  const [altitud, setAltitud] = useState('');
  const [suelo, setSuelo] = useState('');
  const [tipohoja, setTipohoja] = useState('');
  const [longitud, setLongitud] = useState('');
  const [follaje, setFollaje] = useState('');
  const [madera, setMadera] = useState('');
  const [forraje, setForraje] = useState('');
  const [medicinal, setMedicinal] = useState('');
  const [orna, setOrna] = useState('');
  const [IdArbol, setIdArbol] = useState('');
  const [error, setError] = useState('');
  const [valueTab, setValueTab] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  useEffect(() => {
    const fetchAllPlantas = async () => {
      try {
        const res = await axios.get("http://localhost:8800/plantas");
        setPlantas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPlantas();
    if (eliminado || editado) {
      setEliminar(false);
      setEditar(false);
    }
  }, [eliminado, editado]);

  const eliminar = async (id) => {
    try {
      await axios.get("http://localhost:8800/eliminar/"+id);
      setEliminar(true);
    } catch (error) {
      console.log('Error al eliminar: ' + error);
    }
  };

  const editarnombres = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbol(nombre, nombreCientifico, nombreComun, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarespecif = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolE(familia, altura, diametro, copa, corteza, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarflor = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolFlor(colorflor, tipoflor, epoca, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarfruto = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolFruto(tipofruto, forma, tamanio, colorfruto, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarhabitat = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolHabitat(distribucion, clima, altitud, suelo, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarhojas = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolHojas(tipohoja, longitud, follaje, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const editarusos = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await UpdateArbolU(madera, forraje, medicinal, orna, IdArbol);
      if (data.success) {
        setEditar(true);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error editar in. Please try again later.');
    }
  };

  const openModal = async (idArbol) => {
    try {
      const res = await axios.get("http://localhost:8800/nombres/"+idArbol);
      const data = Object.values(res.data);
      setModalData(data);
      setNombre(data[0]);
      setNombreCientifico(data[1]);
      setNombreComun(data[2]);
      setFamilia(data[3]);
      setAltura(data[4]);
      setDiametro(data[5]);
      setCopa(data[6]);
      setCorteza(data[7]);
      setColorflor(data[8]);
      setTipoflor(data[9]);
      setEpoca(data[10]);
      setTipoFruto(data[11]);
      setForma(data[12]);
      setTamanio(data[13]);
      setColorfruto(data[14]);
      setDistribucion(data[15]);
      setClima(data[16]);
      setAltitud(data[17]);
      setSuelo(data[18]);
      setTipohoja(data[19]);
      setLongitud(data[20]);
      setFollaje(data[21]);
      setMadera(data[22]);
      setForraje(data[23]);
      setMedicinal(data[24]);
      setOrna(data[25]);
      setIdArbol(idArbol);
      setIsOpen(true);
    } catch (err) {
      console.log('Error al abrir el modal: ' + err);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const renderDetailsButton = (params) => (
    <strong>
      <Button
        variant="contained"
        size="small"
        style={{ backgroundColor: verdeF }}
        onClick={() => navigate('/' + params.row.Nombre)}
      >
        Más info
      </Button>
    </strong>
  );

  const renderEditarButton = (params) => (
    <strong>
      <Button
        style={{ backgroundColor: verdeF }}
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => openModal(params.row.IdArbol)}
      >
        Editar
      </Button>
    </strong>
  );

  const renderDeleteButton = (params) => (
    <strong>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        color="error"
        size="small"
        onClick={() => eliminar(params.row.IdArbol)}
      >
        Eliminar
      </Button>
    </strong>
  );

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
      field: 'ButonEliminar',
      headerName: 'Eliminar',
      width: 150,
      renderCell: renderDeleteButton,
      disableClickEventBubbling: true,
    },
  ];

  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        rows={plantas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(plantas) => plantas.IdArbol}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Editar Modal"
      >
        <Box>
          <h2>Editar información de {nombre}</h2>
          <TabContext value={valueTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChangeTab} aria-label="tabs">
                <Tab label="Nombres" value="1" />
                <Tab label="Especificaciones" value="2" />
                <Tab label="Flor" value="3" />
                <Tab label="Fruto" value="4" />
                <Tab label="Habitat" value="5" />
                <Tab label="Hojas" value="6" />
                <Tab label="Usos" value="7" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <form onSubmit={editarnombres}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Nombre Cientifico"
                    value={nombreCientifico}
                    onChange={(e) => setNombreCientifico(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Nombre Comun"
                    value={nombreComun}
                    onChange={(e) => setNombreComun(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Nombres
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="2">
              <form onSubmit={editarespecif}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Familia"
                    value={familia}
                    onChange={(e) => setFamilia(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Diametro"
                    value={diametro}
                    onChange={(e) => setDiametro(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Copa"
                    value={copa}
                    onChange={(e) => setCopa(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Corteza"
                    value={corteza}
                    onChange={(e) => setCorteza(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Especificaciones
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="3">
              <form onSubmit={editarflor}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Color Flor"
                    value={colorflor}
                    onChange={(e) => setColorflor(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Tipo Flor"
                    value={tipoflor}
                    onChange={(e) => setTipoflor(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Epoca"
                    value={epoca}
                    onChange={(e) => setEpoca(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Flor
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="4">
              <form onSubmit={editarfruto}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Tipo"
                    value={tipofruto}
                    onChange={(e) => setTipoFruto(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Forma"
                    value={forma}
                    onChange={(e) => setForma(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Tamaño"
                    value={tamanio}
                    onChange={(e) => setTamanio(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Color"
                    value={colorfruto}
                    onChange={(e) => setColorfruto(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Fruto
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="5">
              <form onSubmit={editarhabitat}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Distribución"
                    value={distribucion}
                    onChange={(e) => setDistribucion(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Clima"
                    value={clima}
                    onChange={(e) => setClima(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Altitud"
                    value={altitud}
                    onChange={(e) => setAltitud(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Suelo"
                    value={suelo}
                    onChange={(e) => setSuelo(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Habitat
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="6">
              <form onSubmit={editarhojas}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Tipo"
                    value={tipohoja}
                    onChange={(e) => setTipohoja(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Longitud"
                    value={longitud}
                    onChange={(e) => setLongitud(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Follaje"
                    value={follaje}
                    onChange={(e) => setFollaje(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Hoja
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
            <TabPanel value="7">
              <form onSubmit={editarusos}>
                <Stack direction="column" spacing={2}>
                  <TextField
                    label="Madera"
                    value={madera}
                    onChange={(e) => setMadera(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Forraje"
                    value={forraje}
                    onChange={(e) => setForraje(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Medicinal"
                    value={medicinal}
                    onChange={(e) => setMedicinal(e.target.value)}
                    variant="outlined"
                  />
                  <TextField
                    label="Ornamento"
                    value={orna}
                    onChange={(e) => setOrna(e.target.value)}
                    variant="outlined"
                  />
                  <Button variant="contained" type="submit" style={{ backgroundColor: verdeF }}>
                    Editar Usos
                  </Button>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </Stack>
              </form>
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
    </div>
  );
}
