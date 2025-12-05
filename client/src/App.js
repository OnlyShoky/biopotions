import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BodyPartDetails from './pages/BodyPartDetails';
import AilmentDetails from './pages/AilmentDetails';
import IngredientDetails from './pages/IngredientDetails';
import Favorites from './pages/Favorites';
import About from './pages/About';

import TopIngredients from './pages/TopIngredients';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/top-ingredients" element={<TopIngredients />} />
                    <Route path="/bodypart/:name" element={<BodyPartDetails />} />
                    <Route path="/ailment/:name" element={<AilmentDetails />} />
                    <Route path="/ingredient/:id" element={<IngredientDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
