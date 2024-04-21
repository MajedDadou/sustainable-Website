import React from 'react';
import '../Styles/title.css'; // Import your CSS file
import '../Styles/TitleWithText.css';
import '../Styles/TitleImageText.css';

import Text from './Text'; // Import the Text component
import Banner from './banner';

function TitleImageText({ titleText, subText1, subText2, subText3, subText4, customStyle, customStyleText, customStyleBanner, src, type  }) {
    return (
        <div className="title-with-text" style={customStyle}>

            <h2 className="title">{titleText}</h2>
            <Banner src={src} type={type} style={{ customStyleBanner }} />

            <Text content={subText1} style={{ customStyleText }} />
            <Text content={subText2} style={{ customStyleText }} />
            <Text content={subText3} style={{ customStyleText }} />
            <Text content={subText4} style={{ customStyleText }} />

            
        </div>
    );
}

export default TitleImageText;
