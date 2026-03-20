import React from 'react';
import { useTranslation } from 'react-i18next';
import './SkipperSection.css';

function SkipperSection() {
  const { t } = useTranslation();

  return (
    <section className="section skipper-section">
      <div className="skipper-content">
        <h2>{t('skipper.title')}</h2>
        <p>{t('skipper.text')}</p>
        <div className="skipper-price">{t('skipper.price')}</div>
        <p className="skipper-note">{t('skipper.note')}</p>
        <ul className="skipper-details">
          <li>{t('skipper.detail1')}</li>
          <li>{t('skipper.detail2')}</li>
          <li>{t('skipper.detail3')}</li>
          <li>{t('skipper.detail4')}</li>
        </ul>
        <a href="tel:+4560534381" className="btn-primary">{t('skipper.cta')}</a>
      </div>
    </section>
  );
}
export default SkipperSection;
