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


function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user data:', error);
                localStorage.removeItem('user'); // Eliminar datos corruptos
            }
        }
    }, []);

    return (
        <Router>
            <Navbar setUser={setUser} />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/acerca" element={<Acerca />} />
                <Route path="/glosario-botanico" element={<GlosarioBotanico />} />
                <Route path="/arbol" element={<Arbol />}/>
                <Route 
                    path="/dashboard" 
                    element={ user ? <Dashboard user={user} /> : <Navigate to="/"/> }
                />
            </Routes>
        </Router>
    );
}


export default App;
