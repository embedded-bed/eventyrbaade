import React from 'react';
import { FaGift } from 'react-icons/fa';
import './GiftCard.css';

function GiftCard() {
  return (
    <section className="section giftcard-section">
      <h2 className="section-title">Køb gavekort</h2>
      <div className="giftcard-content">
        <FaGift className="giftcard-icon" />
        <p>
          Giv en uforglemmelig oplevelse i gave! Book jeres helt egen vandsafari
          i kanoen af glas og spot fisk – måske tilmed en sæl eller et marsvin.
        </p>
        <a href="tel:+4560534381" className="btn-primary">
          Ring for gavekort: (+45) 6053 4381
        </a>
      </div>
    </section>
  );
}
export default GiftCard;
