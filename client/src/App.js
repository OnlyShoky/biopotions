import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BodyPartDetails from './pages/BodyPartDetails';
import AilmentDetails from './pages/AilmentDetails';
import Favorites from './pages/Favorites';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bodypart/:name" element={<BodyPartDetails />} />
                    <Route path="/ailment/:name" element={<AilmentDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
