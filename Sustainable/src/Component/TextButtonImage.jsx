import React from 'react';
import './TextButtonImage.css'; // Import your component-specific CSS file

const TextButtonImage = ({ text, image1Src, image2Src, buttons }) => {
    return (
        <div className="container">
            {/* Left side content */}
            <div className="left-content">
                <p>{text}</p>
                {/* Buttons */}
                <div className="buttons">
                    {buttons.map((button, index) => (
                        <button key={index}>{button}</button>
                    ))}
                </div>
            </div>
            
            {/* Right side content */}
            <div className="right-content">
                {/* First image */}
                <img src={image1Src} alt="Image 1" />
                
                {/* Second image */}
                <img src={image2Src} alt="Image 2" />
            </div>
        </div>
    );
};

export default TextButtonImage;
