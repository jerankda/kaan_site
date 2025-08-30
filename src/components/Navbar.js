import React, { useState } from 'react';
import './Navbar.css';
import logo from '../media/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Kaan Reinigungsservice Logo" />
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('about')}>Über uns</a></li>
          <li><a onClick={() => scrollToSection('quality')}>Qualität</a></li>
          <li><a onClick={() => scrollToSection('services')}>Leistungen</a></li>
          <li><a onClick={() => scrollToSection('references')}>Referenzen</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Kontakt</a></li>
        </ul>
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
