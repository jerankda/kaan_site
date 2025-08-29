import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Kaan Dienstleistungen</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Leistungen</a>
          <a href="#references" onClick={() => scrollToSection('references')}>Referenzen</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Kontakt</a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
