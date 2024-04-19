import React from 'react';
import '../Styles/title.css';


function Title({ titleText }) {
  return (
    <div className="title">
      {titleText}
    </div>
  );
}

export default Title;
