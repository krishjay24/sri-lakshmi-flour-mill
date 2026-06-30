import { useState } from 'react';
import { galleryImages } from '../data/products';
import './Gallery.css';

const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'mill', label: 'Mill' },
  { id: 'products', label: 'Products' },
  { id: 'spices', label: 'Spices' },
  { id: 'packing', label: 'Packing' },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = galleryImages.filter(
    (img) => activeTab === 'all' || img.category === activeTab
  );

  return (
    <main className="gallery-page">
      {/* Hero */}
      <section className="page-hero gallery-hero">
        <div className="container">
          <span className="page-hero__label">Our Mill in Pictures</span>
          <h1 className="page-hero__title">Gallery</h1>
          <p className="page-hero__desc">
            A visual tour through our stone mill, our grains, our spices, and the people
            who make it all happen.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          {/* Filter tabs */}
          <div className="gallery-tabs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                className={`gallery-tab ${activeTab === tab.id ? 'gallery-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="gallery-item"
                style={{ background: img.bg }}
                onClick={() => setLightbox(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(img)}
              >
                <span className="gallery-item__emoji">{img.emoji}</span>
                <div className="gallery-item__overlay">
                  <span className="gallery-item__label">{img.label}</span>
                  <svg className="gallery-item__expand" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <span>🖼️</span>
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <div
              className="gallery-lightbox__img"
              style={{ background: lightbox.bg }}
            >
              <span>{lightbox.emoji}</span>
            </div>
            <div className="gallery-lightbox__info">
              <h3>{lightbox.label}</h3>
              <span className="gallery-lightbox__cat">{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
