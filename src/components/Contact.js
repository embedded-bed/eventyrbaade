import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
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
      <h2 className="section-title">Har du spørgsmål?</h2>
      <div className="contact-grid">
        <div className="contact-form-wrapper">
          <h3>Send en besked</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" placeholder="Navn" value={form.name} onChange={handleChange} />
              <input name="lastName" placeholder="Efternavn" value={form.lastName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <input name="phone" type="tel" placeholder="Telefon" value={form.phone} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Besked" rows="5" value={form.message} onChange={handleChange} />
            <button type="submit" className="btn-primary">Send besked til Eventyrbåde</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaPhone />
            <div>
              <strong>Ring til os</strong>
              <a href="tel:+4560534381">(+45) 6053 4381</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Besøg os</strong>
              <span>Feddet Strand Resort, Faxe</span>
              <span>eller Præstø Havn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
