import React from 'react';
import './SkipperSection.css';

function SkipperSection() {
  return (
    <section className="section skipper-section">
      <div className="skipper-content">
        <h2>Nu kan du blive "skipper" for 1 dag</h2>
        <p>
          4 timers frokosttur i Picnicbåd til den Hvide Lagune på spidsen af
          Feddet. Hop i bølgen blå eller sejl på hyggetur til Præstø Havn.
        </p>
        <div className="skipper-price">Pris kun kr. 1.200</div>
        <p className="skipper-note">
          Ring for ledige tider. Følg den planlagte sejlrute fra Feddet Strand Resort
          (Fed Havn). Der kræves ikke sejlerbevis, dog minimum 21 år.
        </p>
        <ul className="skipper-details">
          <li>Godkendt op til 8 personer eller 690 kg</li>
          <li>Benzin er inkluderet i prisen</li>
          <li>Lån af redningsveste inkluderet</li>
          <li>Fri parkering ved havnen på Feddet Strand Resort</li>
        </ul>
        <a href="tel:+4560534381" className="btn-primary">Ring og book</a>
      </div>
    </section>
  );
}
export default SkipperSection;
