import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';
import './About.css';

const WA_NUMBER = '918632212345';

const highlights = [
  { icon: '🌿', title: 'Fresh Flour Products',      desc: 'Stone-ground wheat, rice, besan and multi-grain flours milled fresh to order.' },
  { icon: '🌶️', title: 'Spice Grinding',            desc: 'Premium Guntur chilli powder, turmeric, coriander — ground fresh with no additives.' },
  { icon: '🍚', title: 'Rice Products',              desc: 'Clean, quality-selected rice for daily family use, sourced from trusted farms.' },
  { icon: '⚙️', title: 'Custom Grinding Services',   desc: 'Bring your own grains or spices — we process them fresh with full hygiene.' },
];

const qualityPoints = [
  { icon: '🧼', title: 'Clean Handling',        desc: 'Every ingredient is handled in a clean, hygienic environment from receipt to packing.' },
  { icon: '🎯', title: 'Carefully Selected',    desc: 'Only quality-grade grains and spices pass our intake inspection.' },
  { icon: '⚙️', title: 'Hygienic Grinding',     desc: 'Our grinding equipment is cleaned regularly to prevent cross-contamination.' },
  { icon: '📦', title: 'Fresh Packing',         desc: 'Products are packed immediately after grinding to lock in freshness and aroma.' },
  { icon: '🤝', title: 'Customer Ingredients',  desc: 'We handle customer-provided ingredients with the same care as our own products.' },
];

function About() {
  return (
    <main className="about-page">
      <SEO
        title="About Us"
        description="Learn about Sri Lakshmi Tirupatamma Flour Mill, our hygienic grinding process, traditional milling, fresh flour products, spice grinding, and quality standards."
        path="/about"
      />
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">About Us</span>
          <h1 className="page-hero__title">Sri Lakshmi Tirupatamma Flour Mill</h1>
          <p className="page-hero__desc">
            Fresh, hygienic, and traditionally processed flour and spice products for every home.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="about-intro">
        <div className="container about-intro__inner">
          <div className="about-intro__content">
            <span className="section-label">Who We Are</span>
            <h2 className="about-intro__title">Trusted by Families in Guntur Since Decades</h2>
            <p className="about-intro__desc">
              Sri Lakshmi Tirupatamma Flour Mill provides fresh rice flour, fresh chilli powder, premium quality rice, rice grinding service, gram grinding service, chilli grinding service, pickle grinding, ginger garlic paste grinding, rava preparation, and custom grain and spice grinding in Andhra Pradesh.
            </p>
            <p className="about-intro__desc">
              Our business is built on four pillars: <strong>hygiene</strong>, <strong>freshness</strong>,
              <strong>traditional taste</strong>, and <strong>customer trust</strong>. Every product that
              leaves our mill carries our promise — pure, clean, and freshly prepared.
            </p>
            <div className="about-intro__stats">
              <div className="about-intro__stat">
                <strong>30+</strong>
                <span>Years of Service</span>
              </div>
              <div className="about-intro__stat">
                <strong>5000+</strong>
                <span>Happy Customers</span>
              </div>
              <div className="about-intro__stat">
                <strong>8+</strong>
                <span>Services Offered</span>
              </div>
            </div>
          </div>
          <div className="about-intro__visual">
            <div className="about-intro__img-main">
              <span style={{ fontSize: '100px' }}>🏭</span>
              <p>Sri Lakshmi Tirupatamma Flour Mill</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Highlights */}
      <section className="about-highlights">
        <div className="container">
          <SectionTitle
            label="What We Offer"
            title="Products &amp; Services We Provide"
            description="From stone-ground flours to custom grinding — everything under one trusted roof."
          />
          <div className="about-highlights__grid">
            {highlights.map((h, i) => (
              <div key={i} className="about-highlights__card">
                <span className="about-highlights__icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="about-quality">
        <div className="container">
          <SectionTitle
            label="Our Standards"
            title="Hygiene &amp; Quality at Every Step"
            description="We follow strict hygiene and quality protocols to ensure every product is safe, fresh, and trustworthy."
          />
          <div className="about-quality__grid">
            {qualityPoints.map((q, i) => (
              <div key={i} className="about-quality__card">
                <div className="about-quality__icon">{q.icon}</div>
                <div>
                  <h3>{q.title}</h3>
                  <p>{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grinding Process */}
      <section className="about-process">
        <div className="container about-process__inner">
          <div className="about-process__content">
            <span className="section-label">How It Works</span>
            <h2 className="about-process__title">From Your Ingredients to Freshly Processed Products</h2>
            <p className="about-process__desc">
              Our custom grinding service is designed for families and small businesses who want
              fresh, hygienic processing of their own ingredients. Simply bring your grains or
              spices — we handle everything else.
            </p>
            <ol className="about-process__steps">
              <li><span>01</span>Bring your clean, dry grains or spices to our mill.</li>
              <li><span>02</span>We inspect, clean, and sort the ingredients for quality.</li>
              <li><span>03</span>Fresh grinding using stone mills or modern equipment as required.</li>
              <li><span>04</span>Hygienically packed or handed back to you freshly processed.</li>
            </ol>
            <Link to="/services">
              <Button variant="primary" size="lg">View All Services</Button>
            </Link>
          </div>
          <div className="about-process__visual">
            <div className="about-process__steps-visual">
              {['🛍️', '🔄', '⚙️', '📦'].map((icon, i) => (
                <div key={i} className="about-process__visual-step">
                  <div className="about-process__visual-icon">{icon}</div>
                  {i < 3 && (
                    <div className="about-process__visual-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to taste the difference?</h2>
          <p>Order our freshly milled products or bring your ingredients for custom grinding.</p>
          <div className="about-cta__buttons">
            <Link to="/products">
              <Button variant="white" size="lg">Shop Products</Button>
            </Link>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <Button variant="white-outline" size="lg">WhatsApp Us</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
