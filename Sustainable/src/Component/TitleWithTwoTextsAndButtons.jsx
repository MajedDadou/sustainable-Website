import React from 'react';
import '../Styles/TitleWithTwoTextsAndButtons.css'; // Import the CSS file for styling
import Title from './Title';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom


function TitleWithTwoTextsAndButtons({ src1, src2, title, text1, text2, text3, text4, button1Text, button2Text, button1Link, button2Link }) {
  return (
    <div className="title-with-two-texts-buttons">
      <Title titleText={title} />
      <div className='Container'>
        <div className="texts-container">
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>

          <div className="button-container">
            <Link to={button1Link}>
              <button>{button1Text}</button>
            </Link>
            <Link to={button2Link}>
              <button>{button2Text}</button>
            </Link>
          </div>
        </div>
        <div className='right-images'>
          <img src={src1} alt="First Image" />
          <img src={src2} alt="Second Image" />


        </div>
      </div>

    </div>
  );
}

export default TitleWithTwoTextsAndButtons;
