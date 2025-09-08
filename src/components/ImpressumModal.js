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
            <strong>Kaan Sezen</strong><br />
            Einzelunternehmer<br />
            Silberkamp 23<br />
            31188 Holle
          </p>
          
          <h3>Kontakt</h3>
          <p>
            Tel.: +49 17659787256<br />
            Mail: kns.gebaeudereinigung@gmail.com
          </p>
          
          {/* Falls keine Umsatzsteuer-ID vorhanden, kann dieser Abschnitt entfernt oder mit "Nicht vorhanden" ersetzt werden */}
          <h3>Umsatzsteuer-ID</h3>
          <p>
            Nicht vorhanden
          </p>
          
          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Kaan Sezen<br />
            Silberkamp 23<br />
            31188 Holle
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumModal;
