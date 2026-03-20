import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Eventyrbåde</h1>
        <p className="hero-subtitle">Oplevelser på vandet ved Præstø Fjord</p>
        <p className="hero-text">
          Vores eventyrbåde er perfekte til fødselsdage, temafester, firmaevents
          eller bare en sjov dag på vandet. Vi skræddersyr også gerne
          arrangementer efter dine specifikke ønsker.
        </p>
        <div className="hero-buttons">
          <a href="#kontakt" className="btn-primary">Kontakt os</a>
          <a href="#typer" className="btn-outline">Se vores både</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
