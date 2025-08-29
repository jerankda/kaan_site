import React from 'react';
import './Footer.css';

const Footer = ({ onImpressumClick }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kaan Reinigungsservice</h4>
            <p>Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen</p>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>+49 (0) 123 456789</p>
            <p>info@kaan-reinigung.de</p>
          </div>
          
          <div className="footer-section">
            <h4>Öffnungszeiten</h4>
            <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
            <p>Sa: 9:00 - 14:00 Uhr</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Kaan Reinigungsservice. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <button onClick={onImpressumClick} className="footer-link">
              Impressum
            </button>
            <a href="#datenschutz" className="footer-link">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
