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
import About from "./pages/About";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Explore />} />
                <Route path="/about" element={<About />} />
                
            </Routes>
        </Router>
    );
}

export default App;
