import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:mail@eventyrbaade.dk?subject=Besked fra ${form.name} ${form.lastName}&body=${encodeURIComponent(form.message)}%0A%0ATelefon: ${form.phone}%0AEmail: ${form.email}`;
    window.location.href = mailto;
  };

  return (
    <section id="kontakt" className="section contact-section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-grid">
        <div className="contact-form-wrapper">
          <h3>{t('contact.form_title')}</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" placeholder={t('contact.name')} value={form.name} onChange={handleChange} />
              <input name="lastName" placeholder={t('contact.lastName')} value={form.lastName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input name="email" type="email" placeholder={t('contact.email')} value={form.email} onChange={handleChange} />
              <input name="phone" type="tel" placeholder={t('contact.phone')} value={form.phone} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder={t('contact.message')} rows="5" value={form.message} onChange={handleChange} />
            <button type="submit" className="btn-primary">{t('contact.submit')}</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaPhone />
            <div>
              <strong>{t('contact.call_label')}</strong>
              <a href="tel:+4560534381">(+45) 6053 4381</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope />
            <div>
              <strong>{t('contact.email_label')}</strong>
              <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>{t('contact.location_label')}</strong>
              <span>{t('contact.location1')}</span>
              <span>{t('contact.location2')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title={t('contact.map_title')}
          src="https://maps.google.com/maps?q=Præstø+Fjord,+Danmark&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
export default Contact;
