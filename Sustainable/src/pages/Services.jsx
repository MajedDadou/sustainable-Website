import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import PackageCard from '../Component/PackageCard';
function Services() {
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
  return (


    <>
      <Header title="Cases" />
      {/* Add content related to your services */}
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


    </>
  );
}

export default Services;
