import React from 'react';
import { FaCalendarAlt, FaClock, FaUsers, FaMobileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './WeeklyTrip.css';

function WeeklyTrip() {
  const { t } = useTranslation();

  return (
    <section className="section weekly-trip-section">
      <h2 className="section-title">{t('weeklyTrip.title')}</h2>
      <div className="weekly-trip-layout">
        <div className="weekly-trip-image">
          <img src="/images/kano2.jpg" alt={t('weeklyTrip.title')} />
        </div>
        <div className="weekly-trip-content">
          <p className="weekly-trip-intro">{t('weeklyTrip.intro')}</p>
          <div className="weekly-trip-details">
            <div className="weekly-trip-detail">
              <FaCalendarAlt />
              <span>{t('weeklyTrip.schedule')}</span>
            </div>
            <div className="weekly-trip-detail">
              <FaClock />
              <span>{t('weeklyTrip.time')}</span>
            </div>
            <div className="weekly-trip-detail">
              <FaUsers />
              <span>{t('weeklyTrip.meetup')}</span>
            </div>
            <div className="weekly-trip-detail">
              <FaMobileAlt />
              <span>{t('weeklyTrip.payment')}</span>
            </div>
          </div>
          <div className="weekly-trip-pricing">
            <div className="weekly-trip-price">
              <span className="price-label">{t('weeklyTrip.adult_label')}</span>
              <span className="price-amount">175 kr.</span>
            </div>
            <div className="weekly-trip-price">
              <span className="price-label">{t('weeklyTrip.child_label')}</span>
              <span className="price-amount">125 kr.</span>
            </div>
          </div>
          <p className="weekly-trip-escort">{t('weeklyTrip.escort')}</p>
          <a href="#kontakt" className="btn-primary">{t('weeklyTrip.cta')}</a>
        </div>
      </div>
    </section>
  );
}
export default WeeklyTrip;
