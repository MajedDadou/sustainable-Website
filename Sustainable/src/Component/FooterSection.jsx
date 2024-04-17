import React from 'react';
import '../Styles/Footer.css'; // Import CSS for styling

function FooterSection({ title, links }) {
  return (
    <div className="footer-section">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
