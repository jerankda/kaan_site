import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h2>Wer sind wir</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Kaan ist Ihr kompetenter Partner für alle Arten von 
              Reinigungs- und Pflegearbeiten. Mit jahrelanger Erfahrung und höchsten 
              Qualitätsstandards bieten wir maßgeschneiderte Lösungen für Privat- und 
              Gewerbekunden.
            </p>
            <p>
              Unser Team aus geschulten Fachkräften arbeitet mit modernster Technik 
              und umweltfreundlichen Reinigungsmitteln, um Ihnen ein optimales 
              Ergebnis zu garantieren.
            </p>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span className="placeholder-icon">👥</span>
              <p>Team Foto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
