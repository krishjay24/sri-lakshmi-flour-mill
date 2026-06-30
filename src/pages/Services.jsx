import ServiceCard from '../components/ServiceCard';
import BeforeAfterCard from '../components/BeforeAfterCard';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { services, processStepsService } from '../data/services';
import { beforeAfterItems } from '../data/beforeAfter';
import './Services.css';

const WA_NUMBER = '918632212345';

function Services() {
  return (
    <main className="services-page">
      <SEO
        title="Grinding Services"
        description="Rice grinding, gram grinding, chilli grinding, tomato pickle grinding, chilli pickle grinding, ginger garlic paste grinding, rava preparation, and custom grain grinding services."
        path="/services"
      />
      {/* Hero */}
      <section className="services-hero">
        <div className="container services-hero__inner">
          <div className="services-hero__content">
            <span className="page-hero__eyebrow">Grinding Services</span>
            <h1 className="services-hero__title">
              Fresh Grinding &amp; Processing for Your Ingredients
            </h1>
            <p className="services-hero__desc">
              Bring your own rice, gram, chillies, spices, tomatoes, or any grain — we grind and
              process them fresh with full hygiene, care, and customized attention.
            </p>
            <div className="services-hero__buttons">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20grinding%20services.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">Enquire on WhatsApp</Button>
              </a>
              <a href="tel:+918632212345">
                <Button variant="secondary" size="lg">Call Us</Button>
              </a>
            </div>
          </div>
          <div className="services-hero__visual">
            {['🍚', '🌶️', '🫘', '🧄', '🍅', '🌾', '🫑', '⚙️'].map((emoji, i) => (
              <div key={i} className="services-hero__icon-bubble">
                <span>{emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <SectionTitle
            label="All Services"
            title="What We Can Process For You"
            description="From rice to spices, tomatoes to ginger-garlic — bring your ingredients and we handle the rest."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="services-ba">
        <div className="container">
          <SectionTitle
            label="Before &amp; After"
            title="From Raw to Ready"
            description="See the transformation our grinding services deliver — fresh, clean, and hygienically prepared."
          />
          <div className="services-ba__grid">
            {beforeAfterItems.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="container">
          <SectionTitle
            label="How It Works"
            title="Simple 4-Step Process"
            description="Getting your ingredients processed is easy. Here's how it works from start to finish."
          />
          <div className="services-process__grid">
            {processStepsService.map((step) => (
              <div key={step.num} className="services-process__step">
                <div className="services-process__step-num">{step.num}</div>
                <div className="services-process__step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Grinding Details */}
      <section className="services-machine">
        <div className="container services-machine__inner">
          <div className="services-machine__content">
            <span className="section-label">Our Equipment</span>
            <h2 className="services-machine__title">Careful Grinding with Hygiene &amp; Precision</h2>
            <p className="services-machine__desc">
              Our grinding is handled using a combination of traditional stone mills for flours and
              modern wet grinders for pastes. Every machine is cleaned thoroughly between batches to
              prevent cross-contamination.
            </p>
            <p className="services-machine__desc">
              We focus on getting the exact texture right for your requirement — fine or coarse for
              flours, smooth or semi-chunky for pastes — all as per your instructions.
            </p>
            <ul className="services-machine__list">
              {[
                'Traditional stone mills for dry grain grinding',
                'Wet grinder for paste preparations',
                'Cleaned between every batch',
                'Customized coarseness as per requirement',
                'No cross-contamination between ingredients',
              ].map((item, i) => (
                <li key={i}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="services-machine__visual">
            <div className="services-machine__img">
              <span style={{ fontSize: '96px' }}>⚙️</span>
              <p>Traditional Stone Mill</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container services-cta__inner">
          <h2>Ready to bring your ingredients?</h2>
          <p>Visit our mill in Guntur or contact us on WhatsApp to discuss your requirements.</p>
          <div className="services-cta__buttons">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%27d%20like%20to%20use%20your%20grinding%20service.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="wa" size="lg">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+918632212345">
              <Button variant="white-outline" size="lg">Call Now</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
