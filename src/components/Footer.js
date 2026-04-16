import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>{t('footer.visit_title')}</h4>
          <p>{t('footer.visit1')}</p>
          <p>{t('footer.visit3')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('footer.about_title')}</h4>
          <p>{t('footer.cvr')}</p>
          <Link to="/om-mig">{t('footer.about_link')}</Link>
        </div>
        <div className="footer-col">
          <h4>{t('footer.contact_title')}</h4>
          <a href="tel:+4560534381">60 53 43 81</a>
          <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
          <a href="https://www.facebook.com/eventyrbaade" target="_blank" rel="noopener noreferrer" className="footer-facebook">
            <FaFacebookF /> {t('footer.facebook')}
          </a>
        </div>
        <div className="footer-col">
          <h4>{t('footer.hours_title')}</h4>
          <p>{t('footer.hours_period')}</p>
          <p>{t('footer.hours_days')}</p>
          <p>{t('footer.hours_time')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eventyrbåde. {t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
export default Footer;
