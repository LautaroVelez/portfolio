import LandingPage from "./pages/landing/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import ProjectInfoSuic from "./pages/ProjectInfoSuic/ProjectInfoSuic.jsx";
import { useEffect } from "react";
import Lenis from "lenis";
import ProjectInfoFinan from "./pages/ProjectInfoFinan/ProjectInfoFinan.jsx";
import ProjectInfoCons from "./pages/ProjectInfoCons/ProjectInfoCons.jsx";

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
                    <Route path='/portfolio' element={<LandingPage key={LandingPage} />} />
                    <Route path='/portfolio/projectsuicidal' element={<ProjectInfoSuic />} />
                    <Route path='/portfolio/projectfinanciation' element={<ProjectInfoFinan />} />
                    <Route path='/portfolio/projectconstruction' element={<ProjectInfoCons />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}
