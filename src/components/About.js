import React from 'react';
import './About.css';
import teamPhoto from '../media/KNS.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Wer sind wir</h2>
            <p>
              KNS Gebäudereingung ist Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen. 
              Mit jahrelanger Erfahrung und einem engagierten Team bieten wir maßgeschneiderte Lösungen für 
              Privathaushalte und Unternehmen.
            </p>
            <p>
              Unsere Mission ist es, Ihre Räumlichkeiten in einem makellosen Zustand zu halten, 
              damit Sie sich auf das Wesentliche konzentrieren können. Wir setzen auf moderne 
              Reinigungstechniken und umweltfreundliche Produkte.
            </p>
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">👥</span>
                <h4>Erfahrenes Team</h4>
                <p>Qualifizierte Fachkräfte mit langjähriger Erfahrung</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🌱</span>
                <h4>Umweltfreundlich</h4>
                <p>Verwendung von ökologischen Reinigungsmitteln</p>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <h4>Zuverlässig</h4>
                <p>Pünktlich und termingerecht bei jedem Einsatz</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={teamPhoto} alt="KNS Gebäudereingung" />
            <div className="image-overlay">
              <span>Unser Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
