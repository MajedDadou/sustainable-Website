import React from 'react';
import Contact from '../Component/Contact'; // Assuming the Contact component is located in a 'Component' directory within your 'src' directory
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
function Kontakt() {
  return (


    <>
      <Header title="Kontakt"/>
      
      <h1>Contact Us</h1>
      <Contact /> {/* Render the Contact component here */}
      {/* Add any additional content related to your contact page */}
    </>
  );
}

export default Kontakt;
