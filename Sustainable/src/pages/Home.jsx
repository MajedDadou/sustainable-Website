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
      <Banner src="src/images/IMG_2941.avif" type="image" />

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
        text1="First piece of text"
        text2="Second piece of text"
        button1Text="Button 1"
        button2Text="Button 2"
      />

      <TwoImages src1="src/images/IMG_3051.avif" src2="src/images/IMG_3051.avif" />
      <TwoImages src1="src/images/IMG_3051.avif" src2="src/images/IMG_3051.avif" />

      <Footer />
      {/* Your home page content goes here */}
    </>
  );
}

export default Home;
