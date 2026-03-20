import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
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
          <li><a href="#typer" onClick={(e) => { e.preventDefault(); scrollToSection('typer'); }}>{t('nav.boats')}</a></li>
          <li><Link to="/om-mig">{t('nav.about')}</Link></li>
          <li><a href="#kontakt" onClick={(e) => { e.preventDefault(); scrollToSection('kontakt'); }}>{t('nav.contact')}</a></li>
          <li><Link to="/koeb-gavekort">{t('nav.giftcard')}</Link></li>
          <li className="nav-phone">
            <a href="tel:+4560534381"><FaPhone /> {t('nav.phone')}</a>
          </li>
          <li className="nav-lang">
            <button
              className={i18n.language === 'da' ? 'active' : ''}
              onClick={() => changeLanguage('da')}
            >DA</button>
            <button
              className={i18n.language === 'de' ? 'active' : ''}
              onClick={() => changeLanguage('de')}
            >DE</button>
            <button
              className={i18n.language === 'en' ? 'active' : ''}
              onClick={() => changeLanguage('en')}
            >EN</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
