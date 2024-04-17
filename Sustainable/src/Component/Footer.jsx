import React from 'react';
import '../Styles/Footer.css'; // Import CSS for styling
import FooterSection from './FooterSection';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="contact-info">
          <p>Tlf: +123456789</p>
          <p>Email: example@email.com</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>
      <div className="right-section">
        <FooterSection
          title="Section 1"
          links={[
            { label: 'Cases', url: '/cases' },
            { label: 'Services', url: '/services' },
          ]}
        />
        <FooterSection
          title="Section 2"
          links={[
            { label: 'Om os', url: '/om-os' },
            { label: 'Kontakt', url: '/kontakt' },
          ]}
        />
        <FooterSection
          title="Section 3"
          links={[
            { label: 'Facebook', url: '#' },
            { label: 'Instagram', url: '#' },
            { label: 'LinkedIn', url: '#' },

          ]}
        />
      </div>
    </footer>
  );
}

export default Footer;
