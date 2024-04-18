import React from 'react';
import '../Styles/TitleWithTwoTextsAndButtons.css'; // Import the CSS file for styling

function TitleWithTwoTextsAndButtons({ src1, src2, title, text1, text2, text3, text4, button1Text, button2Text }) {
  return (
    <div className="title-with-two-texts-buttons">
      <h2>{title}</h2>
      <div className='Container'>
        <div className="texts-container">
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>

          <div className="button-container">
            <button>{button1Text}</button>
            <button>{button2Text}</button>
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
