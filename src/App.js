import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar.js";
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
export default App