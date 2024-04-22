import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import PackageCard from '../Component/PackageCard';
import TitleWithTwoTextsAndButtons from '../Component/TitleWithTwoTextsAndButtons';
import Button from '../Component/button';
import TitleWithText from '../Component/TitleWithText';
import Banner from '../Component/banner';
import TitleImageText from '../Component/TitleImageText';
import BannerImage from '../images/WorkCom.avif';
import Footer from '../Component/Footer';
import lottiedeskgenbrug from '../lottie/deskgenbrug.json';


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

        <Button
          button1Text="KONTAKT OS"
          button1Link="/kontakt"
          button2Text="SE CASE"
          button2Link="/cases"

        />
      </div>



      <TitleImageText
        titleText="LØSNINGER DER GØR EN FORSKEL"
        subText1="Vi er et mediebureau med viden om jeres kunders sweet spot, og udvikler og skaber nye digitale løsninger. Når I henvender jer via. bookningsformularen sætter vi klare mål med jer og eksekvere med præcision for at opnå lige det du som kunde ønsker. Vi starter altid med en grundig forståelse af jeres behov, visioner og forretningsmål."
        subText2="Vores erfarne team arbejder tæt sammen med dig for at definere specifikke, målbare og realistiske mål for dit digitale projekt. Uanset om det er at øge miljøvenligheden på online platforme, forbedre konverteringsrater eller styrke brandidentitet, skræddersyer vi vores tilgang for at opfylde dine unikke behov."
        subText3="Vores tilgang er altid fleksibel, hvilket betyder, at vi løbende evaluerer og tilpasser vores indsats for at sikre, at vi forbliver på rette spor i forhold til dine forventninger.
        Uanset om du har brug for en omfattende webdesignløsning, digital marketingkampagner eller inovativt design, er vores mål at levere en eksekvering, der ikke kun opfylder, men overstiger dine forventninger."

        subText4="Vi tager de ting du som kunde ønsker, og blander det med vores viden om et mere bæredygtigt webdesign. På den måde opnår vi det bedst mulige resultat for lige netop din virksomhed.
        
        Lad os sammen definere dine mål og nå nye højder. Kontakt os i dag for at begynde rejsen mod digital succes."
        // customStyle={{width: 'auto'}}
        src={BannerImage} // Make sure you define BannerImage with your actual image path
        type="image"
        customStyleBannerImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}
      />
      <TitleImageText
        titleText="LØSNINGER DER GØR EN FORSKEL"
        subText1="Vi står midt i en digital revolution, hvor teknologi og bæredygtighed går hånd i hånd. Internettet står for ca. 3% af verdens CO2 udledning, hvilket svarer til det samme som hele verdens samlede flytrafik årligt. Hvor flyindustrien tit er noget der er set ned på i medierne som en stor klima synder, er vores internet aktivitet ligeså skadelig i det store regnestykke. Derfor arbejder vi hos MJ Solutions med at omfavne dette problem og udvikle mere bæredygtige løsninger til vores kunder.

        "
        subText2="Vores tilgang kombinerer teknologi med en dyb forpligtelse til miljøet. Vi tror på at skabe smukt designede løsninger, der ikke kun imponerer, men også tager hensyn til planeten. Ved at integrere bæredygtige principper i vores arbejde reducerer vi vores digitale fodaftryk og bidrager til en grønnere fremtid.
        
        "
        subText3="Uanset om det drejer sig om udvikling af hjemmesider, apps eller digitale kampagner, stræber vi efter at levere løsninger, der ikke kun er moderne, men også bæredygtige. Lad os sammen skabe et digitalt landskab, der er i harmoni med både nutiden og fremtiden."
        // customStyle={{width: 'auto'}}
        src={lottiedeskgenbrug} // Make sure you define BannerImage with your actual image path
        customStyleBanner={{ width: '100%', height: '50vh', objectFit: 'cover', }}
      />
      <div className='button-footer'>
        <Button
          button1Text="KONTAKT OS"
          button1Link="/kontakt"
          button2Text="SE CASE"
          button2Link="/cases"

        />
      </div>
      <Footer />


    </>
  );
}

export default Services;
