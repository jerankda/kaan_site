import React from 'react';
import './Banner.css';
import logo from '../media/logo.png';

const Banner = () => {
  return (
    <section id="home" className="banner-section">
      <div className="container">
        <div className="banner-content">
          <div className="banner-logo">
            <img src={logo} alt="KNS Gebäudereingung Logo" />
          </div>
          <h1>KNS Gebäudereingung</h1>
          <p>Professionelle Reinigungsdienstleistungen für Ihr Zuhause und Unternehmen</p>
          <div className="banner-buttons">
            <button className="cta-button primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Unverbindliches Angebot
            </button>
            <button className="cta-button secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Unsere Leistungen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
