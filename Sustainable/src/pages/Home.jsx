import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import Title from '../Component/Title';
import Banner from '../Component/banner';
import TextWithButton from '../Component/TextWithButton';
import PictureWithText from '../Component/PictureWithText';
import TitleWithTwoTextsAndButtons from '../Component/TitleWithTwoTextsAndButtons';
import TwoImages from '../Component/TwoImages';
import Footer from '../Component/Footer';
import FooterSection from '../Component/FooterSection';

function Home() {
  return (
    <>
      <Header title="VI UDVIKLER OG SKABER EN DIGITAL FREMTID MED ANSVAR" />
      <Banner src="src/images/IMG_3051.avif" type="image" />

      <div>
        <TextWithButton
          title="Services"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          buttonText="Learn More"
        />

        <div className="pictures-container">
          <PictureWithText
            src="src/images/IMG_3051.avif"
            alt="Description for picture 1"
            title="RÅDGIVNING"
            subText="Vi tilbyder skræddersyet rådgivning til din nye hjemmeside. Med fokus på bæredygtigt webdesign guider vi dig gennem processen for at skabe en unik og miljøvenlig online tilstedeværelse. Lad os realisere din vision sammen."
          />

          <PictureWithText
            src="src/images/IMG_3051.avif"
            alt="Description for picture 2"
            title="PAKKELØSNING"
            subText="Vi har tre pakkeløsninger hvor der er fleksibilitet og løsningen er skræddersyet til netop dig. Uanset hvilken pakke du vælger, leverer vi en skræddersyet og bæredygtig løsning til dine behov."
          />

          <PictureWithText
            src="src/images/IMG_3051.avif"
            alt="Description for picture 3"
            title="MÅLINGER"
            subText="Forbedringer din online tilstedeværelse, med nøjagtige målinger og skræddersyede forslag til at optimerer din hjemmeside fra bunden. Lad os hjælpe dig med at nå nye højder online."
          />
        </div>
      </div>
      <TitleWithTwoTextsAndButtons
        title="Your Title"
        text1="Vi tror på at skabe en bedre digital fremtid, og det starter med vores tilgang til webudvikling. Hos MJ Solutions løser vi kundecases på en bæredygtig måde ved at anvende en React.js som fundament til at opbygge din hjemmeside. Denne avancerede framework giver ikke kun enestående ydeevne og brugeroplevelse, men det er også mere miljøvenligt end traditionelle kodemetoder.
        Vores engagement i bæredygtighed stopper dog ikke der. Vi anvender avancerede værktøjer som Ecograder og Lighthouse til at evaluere og optimere vores løsninger. Dette sikrer, at vi ikke kun opfylder vores kunders behov, men også reducerer det klimamæssige aftryk.
        
        
       
        "
        text2=" Uanset om vi opgraderer og forbedrer din eksisterende hjemmeside eller udvikler en helt ny, skræddersyet løsning, er vores mål altid det samme:"
        
X        
        text3="At levere en mere bæredygtig weboplevelse, der inspirerer og engagerer dine kunder."

        text4="Lad os sammen bygge fremtiden med ansvar og innovation. Kontakt os i dag for at starte rejsen mod en mere bæredygtig online tilstedeværelse."
        
        button1Text="KONTAKT OS"
        button2Text="SE CASE"
        src1="src/images/Work.avif"
        src2="src/icons/paint.png"

      />

      <TwoImages src1="src/images/IMG_3051.avif" src2="src/images/IMG_3051.avif" />
      <TwoImages src1="src/images/IMG_3051.avif" src2="src/images/IMG_3051.avif" />

      <Footer />
      {/* Your home page content goes here */}
    </>
  );
}

export default Home;
