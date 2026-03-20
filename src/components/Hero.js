import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <p className="hero-text">{t('hero.text')}</p>
        <div className="hero-buttons">
          <a href="#kontakt" className="btn-primary">{t('hero.cta_contact')}</a>
          <a href="#typer" className="btn-outline">{t('hero.cta_boats')}</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
