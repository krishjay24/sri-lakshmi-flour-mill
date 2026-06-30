import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import { products, categories } from '../data/products';
import './Products.css';

const WA_NUMBER = '918632212345';

function Products() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="products-page">
      <SEO
        title="Products"
        description="Explore premium rice flour, fresh chilli powder, and premium quality rice from Sri Lakshmi Tirupatamma Flour Mill."
        path="/products"
      />
      {/* Hero */}
      <section className="page-hero products-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Our Products</span>
          <h1 className="page-hero__title">Freshly Prepared Products</h1>
          <p className="page-hero__desc">
            Freshly prepared flour, spice, and rice products with trusted quality, natural ingredients,
            and hygienic stone-grinding methods.
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="products-listing">
        <div className="container">
          {/* Filters */}
          <div className="products-listing__toolbar">
            <div className="products-filters">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`products-filter-btn${activeCategory === cat.id ? ' products-filter-btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="products-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="products-search__clear" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="products-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <span>🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter.</p>
              <Button variant="secondary" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="products-info">
        <div className="container">
          <SectionTitle
            label="Our Quality Promise"
            title="Why Our Products Are Different"
            description="Every product is stone-ground, freshly packed, and free from artificial colors, preservatives, and additives."
          />
          <div className="products-info__grid">
            {[
              { icon: '⚙️', t: 'Stone Ground',        d: 'Traditional stone mills preserve nutrients and enhance flavor.' },
              { icon: '🚫', t: 'No Additives',         d: 'Zero preservatives, artificial color, or fillers — ever.' },
              { icon: '📦', t: 'Packed Fresh',         d: 'Every product is packed immediately after grinding for maximum freshness.' },
              { icon: '🤝', t: 'Trusted Sourcing',     d: 'Grains and spices sourced directly from local Guntur-area farmers.' },
            ].map((item, i) => (
              <div key={i} className="products-info__card">
                <span className="products-info__icon">{item.icon}</span>
                <h4>{item.t}</h4>
                <p>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="products-wa-cta">
        <div className="container products-wa-cta__inner">
          <div>
            <h3>Want to place a bulk or custom order?</h3>
            <p>Special pricing for restaurants, dabbas, and wholesale buyers.</p>
          </div>
          <a href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20place%20a%20bulk%20order.%20Please%20share%20details.`} target="_blank" rel="noopener noreferrer">
            <Button variant="wa" size="lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Products;
