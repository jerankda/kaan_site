import React from 'react';
import './ImpressumModal.css';

const ImpressumModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        
        <h2>Impressum</h2>
        
        <div className="impressum-content">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            <strong>Kaan Reinigungsservice</strong><br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
          
          <h3>Vertreten durch</h3>
          <p>Max Mustermann</p>
          
          <h3>Kontakt</h3>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@kaan-reinigung.de
          </p>
          
          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>
          
          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Max Mustermann<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumModal;
