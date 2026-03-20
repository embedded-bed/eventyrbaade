import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isHome = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
            src="http://eventyrbaade.dk/wp-content/uploads/2022/01/Eventyrbaade_nyt-logo-90-x-90-px.png"
            alt="Eventyrbåde logo"
          />
          <span>Eventyrbåde</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#typer" onClick={(e) => { e.preventDefault(); scrollToSection('typer'); }}>Både</a></li>
          <li><Link to="/om-mig">Om mig</Link></li>
          <li><a href="#kontakt" onClick={(e) => { e.preventDefault(); scrollToSection('kontakt'); }}>Kontakt</a></li>
          <li><Link to="/koeb-gavekort">Køb gavekort</Link></li>
          <li className="nav-phone">
            <a href="tel:+4560534381"><FaPhone /> 6053 4381</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
