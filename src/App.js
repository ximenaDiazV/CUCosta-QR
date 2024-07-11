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


function App() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

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
                <Route path="/glosario-botanico" element={<GlosarioBotanico />} />
                <Route path="/arbol" element={<Arbol />}/>
                <Route path="/nuevoarbol" element={<NewArbol />}/>
                <Route 
                    path="/dashboard" 
                    element={ user ? <Dashboard user={user} token={token} /> : <Navigate to="/"/> }
                />
            </Routes>
        </Router>
    );
}


export default App;
