// Header.jsx
import React from 'react';
import './Header.css'; // Import CSS file for styling
import Navigation from './navigation';
import Logo from './Logo.jsx';
import Title from './Title'; // Import the Title component


function Header({ title }) { // Destructure the title prop here
  return (
    <header className="header">
    <div className="left-section">
      <Logo />
      <Title titleText={title} />
    </div>
    <div className='right-section'>
    <Navigation />

    </div>
  </header>
  );
}

export default Header;
