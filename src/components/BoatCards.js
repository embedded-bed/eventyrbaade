import React from 'react';
import { FaFish, FaUtensils } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './BoatCards.css';

function BoatCards() {
  const { t } = useTranslation();

  const boats = [
    { icon: <FaFish />, image: '/images/kano1.jpg', title: t('boats.glaskano.title'), desc: t('boats.glaskano.desc') },
    { icon: <FaUtensils />, image: '/images/picnicbåde.jpg', title: t('boats.picnic.title'), desc: t('boats.picnic.desc') },
  ];

  return (
    <section id="typer" className="section boat-cards-section">
      <h2 className="section-title">{t('boats.title')}</h2>
      <p className="section-subtitle">{t('boats.custom')}</p>
      <div className="boat-cards">
        {boats.map((b, i) => (
          <div className="boat-card" key={i}>
            <div className="boat-card-image">
              <img src={b.image} alt={b.title} />
            </div>
            <div className="boat-card-body">
              <div className="boat-card-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <a href="#kontakt" className="btn-primary">{t('boats.cta')}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default BoatCards;
