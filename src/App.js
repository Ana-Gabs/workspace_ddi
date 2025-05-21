// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ---- Paginas ------
import ProductsPage from './features/Products/pages/ProductsPage.jsx';
/*
import FontSizeDemo from './components/fuentes/FontSizeDemo.jsx';
import FlexDemo from './components/flexbox/FlexDemo.jsx';
import GridDemo from './components/grid/GridDemo.jsx';
import LayoutDemo from './components/comparative/LayoutDemo.jsx';
import ExampleDemo from './components/example/ExampleDemo.jsx';
*/

function App() {
  return (
    <Router>
      <Routes>
        {<Route path="/" element={<ProductsPage />} />}
        {/*
        <Route path="/" element={<FontSizeDemo />} />
        <Route path="/flexdemo" element={<FlexDemo />} />
        <Route path="/griddemo" element={<GridDemo />} />
        <Route path="/layoutdemo" element={<LayoutDemo />} />
        <Route path="/exampledemo" element={<ExampleDemo />} />
        */}
        {/*
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        */ }
      </Routes>
    </Router>
  );
}

export default App;
