import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t } = useTranslation();

  return (
    <section className="section about-section">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="about-content">
        <p className="about-intro">{t('about.intro')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
        <p className="about-signature">{t('about.signature')}</p>
      </div>
    </section>
  );
}
export default About;
