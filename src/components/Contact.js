import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

    emailjs.send(
      'service_8f1uao2',
      'template_c28n8ip',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      'iVRZ2MU9HAcvVNuf5'
    ).then(
      (result) => {
        setSubmitMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
      },
      (error) => {
        setSubmitMessage('Fehler beim Senden. Bitte versuchen Sie es später erneut.');
        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
      }
    );
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
              Tel.: +49 17659787256
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              Mail: kns.gebaeudereinigung@gmail.com
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              31188 Holle, Silberkamp 23
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
                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Wird gesendet...' : 'Senden'}
                  </button>
                  {submitMessage && (
                    <div className="submit-message">
                      {submitMessage}
                    </div>
                  )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
