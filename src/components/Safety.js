import React from 'react';
import { useTranslation } from 'react-i18next';
import './Safety.css';

function Safety() {
  const { t } = useTranslation();

  return (
    <section className="section safety-section">
      <h2 className="section-title">{t('safety.title')}</h2>
      <div className="safety-content">
        <p>{t('safety.p1')}</p>
        <p>{t('safety.p2')}</p>
        <p>{t('safety.p3')}</p>
      </div>
    </section>
  );
}
export default Safety;
