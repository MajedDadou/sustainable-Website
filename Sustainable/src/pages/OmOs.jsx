import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation';
import Banner from '../Component/banner';
import TitleWithText from '../Component/TitleWithText';
import PictureWithText from '../Component/PictureWithText';
import Button from '../Component/button';
import TextWithButton from '../Component/TextWithButton';
import lottiePackage from '../lottie/package.json';
import lottieconsulting from '../lottie/consulting.json';
import lottiemeasurment from '../lottie/measurment.json';

import lottiekontor from '../lottie/kontor.json';
import lottieevents from '../lottie/events.json';
import lottiefaglighed from '../lottie/faglighed.json';
import lottiemission from '../lottie/mission.json';
import lottieudvikling from '../lottie/udvikling.json';

import lottiemj from '../lottie/mj.json';
import Footer from '../Component/Footer';

function OmOs() {
  return (
    <>
      <Header title="Cases" />
      <div className="title-holder">
        <TitleWithText
          titleText="MJ Solutions"
          subText="MJ solutions er et dansk beliggende mediebureau, der dagligt arbejder med at optimere og lave mere bæredygtige hjemmeside løsninger for virksomheder i Restaurationsbranchen "
          customStyle={{}}
        />

      </div>
      <Banner src="src/images/IMG_3051.avif" alt="asd" type="image" />

      <TitleWithText
        titleText="NORDISK MEDIEBUREAU MED VIND I SEJLENE"
        subText="MJ Solutions er et nordisk mediebureau med fokus på at skabe mere bæredygtige websites til restauranter. Vi ønsker at forene restaurantens kerneværdier og dens digitale løsning. I denne proces har vi et tæt samarbejde med vores kunder for at skabe skræddersyede løsninger, som afspejler deres værdier og brandidentitet. Vores team af passionerede og ambitiøse medarbejder sikre vi, at vores kunders online platforme ikke kun er æstetisk tiltalende, men også mere miljøvenlige og energieffektive"
        customStyle={{}}
      />
      <div className="pictures-container">
        <PictureWithText
          src="src/images/havnaer.png"
          alt="Description for picture 1"
          customStyleDiv={{ display: 'flex', width: '50%', height: 'auto', }}
          customStyleImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}

        />

        <PictureWithText
          src="src/images/havnaer-old.png"
          alt="Description for picture 2"
          customStyleDiv={{ display: 'flex', width: '20%', height: 'auto', }}
          customStyleImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}

        />
        <PictureWithText
          src="src/images/havnaer.png"
          alt="Description for picture 1"
          customStyleDiv={{ display: 'flex', width: '20%', height: 'auto', }}
          customStyleImg={{ width: '100%', height: '50vh', objectFit: 'cover', }}

        />
      </div>
      <TitleWithText
        subText="Lyder vi som det rigtige mediebureau for jer så kontakt os i dag for at høre mere om, hvorfor og hvordan vi kan hjælpe din resutaurant med at skabe en mere bæredygtig online tilstedeværelse"
        customStyle={{}}
      />

      <div className='button-footer'>
        <Button
          button1Text="BOOK NU"
          button1Link="/kontakt"
          button2Text="LÆS MERE"
          button2Link="/cases"

        />
      </div>

      <div>
        <TextWithButton
          title="Services"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          buttonText="Learn More"
        />
        {/* <Lottie options={{ animationData: lottiePackage }} height={400} width={400} /> Use the Lottie component here */}
        <div className="pictures-container">
          <PictureWithText
            src={lottiekontor}
            alt="Description for picture 1"
            title="Kontor"
            subText="Vores kontor er centralt beliggende i Aarhus, og det er muligt at finde os fysisk såvel som online ved konsultation"
          />

          <PictureWithText
            src={lottieevents}
            alt="Description for picture 2"
            title="Events"
            subText="Vi tror på værdien af at investere i hinanden og vores relation. Vi afholder mingling, hvor potentielle kunder har mulighed for at besøge os"
          />

          <PictureWithText
            src={lottiefaglighed}
            alt="Description for picture 3"
            title="Faglighed"
            subText="Udover mingling afholder vi faglige arrangementer for at sætte fokus på en mere miljøvenlig online tilstedeværelse og vigtigheden heraf"
          />
        </div>
        <div className="pictures-container">
          <PictureWithText
          customStyleImg={{backgroundColor: '#D9D9D9' }}
          src="src/icons/Balance.png"
            alt="Description for picture 1"
            title="Work balance"
            subText="Vi balancerer til dagligt med at give vores arbejde 110% af os selv, samtidig med vi nyder vores tilværelse"
          />

          <PictureWithText
            src={lottiemission}
            alt="Description for picture 2"
            title="Mission"
            subText="Vi vil skabe bæredygtige hjemmeside med likemindede virksomheder, der stræber efter at skabe en grønnere fremtid"
          />

          <PictureWithText
            src={lottieudvikling}
            alt="Description for picture 3"
            title="Udvikling"
            subText="Vi bruger i vores bureau de nyeste teknologier og værktøjer for at være på forkant af den digitale udvikling"
          />
        </div>
      </div>

      <Footer />

    </>
  );
}

export default OmOs;
