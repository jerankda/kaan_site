import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      category: 'Glasreinigung',
      icon: '🪟',
      items: [
        {
          title: 'Fensterreinigung',
          description: 'Professionelle Reinigung aller Glasflächen, Rahmen und Dichtungen'
        },
        {
          title: 'Wintergartenreinigung',
          description: 'Gründliche Reinigung von Wintergärten und Glashäusern'
        },
        {
          title: 'Glasversiegelung',
          description: 'Langzeitversiegelung für dauerhaft saubere Fenster'
        }
      ]
    },
    {
      category: 'Gartenarbeit',
      icon: '🌿',
      items: [
        {
          title: 'Heckenschnitt',
          description: 'Professioneller Formschnitt und Pflege aller Heckentypen'
        },
        {
          title: 'Beetpflege',
          description: 'Jäten, Mulchen und Pflege Ihrer Blumen- und Gemüsebeete'
        },
        {
          title: 'Rasenpflege',
          description: 'Mähen, Vertikutieren und Düngen für einen gesunden Rasen'
        },
        {
          title: 'Unkrautbeseitigung',
          description: 'Effektive und umweltfreundliche Unkrautbekämpfung'
        },
        {
          title: 'Sonstige Leistungen',
          description: 'Weitere Gartenarbeiten nach Ihren individuellen Wünschen'
        }
      ]
    },
    {
      category: 'Steinreinigung',
      icon: '🪨',
      items: [
        {
          title: 'Einfahrtsreinigung',
          description: 'Gründliche Reinigung von Einfahrten und Zufahrtswegen'
        },
        {
          title: 'Terrassenboden Reinigung',
          description: 'Professionelle Reinigung von Terrassen und Balkonen'
        },
        {
          title: 'Steinversiegelung',
          description: 'Schutzversiegelung für dauerhaft saubere Steinflächen'
        }
      ]
    },
    {
      category: 'Unterhaltsreinigung',
      icon: '🧹',
      items: [
        {
          title: 'Gewerbliche Räumlichkeiten',
          description: 'Reinigung von Büros und Geschäftsräumen'
        },
        {
          title: 'Treppenhausreinigung',
          description: 'Regelmäßige Reinigung von Treppenhäusern und Fluren'
        },
        {
          title: 'Sanitäranlagen',
          description: 'Hygienische Reinigung aller Sanitäreinrichtungen'
        }
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Leistungsaufstellung</h2>
        
        {services.map((service, index) => (
          <div key={index} className="service-category">
            <h3>
              <span className="service-icon">{service.icon}</span>
              {service.category}
            </h3>
            <div className="service-grid">
              {service.items.map((item, itemIndex) => (
                <div key={itemIndex} className="service-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
