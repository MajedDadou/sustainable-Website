import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './pages/Home';
import Cases from './pages/Cases';
import Services from './pages/Services';
import OmOs from './pages/OmOs';
import Kontakt from './pages/Kontakt';
import Navigation from './Component/navigation';
import Header from './Component/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/cases" component={Cases} />
          <Route path="/services" component={Services} />
          <Route path="/om-os" component={OmOs} />
          <Route path="/kontakt" component={Kontakt} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
