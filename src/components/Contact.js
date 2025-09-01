import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Vielen Dank! Wir werden uns in Kürze bei Ihnen melden.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Unverbindliches Angebot sichern</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Kontaktdaten</h3>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <p>+49 (0) 123 456789</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <p>info@kns-gebäudereingung.de</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <p>Musterstraße 123, 12345 Musterstadt</p>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Details zum Auftrag</h3>
            
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-Mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Gewünschte Leistung *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Bitte wählen Sie eine Leistung</option>
                <option value="glasreinigung">Glasreinigung</option>
                <option value="gartenarbeit">Gartenarbeit</option>
                <option value="steinreinigung">Steinreinigung</option>
                <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Weitere Details zum Auftrag</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Beschreiben Sie Ihren Auftrag genauer..."
              />
            </div>
            
            {submitMessage && (
              <div className="submit-message success">
                {submitMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Angebot anfordern'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
