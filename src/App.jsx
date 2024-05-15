import Nav from "./components/Nav.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/Landing.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Routes>
                     <Route path='/' element={<LandingPage />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App
