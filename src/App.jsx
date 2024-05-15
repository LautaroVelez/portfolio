import Nav from "./components/Nav.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./pages/Intro.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Intro/>
                <Nav/>
                <Routes>
                     <Route path='/' element={<LandingPage />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App
