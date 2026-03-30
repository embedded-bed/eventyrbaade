import React from 'react';
import { FaHome, FaBed, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Apartment.css';

function Apartment() {
  const { t } = useTranslation();

  const features = [
    t('apartment.feature1'),
    t('apartment.feature2'),
    t('apartment.feature3'),
    t('apartment.feature4'),
    t('apartment.feature5'),
    t('apartment.feature6'),
  ];

  return (
    <section className="section apartment-section">
      <h2 className="section-title">{t('apartment.title')}</h2>
      <p className="apartment-subtitle">{t('apartment.subtitle')}</p>

      <div className="apartment-layout">
        <div className="apartment-hero-image">
          <div className="apartment-placeholder">
            <FaHome className="apartment-placeholder-icon" />
            <span>{t('apartment.image_coming')}</span>
          </div>
          <div className="apartment-price-badge">
            <span className="apartment-price-from">{t('apartment.price_from')}</span>
            <span className="apartment-price-amount">{t('apartment.price')}</span>
            <span className="apartment-price-per">{t('apartment.price_per')}</span>
          </div>
        </div>

        <div className="apartment-info">
          <div className="apartment-intro">
            <p>{t('apartment.intro')}</p>
          </div>

          <div className="apartment-highlights">
            <div className="apartment-highlight">
              <FaBed />
              <div>
                <strong>{t('apartment.rooms_label')}</strong>
                <span>{t('apartment.rooms')}</span>
              </div>
            </div>
            <div className="apartment-highlight">
              <FaUsers />
              <div>
                <strong>{t('apartment.guests_label')}</strong>
                <span>{t('apartment.guests')}</span>
              </div>
            </div>
            <div className="apartment-highlight">
              <FaMapMarkerAlt />
              <div>
                <strong>{t('apartment.location_label')}</strong>
                <span>{t('apartment.location')}</span>
              </div>
            </div>
          </div>

          <div className="apartment-features">
            <h3>{t('apartment.features_title')}</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><FaCheck className="check-icon" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="apartment-description">
            <p>{t('apartment.desc1')}</p>
            <p>{t('apartment.desc2')}</p>
          </div>

          <div className="apartment-contact">
            <h3>{t('apartment.contact_title')}</h3>
            <div className="apartment-contact-items">
              <a href="tel:+4560534381" className="apartment-contact-item">
                <FaPhone />
                <span>+45 60 53 43 81</span>
              </a>
              <a href="mailto:mail@eventyrbaade.dk" className="apartment-contact-item">
                <FaEnvelope />
                <span>mail@eventyrbaade.dk</span>
              </a>
            </div>
            <a href="tel:+4560534381" className="btn-primary">{t('apartment.cta')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Apartment;
