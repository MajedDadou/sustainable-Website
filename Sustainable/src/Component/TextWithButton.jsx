import React from 'react';
import '../Styles/TextWithButton.css';

import Title from './Title';
function TextWithButton({ title, buttonText }) {
    return (
    <div className="text-with-button">
      <div className="text-container">
      <Title titleText={title} />
      </div>
      {/* <div className="button-container">
        <button>{buttonText}</button>
      </div> */}
    </div>
  );
}

export default TextWithButton;