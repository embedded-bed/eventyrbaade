import React from 'react';
import { FaFish, FaUtensils, FaFlag } from 'react-icons/fa';
import './BoatCards.css';

const boats = [
  {
    icon: <FaFish />,
    title: 'Glaskano',
    desc: 'Book jeres helt egen vandsafari i kanoen af glas og spot fisk – måske tilmed en sæl eller et marsvin.',
  },
  {
    icon: <FaUtensils />,
    title: 'Picnic Boat',
    desc: 'Nyd en medbragt frokostkurv med familie eller venner på en afslappende tur rundt på fjorden.',
  },
  {
    icon: <FaFlag />,
    title: 'Sejlrute for børn',
    desc: 'En særlig sejlrute i glaskano til børnefamilien, hvor I skal finde piratflag og løse opgaver.',
  },
];

function BoatCards() {
  return (
    <section id="typer" className="section boat-cards-section">
      <h2 className="section-title">Vores Både</h2>
      <div className="boat-cards">
        {boats.map((b, i) => (
          <div className="boat-card" key={i}>
            <div className="boat-card-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <a href="#kontakt" className="btn-primary">Kontakt os</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default BoatCards;
