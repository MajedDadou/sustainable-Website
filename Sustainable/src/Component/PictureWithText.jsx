import React from 'react';
import '../Styles/PictureWithText.css';
import Lottie from 'react-lottie';


function PictureWithText({ src, alt, title, subText, customStyleDiv, customStyleImg, subtitle}) {
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
        <Lottie options={defaultOptions}  height={'fit-content'} width={'100%'}/>
        <h2>{title}</h2>
        <p>{subText}</p>
      </div>
    );
  }

  // Render the image if src is a string (path to an image)
  return (
    <div className="picture-with-text" style={customStyleDiv}>
      <img src={src} alt={alt} style={customStyleImg} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{subText}</p>
    </div>
  );
}


export default PictureWithText;
