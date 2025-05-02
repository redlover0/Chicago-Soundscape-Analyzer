import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import CommunityDetails from './routes/CommunityDetails';
import Aboutme from "./routes/Aboutme";
import CompareAll from "./routes/CompareAll";
import CommunitiesDataContextProvider from "./context/communitiesContext";

function App() {
    return (
        // allows me to share data accross mulitple componets
        <CommunitiesDataContextProvider>
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/community" element={<CommunityDetails/>}/>
                    <Route path="/about" element={<Aboutme/>}/>
                    <Route path="/compareall" element={<CompareAll/>}/>
                </Routes>
            </Router>
        </div>
        </CommunitiesDataContextProvider>
    );
}

export default App;
