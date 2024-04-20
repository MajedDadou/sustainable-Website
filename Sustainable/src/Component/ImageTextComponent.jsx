import React from 'react';
import '../Styles/ImageTextComponent.css';

function ImageTextComponent({ src, alt, title, subText, order, customStyleP,  }) {
  const isRightOrder = order === 'right';

  return (
    <div className={`image-text-container ${isRightOrder ? 'right-order' : 'left-order'}`}>
      <div className="text-container" >
        <h2>{title}</h2>
        <p style={customStyleP}>{subText} </p>
      </div>
      <div className="image-container">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default ImageTextComponent;
