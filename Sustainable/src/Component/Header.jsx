// Header.jsx
import React from 'react';
import Title from './Title';
import './Header.css'; // Import CSS file for styling
import Navigation from './navigation';
import Logo from './Logo.jsx';

function Header() {
  return (
    <header className="header">
      <Logo></Logo>
      <Title />
      <Navigation />
    </header>
  );
}

export default Header;
