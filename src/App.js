// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/index/NavBar_index";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Explore from "./pages/Explore";
import GlosarioBotanico from "./pages/GlosarioBotanico";
import Acerca from "./pages/Acerca";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/acerca" element={<Acerca />} />
                <Route path="/glosario-botanico" element={<GlosarioBotanico />} />
            </Routes>
        </Router>
    );
}

export default App;
