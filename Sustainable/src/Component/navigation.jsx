import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
function Navigation() {
  return (
    <nav className="sticky-navigation">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cases">Cases</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/om-os">Om Os</Link></li>
        <li><Link to="/kontakt">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
