import React from 'react';
import { FaClock, FaBookOpen, FaUserClock, FaGlassCheers } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Swan.css';

function Swan() {
  const { t } = useTranslation();

  return (
    <section className="section swan-section">
      <h2 className="section-title">{t('swan.title')}</h2>
      <div className="swan-layout">
        <div className="swan-image">
          <img src="/images/swan.png" alt={t('swan.title')} />
        </div>
        <div className="swan-content">
          <p className="swan-intro">{t('swan.intro')}</p>
          <div className="swan-details">
            <div className="swan-detail">
              <FaBookOpen />
              <span>{t('swan.tagline')}</span>
            </div>
            <div className="swan-detail">
              <FaClock />
              <span>{t('swan.schedule1')}</span>
            </div>
            <div className="swan-detail">
              <FaClock />
              <span>{t('swan.schedule2')}</span>
            </div>
            <div className="swan-detail">
              <FaUserClock />
              <span>{t('swan.meetup')}</span>
            </div>
            <div className="swan-detail">
              <FaGlassCheers />
              <span>{t('swan.onboard')}</span>
            </div>
          </div>
          <div className="swan-pricing">
            <div className="swan-price">
              <span className="price-label">{t('swan.adult_label')}</span>
              <span className="price-amount">{t('swan.adult_price')}</span>
            </div>
            <div className="swan-price">
              <span className="price-label">{t('swan.child_label')}</span>
              <span className="price-amount">{t('swan.child_price')}</span>
            </div>
          </div>
          <p className="swan-event">
            <strong>{t('swan.event_label')}:</strong> {t('swan.event_price')}{' '}
            <span className="swan-event-note">({t('swan.event_note')})</span>
          </p>
          <a href="#kontakt" className="btn-primary">{t('swan.cta')}</a>
        </div>
      </div>
    </section>
  );
}
export default Swan;
