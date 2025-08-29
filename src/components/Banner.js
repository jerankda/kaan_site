import React from 'react';
import './Banner.css';

const Banner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="banner">
      <div className="banner-content">
        <h1>Professionelle Reinigungsdienstleistungen</h1>
        <p>Ihr zuverlässiger Partner für Glasreinigung, Gartenarbeit und mehr</p>
        <button className="cta-button" onClick={scrollToContact}>
          Unverbindliches Angebot sichern
        </button>
      </div>
    </section>
  );
};

export default Banner;
