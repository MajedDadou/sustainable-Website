import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navigation.css';

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="sticky-navigation">
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-line ${isActive ? 'active' : ''}`}></div>
        <div className={`burger-line ${isActive ? 'active' : ''}`}></div>
        <div className={`burger-line ${isActive ? 'active' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/cases" onClick={toggleMenu}>Cases</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/om-os" onClick={toggleMenu}>Om Os</Link></li>
        <li><Link to="/kontakt" onClick={toggleMenu}>Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
