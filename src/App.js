import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import CommunityDetails from './routes/CommunityDetails';
import Aboutme from "./routes/Aboutme";

function App() {
    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<CommunityDetails/>}/>
                    <Route path="/contact" element={<Aboutme/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
