import React from 'react';
import '../Styles/PictureWithText.css';
import Lottie from 'react-lottie';


function PictureWithText({ src, alt, title, subText }) {
  const isLottieAnimation = typeof src === 'object';

  if (isLottieAnimation) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: src,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
      
    };

    return (
      <div className="picture-with-text">
        <Lottie options={defaultOptions} height={'auto'} width={'100%'}/>
        <h3>{title}</h3>
        <p>{subText}</p>
      </div>
    );
  }

  // Render the image if src is a string (path to an image)
  return (
    <div className="picture-with-text">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{subText}</p>
    </div>
  );
}


export default PictureWithText;
