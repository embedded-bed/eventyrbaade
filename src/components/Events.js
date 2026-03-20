import React from 'react';
import { useTranslation } from 'react-i18next';
import './Events.css';

function Events() {
  const { t } = useTranslation();

  return (
    <section className="section events-section">
      <h2 className="section-title">{t('events.title')}</h2>
      <div className="events-content">
        <p>{t('events.p1')}</p>
        <p>{t('events.p2')}</p>
        <p>{t('events.p3')}</p>
        <a href="#kontakt" className="btn-primary">{t('events.cta')}</a>
      </div>
    </section>
  );
}
export default Events;
