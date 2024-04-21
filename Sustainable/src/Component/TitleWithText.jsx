import React from 'react';
import '../Styles/title.css'; // Import your CSS file
import '../Styles/TitleWithText.css'; 

import Text from './Text'; // Import the Text component

function TitleWithText({ titleText, subText, customStyle, customStyleText }) {
  return (
    <div className="title-with-text" style={customStyle}>
      <h2 className="title">{titleText}</h2>
      
      <Text content={subText} style={{customStyleText}} />
    </div>
  );
}

export default TitleWithText;
