import React from 'react';
import '../Styles/Footer.css'; // Import CSS for styling
import FooterSection from './FooterSection';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="contact-info">
          <p className='number'>+45 23344556</p>
          <p className='email'>info@mjsolutions.dk</p>
          <p className='address'>Vesterhøjen 86, 3 sal</p>
          <p className='address'>8789 Aalborg</p>
          <p className='address'>Danmark</p>

        </div>
      </div>
      <div className="right-section">
        <FooterSection
          links={[
            { label: 'Cases', url: '/cases' },
            { label: 'Services', url: '/services' },
          ]}
        />
        <FooterSection
          links={[
            { label: 'Om os', url: '/om-os' },
            { label: 'Kontakt', url: '/kontakt' },
          ]}
        />
        <FooterSection
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
