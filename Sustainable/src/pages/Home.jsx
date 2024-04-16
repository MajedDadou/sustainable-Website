import React from 'react';
import Header from '../Component/Header';
import Navigation from '../Component/navigation'; // Make sure to import the Navigation component
import Title from '../Component/Title';
import Banner from '../Component/banner';
import TextWithButton from '../Component/TextWithButton';
import PictureWithText from '../Component/PictureWithText';
import TitleWithTwoTextsAndButtons from '../Component/TitleWithTwoTextsAndButtons';
import TwoImages from '../Component/TwoImages';

function Home() {
  return (
    <>
      <Header title="Vi hjælper virksomheder med at implementere  en grøn profil online" />
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
            title="Mere om os"
            subText="Description for picture 1"
          />

          <PictureWithText
            src="src/images/IMG_3051.avif"
            alt="Description for picture 2"
            title="Picture 2 Title"
            subText="Description for picture 2"
          />

          <PictureWithText
            src="src/images/IMG_3051.avif"
            alt="Description for picture 3"
            title="Picture 3 Title"
            subText="Description for picture 3"
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


      {/* Your home page content goes here */}
    </>
  );
}

export default Home;
