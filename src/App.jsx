import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/landing/Landing.jsx";
import ProjectInfoSuic from "./pages/ProjectInfoSuic/ProjectInfoSuic.jsx";
import ProjectInfoFinan from "./pages/ProjectInfoFinan/ProjectInfoFinan.jsx";
import ProjectInfoCons from "./pages/ProjectInfoCons/ProjectInfoCons.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lenis from "lenis";
import Stairs from "./assets/utils/Stairs.jsx";
import ProjectInfoCV from "./pages/ProjectInfoCV/ProjectInfoCV.jsx";
import ProjectGroovy from "./pages/ProjectGroovy/ProjectGroovy.jsx";
import ProjectFindWork from "./pages/ProjectFindWork/ProjectFindWork.jsx";

export default function App() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    const location = useLocation();

    return (
        <div className='main'>
            <AnimatePresence mode='wait'>

                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Navigate to="/portfolio" />} />
                    <Route path='/portfolio' element={<LandingPage />} />
                    <Route path='/projectsuicidal' element={<ProjectInfoSuic />} />
                    <Route path='/projectfinanciation' element={<ProjectInfoFinan />} />
                    <Route path='/projectconstruction' element={<ProjectInfoCons />} />
                    <Route path='/projectcv' element={<ProjectInfoCV />} />
                    <Route path='/groovy' element={<ProjectGroovy />} />
                    <Route path='/findwork' element={<ProjectFindWork />} />
                </Routes>

            </AnimatePresence>
        </div>
    );
}