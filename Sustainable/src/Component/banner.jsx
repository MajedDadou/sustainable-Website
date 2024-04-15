import React from 'react';
import './Banner.css';

function Banner({ src, type }) {
  return (
    <div className="Banner">
      {type === 'image' ? (
        <img src={src} alt="Media" className="Banner" />
      ) : (
        <video src={src} controls className="Banner"></video>
      )}
    </div>
  );
}

export default Banner;
