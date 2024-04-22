import React from 'react';
import Contact from '../Component/Contact'; // Assuming the Contact component is located in a 'Component' directory within your 'src' directory
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import PackageCard from '../Component/PackageCard';
import Button from '../Component/button';
import PictureWithText from '../Component/PictureWithText';
import Footer from '../Component/Footer';
function Kontakt() {
  const package1Points = [
    'SoMe strategi/rådgivning vedr. hyppighed og indhold',
    'Elementer fra Standard-Pakken',
    'Elementer fra Service-Pakken',
  ];
  const package2Points = [
    'Brugervenlig hjemmeside',
    'Responsivt design - alle elektroniske enheder',
    'SEO optimering og synlighed på Google',
    'Redesign af elementer og rebranding',

  ];
  const package3Points = [
    'Sikring af online website, og at løsningen fungerer optimalt',
    'Opdateringer løbende',
    'Backup af din hjemmeside',
    'Overvågning og Sikkerhed',
    'Skræddersyet kundeservice. Vi står til rådighed',
  ];

  const windowWidth = window.innerWidth;

const customStyleDiv = {
  display: 'flex',
  width: windowWidth > 770 ? '20%' : '100%', // Adjust the width based on the window width
  margin: windowWidth > 770 ? '1%' : '0',
  height: 'fit-content',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
};

  return (


    <>
      <Header title="KONTAKT" />
      <div className='package-holder'>
        <PackageCard
          title="FULL-SERVICE"
          price="15999"
          monthlyPrice="(399 DKK pr. md.)"
          bulletPoints={package1Points}
        />
        <PackageCard
          title="STANDARD-PAKKEN"
          price="9995"
          monthlyPrice="(pr. md.)"
          bulletPoints={package2Points}
        />
        <PackageCard
          title="SERVICE-PAKKEN"
          price="599"
          monthlyPrice="(pr. md.)"
          bulletPoints={package3Points}
        />

      </div>


      <Contact />

      <div className="pictures-container">
        <PictureWithText
          src="src/images/Matilde.avif"
          subtitle="Senior UI Designer "
          alt="Description for picture 1"
          title="Matilde"
          subText="Denne rolle indebærer typisk design af layout, interaktioner og visuelle elementer med fokus på brugervenlighed og en konsistent brandoplevelse"
          customStyleImg={{ width: '100%', height: 'fit-content', }}
          customStyleDiv={customStyleDiv}

       />

        <PictureWithText
          src="src/images/Jakob.avif"
          subtitle="SEO chef - UX Developer"

          alt="Description for picture 2"
          title="Jakob"
          subText="Disse roller indebærer optimering af hjemmesider og fokus på at skabe brugervenlige brugergrænseflader"
          customStyleImg={{ width: '100%', height: 'fit-content', }}
          customStyleDiv={customStyleDiv}

        />

        <PictureWithText
          src="src/images/Majed.avif"
          subtitle="Front/Back end Developer"

          alt="Description for picture 3"
          title="Majed"
          subText="Disse roller indebærer udvikling af interaktioner  og databasestrukturer til applikationer vha. webteknologier"
          customStyleImg={{ width: '100%', height: 'fit-content', }}
          customStyleDiv={customStyleDiv}

         />

        <PictureWithText
          src="src/images/Jeppe.avif"
          subtitle="Projekt Manager"

          alt="Description for picture 3"
          title="Jeppe"
          subText="Denne rolle indebærer styring af planlægning, implementering og kommunikation for at sikre casens succes"
          customStyleImg={{ width: '100%', height: 'fit-content', }}
          customStyleDiv={customStyleDiv}

         />
      </div>
      <Footer />

    </>
  );
}

export default Kontakt;
