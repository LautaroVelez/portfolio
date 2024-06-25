import LandingPage from "./pages/landing/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnimatePresence} from "framer-motion";
import {Route, Routes} from 'react-router-dom';
import ProjectInfoSuic from "./pages/ProjectInfoSuic/ProjectInfoSuic.jsx";

export default function App() {

    return (
        <div className='main'>
            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path={'/'} element={<LandingPage key={LandingPage}/>}/>
                    <Route path={'/projectSuicidal'} element={<ProjectInfoSuic/>}/>
                    <Route path={'/projectfinanciation'} element={<ProjectInfoSuic/>}/>
                    <Route path={'/projectconstruction'} element={<ProjectInfoSuic/>}/>
            </Routes>
        </AnimatePresence>
</div>

)
    ;
}


