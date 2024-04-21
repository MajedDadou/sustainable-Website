import React from 'react';
import '../Styles/button.css';
import { Link } from 'react-router-dom';

function Button({ button1Link, button1Text, button2Link, button2Text }) {

  return (

<div className="button-container">
<Link to={button1Link}>
    <button>{button1Text}</button>
</Link>
<Link to={button2Link}>
    <button>{button2Text}</button>
</Link>
</div>
  );
}

export default Button;





