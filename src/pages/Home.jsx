import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import BeforeAfterCard from '../components/BeforeAfterCard';
import SEO from '../components/SEO';
import { whyChooseUs, products } from '../data/products';
import { beforeAfterItems } from '../data/beforeAfter';
import { processStepsService } from '../data/services';
import heroImg from '../assets/images/hero-flour.png';
import chilliImg from '../assets/images/chilli-powder.png';
import './Home.css';

const WA_NUMBER = '918632212345';
const featuredProducts = products.slice(0, 3);

/* ── HERO ── */
function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__label">100% Fresh &amp; Hygienic</span>
          <h1 className="hero__title">
            Freshly Ground Premium Flour for Every Home
          </h1>
          <p className="hero__desc">
            Pure, hygienic and traditionally milled flour made from carefully selected grains.
            Experience the difference of stone-ground quality.
          </p>
          <div className="hero__buttons">
            <Link to="/products">
              <Button variant="primary" size="lg">Explore Products</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__img-frame">
            <img src={heroImg} alt="Sri Lakshmi Tirupatamma Flour Mill - Traditional stone-ground premium flour and wheat grains" className="hero__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WHY CHOOSE US ── */
function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">
        <SectionTitle
          label="Why Choose Us"
          title="Trusted Quality Crafted With Tradition"
          description="From carefully selected grains to freshly packed products — every step reflects our commitment to purity."
        />
        <div className="why-us__grid">
          {whyChooseUs.map((item) => (
            <FeatureCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CHILLI HIGHLIGHT ── */
function ChilliHighlight() {
  return (
    <section className="chilli-highlight">
      <div className="container chilli-highlight__inner">
        <div className="chilli-highlight__img-col">
          <div className="chilli-highlight__img-wrap">
            <img src={chilliImg} alt="Traditional Guntur chilli powder grinding service by Sri Lakshmi Tirupatamma Flour Mill" className="chilli-highlight__img" />
          </div>
        </div>
        <div className="chilli-highlight__content">
          <span className="section-label">Our Signature Spice</span>
          <h2 className="chilli-highlight__title">
            Authentic Guntur Chilli Powder — Bold, Aromatic &amp; Pure
          </h2>
          <p className="chilli-highlight__desc">
            Sourced directly from Guntur&apos;s finest farms, our chilli powder is stone-ground fresh
            in small batches to lock in the deep crimson color, intense aroma, and authentic heat
            that Andhra cooking is known for. No artificial color. No preservatives.
          </p>
          <div className="chilli-highlight__points">
            <div className="chilli-highlight__point">
              <span className="chilli-highlight__point-dot" />
              <div>
                <strong>Traditional Small-Batch Grinding</strong>
                <p>Stone-ground to preserve volatile oils and maximum capsaicin.</p>
              </div>
            </div>
            <div className="chilli-highlight__point">
              <span className="chilli-highlight__point-dot" />
              <div>
                <strong>100% Natural — No Additives</strong>
                <p>No artificial color, no fillers, just pure Guntur chilli powder.</p>
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20Guntur%20Chilli%20Powder.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="accent" size="lg">Order on WhatsApp</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── PRODUCTS SHOWCASE ── */
function ProductsShowcase() {
  return (
    <section className="products-showcase">
      <div className="container">
        <SectionTitle
          label="Our Products"
          title="From Our Mill to Your Kitchen"
          description="Stone-ground, nutrient-rich staples crafted with traditional methods and packed fresh."
        />
        <div className="products-showcase__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="products-showcase__cta">
          <Link to="/products">
            <Button variant="secondary" size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES OVERVIEW ── */
function ServicesOverview() {
  const serviceIcons = [
    { icon: '🍚', name: 'Rice Grinding' },
    { icon: '🫘', name: 'Gram Grinding' },
    { icon: '🌶️', name: 'Chilli Grinding' },
    { icon: '🍅', name: 'Tomato Pickle Grinding' },
    { icon: '🫑', name: 'Chilli Pickle Grinding' },
    { icon: '🧄', name: 'Ginger Garlic Paste' },
    { icon: '🌾', name: 'Rava Preparation' },
    { icon: '⚙️', name: 'Custom Grinding' },
  ];

  return (
    <section className="services-overview">
      <div className="container">
        <SectionTitle
          label="Grinding Services"
          title="We Grind Your Ingredients Fresh"
          description="Bring your own rice, gram, chillies, spices, or any grain — we process it fresh with full hygiene and care."
        />
        <div className="services-overview__grid">
          {serviceIcons.map((s, i) => (
            <div key={i} className="services-overview__item">
              <span className="services-overview__icon">{s.icon}</span>
              <span className="services-overview__name">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="services-overview__cta">
          <Link to="/services">
            <Button variant="secondary" size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── BEFORE & AFTER ── */
function BeforeAfterSection() {
  return (
    <section className="ba-section">
      <div className="container">
        <SectionTitle
          label="Before &amp; After"
          title="From Raw Ingredients to Freshly Processed Products"
          description="See the transformation — fresh, clean, and hygienically prepared at every step."
        />
        <div className="ba-section__grid">
          {beforeAfterItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS PREVIEW ── */
function ProcessPreview() {
  return (
    <section className="process-preview">
      <div className="container">
        <SectionTitle
          label="Our Process"
          title="Simple, Clean &amp; Transparent"
          description="Four easy steps from when you bring your ingredients to when you take them back — freshly processed."
        />
        <div className="process-preview__grid">
          {processStepsService.map((step) => (
            <div key={step.num} className="process-preview__step">
              <div className="process-preview__step-num">{step.num}</div>
              <div className="process-preview__step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT CTA ── */
function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container contact-cta__inner">
        <h2 className="contact-cta__title">Need Fresh Flour or Grinding Services?</h2>
        <p className="contact-cta__desc">
          Sri Lakshmi Tirupatamma Flour Mill provides fresh rice flour, fresh chilli powder, premium quality rice, rice grinding service, gram grinding service, chilli grinding service, pickle grinding, ginger garlic paste grinding, rava preparation, and custom grain and spice grinding in Andhra Pradesh.
        </p>
        <div className="contact-cta__buttons">
          <a href="tel:+918632212345">
            <Button variant="white" size="lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.72h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.08a16 16 0 0 0 6.29 6.29l1.44-1.44a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </Button>
          </a>
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <Button variant="wa" size="lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sri Lakshmi Tirupatamma Flour Mill',
    url: 'https://sri-lakshmi-tirupatamma-flour-mill.netlify.app',
    image: 'https://sri-lakshmi-tirupatamma-flour-mill.netlify.app/og-image.jpg',
    description:
      'Sri Lakshmi Tirupatamma Flour Mill provides fresh rice flour, fresh chilli powder, premium quality rice, and custom grinding services including rice grinding, gram grinding, chilli grinding, pickle grinding, ginger garlic paste grinding, and rava preparation in Andhra Pradesh.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'State',
      name: 'Andhra Pradesh',
    },
    openingHours: 'Mo-Sa 08:00-20:00',
  };

  return (
    <main>
      <SEO
        title="Fresh Flour, Spices, Rice & Grinding Services"
        description="Sri Lakshmi Tirupatamma Flour Mill offers fresh rice flour, chilli powder, premium quality rice, rice grinding, chilli grinding, pickle grinding, ginger garlic paste grinding, and rava preparation services."
        path="/"
        jsonLd={localBusinessSchema}
      />
      <HeroSection />
      <WhyChooseUs />
      <ChilliHighlight />
      <ProductsShowcase />
      <ServicesOverview />
      <BeforeAfterSection />
      <ProcessPreview />
      <ContactCTA />
    </main>
  );
}

export default Home;
