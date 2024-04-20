import React from 'react';
import '../Styles/text.css'; 

function Text({ content, style }) {
  return (
    <p className= "text-style"style={style}>
      {content}
    </p>
  );
}

export default Text;

