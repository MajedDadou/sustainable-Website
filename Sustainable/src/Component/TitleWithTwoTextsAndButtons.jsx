import React from 'react';
import '../Styles/TitleWithTwoTextsAndButtons.css'; // Import the CSS file for styling

function TitleWithTwoTextsAndButtons({ title, text1, text2, button1Text, button2Text }) {
  return (
    <div className="title-with-two-texts-buttons">
      <h2>{title}</h2>
      <div className="texts-container">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <div className="button-container">
        <button>{button1Text}</button>
        <button>{button2Text}</button>
      </div>
    </div>
  );
}

export default TitleWithTwoTextsAndButtons;
