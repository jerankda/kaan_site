import React from 'react';
import './Quality.css';

const Quality = () => {
  const qualityItems = [
    {
      icon: '🏆',
      title: 'Zertifizierte Qualität',
      description: 'Alle unsere Mitarbeiter sind geschult und zertifiziert'
    },
    {
      icon: '🌱',
      title: 'Umweltfreundlich',
      description: 'Verwendung von biologisch abbaubaren Reinigungsmitteln'
    },
    {
      icon: '⏰',
      title: 'Pünktlichkeit',
      description: 'Termintreue und zuverlässiger Service'
    },
    {
      icon: '🛡️',
      title: 'Versicherung',
      description: 'Vollständig versichert für Ihren Schutz'
    }
  ];

  return (
    <section className="quality-section">
      <div className="container">
        <h2>Qualitätsstandards</h2>
        <div className="quality-grid">
          {qualityItems.map((item, index) => (
            <div key={index} className="quality-item">
              <span className="quality-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
