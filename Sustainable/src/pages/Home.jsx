import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import Title from '../Component/Title';
import Banner from '../Component/banner';

function Home() {
  return (
    <>
      <Header title="Vi hjælper virksomheder med at implementere  en grøn profil
online"/>
  <Banner src="src/images/IMG_2941.avif" type="image" />

      {/* Your home page content goes here */}
    </>
  );
}

export default Home;
