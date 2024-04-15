import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cases from './pages/Cases';
import Services from './pages/Services';
import OmOs from './pages/OmOs';
import Kontakt from './pages/Kontakt';
import Navigation from './Component/navigation';
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/services" element={<Services />} />
          <Route path="/om-os" element={<OmOs />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
