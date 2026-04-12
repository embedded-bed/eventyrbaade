import React, { useState } from 'react';
import { FaBed, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck, FaAnchor, FaUmbrellaBeach, FaShip, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Apartment.css';

const apartmentImages = [
  { src: '/images/livingroom2.jpg', key: 'apartment.gallery_livingroom' },
  { src: '/images/livingroom.jpg', key: 'apartment.gallery_livingroom2' },
  { src: '/images/bed.jpg', key: 'apartment.gallery_bedroom' },
  { src: '/images/loft.jpg', key: 'apartment.gallery_loft' },
  { src: '/images/loft2.jpg', key: 'apartment.gallery_loft2' },
  { src: '/images/kitchen1.jpg', key: 'apartment.gallery_kitchen' },
  { src: '/images/bathroom.jpg', key: 'apartment.gallery_bathroom' },
  { src: '/images/welcome.jpg', key: 'apartment.gallery_welcome' },
  { src: '/images/parking1.jpeg', key: 'apartment.gallery_parking' },
  { src: '/images/keybox.jpg', key: 'apartment.gallery_keybox' },
  { src: '/images/mons-klint-beach.jpg', key: 'apartment.gallery_mons_klint_beach' },
  { src: '/images/mons-klint-denmark.jpg', key: 'apartment.gallery_mons_klint' },
];

function Apartment() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % apartmentImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + apartmentImages.length) % apartmentImages.length);

  const features = [
    t('apartment.feature1'),
    t('apartment.feature2'),
    t('apartment.feature3'),
    t('apartment.feature4'),
    t('apartment.feature5'),
    t('apartment.feature6'),
  ];

  return (
    <section className="section apartment-section">
      <h2 className="section-title">{t('apartment.title')}</h2>
      <p className="apartment-subtitle">{t('apartment.subtitle')}</p>

      <div className="apartment-layout">
        <div className="apartment-hero-image">
          <img
            src={apartmentImages[currentImage].src}
            alt={t(apartmentImages[currentImage].key)}
            className="apartment-main-img"
          />
          <button className="apartment-nav apartment-nav-prev" onClick={prevImage} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="apartment-nav apartment-nav-next" onClick={nextImage} aria-label="Next">
            <FaChevronRight />
          </button>
          <div className="apartment-dots">
            {apartmentImages.map((_, i) => (
              <button
                key={i}
                className={`apartment-dot ${i === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
          <div className="apartment-price-badge">
            <span className="apartment-price-from">{t('apartment.price_from')}</span>
            <span className="apartment-price-amount">{t('apartment.price')}</span>
            <span className="apartment-price-per">{t('apartment.price_per')}</span>
          </div>
        </div>

        <div className="apartment-info">
          <div className="apartment-intro">
            <p>{t('apartment.intro')}</p>
          </div>

          <div className="apartment-distances">
            <div className="apartment-distance"><FaAnchor /> {t('apartment.walk_harbor')}</div>
            <div className="apartment-distance"><FaUmbrellaBeach /> {t('apartment.walk_beach')}</div>
            <div className="apartment-distance"><FaShip /> {t('apartment.boat_tip')}</div>
          </div>

          <div className="apartment-highlights">
            <div className="apartment-highlight">
              <FaBed />
              <div>
                <strong>{t('apartment.rooms_label')}</strong>
                <span>{t('apartment.rooms')}</span>
              </div>
            </div>
            <div className="apartment-highlight">
              <FaUsers />
              <div>
                <strong>{t('apartment.guests_label')}</strong>
                <span>{t('apartment.guests')}</span>
              </div>
            </div>
            <div className="apartment-highlight">
              <FaMapMarkerAlt />
              <div>
                <strong>{t('apartment.location_label')}</strong>
                <span>{t('apartment.location')}</span>
              </div>
            </div>
          </div>

          <div className="apartment-features">
            <h3>{t('apartment.features_title')}</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><FaCheck className="check-icon" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="apartment-description">
            <p>{t('apartment.desc1')}</p>
            <p>{t('apartment.desc2')}</p>
          </div>

          <div className="apartment-contact">
            <h3>{t('apartment.contact_title')}</h3>
            <div className="apartment-contact-items">
              <a href="tel:+4560534381" className="apartment-contact-item">
                <FaPhone />
                <span>+45 60 53 43 81</span>
              </a>
              <a href="mailto:mail@eventyrbaade.dk" className="apartment-contact-item">
                <FaEnvelope />
                <span>mail@eventyrbaade.dk</span>
              </a>
            </div>
            <a href="tel:+4560534381" className="btn-primary">{t('apartment.cta')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Apartment;
