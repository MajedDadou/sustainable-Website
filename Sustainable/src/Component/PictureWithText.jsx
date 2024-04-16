import React from 'react';
import '../Styles/PictureWithText.css';

function PictureWithText({ src, alt, title, subText }) {
    return (
<div className="picture-with-text">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{subText}</p>
    </div>
  );
}

export default PictureWithText;
