import React from 'react';
import '../Styles/TextWithButton.css';
function TextWithButton({ title, buttonText }) {
    return (
    <div className="text-with-button">
      <div className="text-container">
        <h2>{title}</h2>
      </div>
      <div className="button-container">
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default TextWithButton;