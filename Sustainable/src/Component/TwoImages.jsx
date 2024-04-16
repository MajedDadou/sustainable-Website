import React from 'react';
import '../Styles/TwoImages.css'; // Import CSS file for styling

function TwoImages({ src1, src2 }) {
  return (
    <div className="two-images-container">
      <img className="image" src={src1} alt="First Image" />
      <img className="image" src={src2} alt="Second Image" />
    </div>
  );
}

export default TwoImages;
