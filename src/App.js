// filename -App.js

import React, { useState, useEffect }  from "react";
import "./App.css";
import Navbar from "./components/index/NavBar_index";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Principal from "./pages/Principal";
import GlosarioBotanico from "./pages/GlosarioBotanico";
import Acerca from "./pages/Acerca";
import Arbol from "./pages/Arbol";
import Dashboard from './pages/Dashboard';
import NewArbol from './pages/NuevoArbol';
import PlantTemplate from "./pages/PlantTemplate"; 


function App() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const plantas = [
        { id: 1, nombre: 'Ceiba Pentandra', imagen: '/CeibaPentandra.jpg', pagina: '/planta/ceiba-pentandra' },
        { id: 2, nombre: 'Ficus Benjamina', imagen: '/FicusBenjamina.jpg', pagina: '/planta/ficus-benjamina' },
        { id: 3, nombre: 'Delonix Regia', imagen: '/DelonixRegia2.jpg', pagina: '/planta/delonix-regia' },
        { id: 4, nombre: 'Tabebuia Rosea', imagen: '/TabebuiaRosea.jpg', pagina: '/planta/tabebuia-rosea' },
        { id: 5, nombre: 'Suace Llorón', imagen: '/sauceLloron.jpg', pagina: '/planta/suace-lloron' },
        { id: 6, nombre: 'Prunus Dulcis', imagen: '/PrunusDulcis(Almond)2.jpg', pagina: '/planta/prunus-dulcis' },
        { id: 7, nombre: 'Ceiba Pentandra2', imagen: '/CeibaPentandra.jpg', pagina: '/CeibaPentandra' },
        { id: 8, nombre: 'Ficus Benjamina2', imagen: '/FicusBenjamina.jpg', pagina: '/FicusBenjamina' },
        { id: 9, nombre: 'Delonix Regia2', imagen: '/DelonixRegia2.jpg', pagina: '/DelonixRegia' },
        { id: 10, nombre: 'Tabebuia Rosea2', imagen: '/TabebuiaRosea.jpg', pagina: '/TabebuiaRosea' },
        { id: 11, nombre: 'Suace Llorón2', imagen: '/sauceLloron.jpg', pagina: '/SauceLloron' },
        { id: 12, nombre: 'Prunus Dulcis2', imagen: '/PrunusDulcis(Almond)2.jpg', pagina: '/PrunusDulcis' },
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
                setToken(JSON.parse(storedToken));
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                localStorage.removeItem('user');
                localStorage.removeItem('token'); // Eliminar datos corruptos
            }
        }
    }, []);

    return (
        <Router>
            <Navbar setUser={setUser}  setToken={setToken} user={user} />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/acerca" element={<Acerca />} />
                <Route path="/glosario-botanico" element={<GlosarioBotanico plantas={plantas} />} />
                <Route path="/arbol" element={<Arbol />}/>
                <Route path="/nuevoarbol" element={<NewArbol />}/>
                <Route 
                    path="/dashboard" 
                    element={ user ? <Dashboard user={user} token={token} /> : <Navigate to="/"/> }
                />
                {plantas.map((planta) => (
                    <Route
                        key={planta.id}
                        path={planta.pagina} // Ruta basada en el campo 'pagina' de cada planta
                        element={<PlantTemplate nombre={planta.nombre} imagen={planta.imagen} />} // Pasa props a la plantilla de detalle
                    />
                ))}
            </Routes>
        </Router>
    );
}


export default App;
