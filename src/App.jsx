import Nav from "./components/Nav.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Loader from "./components/Loader.jsx";



function App() {
    return (
        <AnimatePresence>
            <Loader/>


        </AnimatePresence>
    );
}

export default App
