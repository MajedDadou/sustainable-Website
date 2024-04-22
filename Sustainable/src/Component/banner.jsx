import React from 'react';
import '../Styles/Banner.css';
import Lottie from 'react-lottie';

function Banner({ src, type, title, subText, customStyleBanner, customStyleBannerImg }) {
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
      <div className="Banner" style={customStyleBanner}>
        <Lottie options={defaultOptions} height={'fit-content'} width={'100%'} />
        <h2>{title}</h2>
        <p>{subText}</p>
      </div>
    );
  }

  return (
    <div className="Banner">
      {type === 'image' ? (
        <img src={src} alt="Media" className="Banner" style={{customStyleBannerImg}}/>
      ) : (
        <video src={src} controls className="Banner"></video>
      )}
    </div>
  );
}

export default Banner;
