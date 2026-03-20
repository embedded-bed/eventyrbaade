import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Besøg os</h4>
          <p>Feddet Strand Resort, Faxe</p>
          <p>eller Præstø Havn</p>
          <p>Danmark</p>
        </div>
        <div className="footer-col">
          <h4>Om Eventyrbåde</h4>
          <p>CVR: 21901687</p>
          <Link to="/om-mig">Om mig</Link>
        </div>
        <div className="footer-col">
          <h4>Kontakt os</h4>
          <a href="tel:+4560534381">60 53 43 81</a>
          <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
        </div>
        <div className="footer-col">
          <h4>Åbningstider</h4>
          <p>Juni – September</p>
          <p>Lørdag & Søndag</p>
          <p>10:00 – 18:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eventyrbåde. Alle rettigheder forbeholdes.</p>
      </div>
    </footer>
  );
}
export default Footer;
