import React from 'react';
import './References.css';

const References = () => {
  const references = [
    {
      image: '📸',
      title: 'Beispiel 1',
      description: 'beispieltext'
    },
    {
      image: '📸',
      title: 'Beispiel 2',
      description: 'beispieltext'
    },
    {
      image: '📸',
      title: 'Beispiel 3',
      description: 'beispieltext'
    }
  ];

  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2>Referenzen</h2>
        <div className="references-grid">
          {references.map((reference, index) => (
            <div key={index} className="reference-item">
              <div className="reference-image">
                <span className="placeholder-icon">{reference.image}</span>
                <p>Referenz Foto {index + 1}</p>
              </div>
              <h4>{reference.title}</h4>
              <p>{reference.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
