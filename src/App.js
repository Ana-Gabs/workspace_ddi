// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ---- Paginas ------
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import FontSizeDemo from './components/fuentes/FontSizeDemo.jsx';
import FlexDemo from './components/flexbox/FlexDemo.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/" element={<FontSizeDemo />} />
        <Route path="/flexdemo" element={<FlexDemo />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
