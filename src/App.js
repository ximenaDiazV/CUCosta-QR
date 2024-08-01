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
import axios from 'axios';


function App() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [plants, setplants] = useState([])

    useEffect(()=>{
        const fecthAllplantas = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/plantas")
                setplants(res.data);
                console.log(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllplantas()
    },[])


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
            <Navbar setUser={setUser}  setToken={setToken} user={user} plantas={plants}/>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/acerca" element={<Acerca />} />
                <Route path="/glosario-botanico" element={<GlosarioBotanico plantas={plants} />} />
                <Route path="/arbol" element={<Arbol />}/>
                <Route path="/nuevoarbol" element={<NewArbol />}/>
                <Route 
                    path="/dashboard" 
                    element={ user ? <Dashboard user={user} token={token} /> : <Navigate to="/"/> }
                />
                {plants.map((planta) => (
                    <Route
                        key={planta.IdArbol}
                        path={"/"+planta.Nombre} // Ruta basada en el campo 'pagina' de cada planta
                        element={<PlantTemplate nombre={planta.Nombre} imagen={"/"+planta.IdArbol+".jpg"} id={planta.IdArbol} />} // Pasa props a la plantilla de detalle
                    />
                ))}
            </Routes>
        </Router>
    );
}


export default App;
