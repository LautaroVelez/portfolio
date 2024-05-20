import LandingPage from "./pages/landing/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnimatePresence} from "framer-motion";
import Loader from "./components/Loader.jsx";


export default function App() {

    return (
        <div className='main'>
            <AnimatePresence mode='wait'>
                <Loader key={Loader}></Loader>
                <LandingPage key={LandingPage}/>

            </AnimatePresence>
        </div>

    );
}


