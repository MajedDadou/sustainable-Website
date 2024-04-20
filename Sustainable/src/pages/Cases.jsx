import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import PictureWithText from '../Component/PictureWithText';
import TitleWithText from '../Component/TitleWithText';

import '../Styles/cases.css'; // Import the CSS file for styling
import Banner from '../Component/banner';
import ImageTextComponent from '../Component/ImageTextComponent';
import Footer from '../Component/Footer';

function Cases() {
  return (
    <>
      <Header title="Cases" />
      <div className="pictures-container">
        <PictureWithText
          src="src/images/havnaer.png"
          alt="Description for picture 1"
          title="HAVNÆRS NYE DESIGN"
          subText="Her har vi implementeret og forbedret løsninger, for at få et mere bæredygtigt webdesign."
          customStyleDiv={{ display: 'flex', width: '55%', height: 'auto', }}
          customStyleImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}

        />

        <PictureWithText
          src="src/images/havnaer-old.png"
          alt="Description for picture 2"
          title="GAMLE DESIGN"
          subText="Her ser vi deres gamle design. Som var mindre bæredygtigt "
          customStyleDiv={{ display: 'flex', width: '40%', height: 'auto', }}
          customStyleImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}

        />
      </div>

      <div className="title-holder">
        <TitleWithText
          titleText="LØSNINGER DER GØR EN FORSKEL"
          subText="Restaurant Havnær stod over for en udfordring, der gik imod deres kerneværdier om bæredygtighed. Deres hjemmeside, som er en essentiel del af deres forretningsdrift, var ikke så bæredygtig som de godt kunne tænke sig at den var. Problemet var at der var, for store billeder, videoer og ineffektiv kode. Performancen af deres hjemmeside kunne forbedres og det er det vi har hjulpet dem med. "
          customStyle={{}}
        />

      </div>
      <Banner src="src/images/IMG_3051.avif" alt="asd" type="image" />


      <ImageTextComponent
        src="src/images/IMG_3051.avif"
        alt="Description for image"
        subText="Vi trådte til for at hjælpe dem med at omdanne deres digitale tilstedeværelse til noget, der var mere i tråd med deres værdier. Ved hjælp af værktøjer som Ecograder og Lighthouse identificerede vi problemområderne og implementerede løsninger, der ikke kun forbedrede ydeevnen, men også gjorde hjemmesiden mere bæredygtig."
        order="left"
        customStyleP={{ marginRight: '40%',  }}
      />

      <ImageTextComponent
        src="src/images/IMG_3051.avif"
        alt="Description for image"
        subText="Resultatet var en hurtigere, mere miljøvenlig  og effektiv hjemmeside, der afspejlede Restaurant Havnærs forpligtelse til bæredygtighed i alle aspekter af deres forretning. Blot ved at ændre layout i form af reduceringen af multimedie og indhold"
        order="right"
        customStyleP={{ marginLeft: '40%',  }}
      />



<Footer />


    </>


  );
}

export default Cases;
