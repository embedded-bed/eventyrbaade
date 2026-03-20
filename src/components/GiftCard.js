import React from 'react';
import { FaGift } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './GiftCard.css';

function GiftCard() {
  const { t } = useTranslation();

  return (
    <section className="section giftcard-section">
      <h2 className="section-title">{t('giftcard.title')}</h2>
      <div className="giftcard-content">
        <FaGift className="giftcard-icon" />
        <p>{t('giftcard.text')}</p>
        <a href="tel:+4560534381" className="btn-primary">{t('giftcard.cta')}</a>
      </div>
    </section>
  );
}
export default GiftCard;
