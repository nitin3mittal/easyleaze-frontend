import React, { useEffect, useState } from 'react';
import '../App.css';

const AdZone = ({ zone }) => {
  const [banners, setBanners] = useState([]);
  const [popupVisible, setPopupVisible] = useState(true);

  useEffect(() => {
    fetch('/banners.json') // local testing
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (banner) => banner.zone === zone && banner.active
        );
        setBanners(filtered);
      })
      .catch((err) => {
        console.error('Banner fetch failed:', err);
      });
  }, [zone]);

  // Hide popup if not visible
  if (banners.length === 0 || (zone === 'popup-home' && !popupVisible)) return null;

  // Handle popup-home separately
  if (zone === 'popup-home') {
    return (
      <>
        <div className="popup-overlay" onClick={() => setPopupVisible(false)} />
        <div className="adzone-popup-home">
          <button
            className="popup-close-btn"
            onClick={() => setPopupVisible(false)}
          >
            &times;
          </button>
          {banners.map((banner) => (
            <div key={banner.id} className="adzone-banner">
              <a
                href={banner.link || '#'}
                target={banner.link?.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <img
                  src={banner.image}
                  alt={banner.title || 'Ad Banner'}
                  className="img-fluid"
                />
              </a>
              {banner.title && <div className="banner-title">{banner.title}</div>}
            </div>
          ))}
        </div>
      </>
    );
  }

  // For all other banners
  return (
    <div className={`adzone-wrapper adzone-${zone}`}>
      {banners.map((banner) => (
        <div key={banner.id} className="adzone-banner">
          <a
            href={banner.link || '#'}
            target={banner.link?.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <img
              src={banner.image}
              alt={banner.title || 'Ad Banner'}
              className="img-fluid"
            />
          </a>
          {banner.title && <div className="banner-title">{banner.title}</div>}
        </div>
      ))}
    </div>
  );
};

export default AdZone;