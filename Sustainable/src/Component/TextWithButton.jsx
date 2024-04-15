import React from 'react';

function TextWithButton({ title, description, buttonText }) {
  return (
    <div className="text-with-button">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default TextWithButton;