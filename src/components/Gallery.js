import React from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

function Gallery() {
  const { t } = useTranslation();

  const images = [
    { src: '/images/canoe1.jpg', caption: t('gallery.kano') },
    { src: '/images/canoe2.jpg', caption: t('gallery.kano_trip') },
    { src: '/images/picnicboats.jpg', caption: t('gallery.picnic') },
    { src: '/images/picnicboat.gif', caption: t('gallery.picnic_trip') },
    { src: '/images/fishing.jpg', caption: t('gallery.fishing') },
    { src: '/images/seal.jpg', caption: t('gallery.seal') },
    { src: '/images/sael2.png', caption: t('gallery.seal2') },
    { src: '/images/mons-klint-denmark.jpg', caption: t('gallery.klint') },
    { src: '/images/mons-klint-beach.jpg', caption: t('gallery.klint_beach') },
    { src: '/images/mocca.jpg', caption: t('gallery.cafe') },
    { src: '/images/foresttower.jpg', caption: t('gallery.foresttower') },
    { src: '/images/harbour.jpg', caption: t('gallery.harbour') },
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
