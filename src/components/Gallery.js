import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

function Gallery() {
  const { t } = useTranslation();

  const images = [
    { src: '/images/kano1.jpg', caption: t('gallery.kano') },
    { src: '/images/kano2.jpg', caption: t('gallery.kano_trip') },
    { src: '/images/picnicbåde.jpg', caption: t('gallery.picnic') },
    { src: '/images/Lystfiskeri.jpg', caption: t('gallery.fishing') },
    { src: '/images/sæl.jpg', caption: t('gallery.seal') },
    { src: '/images/sael2.png', caption: t('gallery.seal2') },
  ];

  return (
    <section className="section gallery-section">
      <h2 className="section-title">{t('gallery.title')}</h2>
      <p className="gallery-intro">{t('gallery.intro')}</p>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Gallery;
