import { useState } from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import './Contact.css';

const WA_NUMBER = '918632212345';

const infoCards = [
  {
    icon: '📞',
    label: 'Phone Number',
    lines: ['+91 86322 12345'],
    sub: 'Mon–Sat: 8 AM – 7 PM',
    color: 'green',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    lines: ['+91 86322 12345'],
    sub: 'Quick replies on WhatsApp',
    color: 'green',
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: '📍',
    label: 'Address',
    lines: ['Main Bazaar, Near Temple,', 'Guntur, Andhra Pradesh — 522003'],
    color: 'green',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    lines: ['Monday – Saturday', '8:00 AM – 7:00 PM'],
    sub: 'Closed on Sundays',
    color: 'green',
  },
];

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', requirement: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `Hi, I'm ${form.name}.\nPhone: ${form.phone}\nRequirement: ${form.requirement}\n\n${form.message}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', requirement: '', message: '' });
  };

  return (
    <main className="contact-page">
      <SEO
        title="Contact Us"
        description="Contact Sri Lakshmi Tirupatamma Flour Mill for fresh flour products, spice products, rice products, and custom grinding services."
        path="/contact"
      />
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero__title">Let&apos;s connect over quality.</h1>
          <p className="contact-hero__desc">
            Reach us for fresh products, grinding services, and custom processing requirements.
            We&apos;re always happy to help.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-wrap__title">Send us a message</h2>
            {submitted && (
              <div className="contact-success">
                ✅ Message sent! Redirected you to WhatsApp for instant response.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label>NAME</label>
                  <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="contact-form__field">
                  <label>PHONE NUMBER</label>
                  <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact-form__field">
                <label>PRODUCT / SERVICE REQUIREMENT</label>
                <select name="requirement" value={form.requirement} onChange={handleChange} required>
                  <option value="">Select a requirement</option>
                  <option>Rice Flour</option>
                  <option>Chilli Powder</option>
                  <option>Wheat Flour</option>
                  <option>Besan (Gram Flour)</option>
                  <option>Rice Grinding Service</option>
                  <option>Gram Grinding Service</option>
                  <option>Chilli Grinding Service</option>
                  <option>Ginger Garlic Paste Service</option>
                  <option>Tomato Pickle Grinding</option>
                  <option>Custom Grinding Service</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="contact-form__field">
                <label>MESSAGE</label>
                <textarea name="message" rows={5} placeholder="Tell us about your requirement, quantity, location, etc." value={form.message} onChange={handleChange} />
              </div>
              <Button type="submit" variant="primary" size="lg">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className="contact-info-sidebar">
            {infoCards.map((card, i) => (
              <div key={i} className="contact-info-item">
                <div className="contact-info-item__icon">{card.icon}</div>
                <div>
                  <strong>{card.label}</strong>
                  {card.lines.map((l, j) => (
                    card.href
                      ? <a key={j} href={card.href} target="_blank" rel="noopener noreferrer" className="contact-info-item__link">{l}</a>
                      : <p key={j}>{l}</p>
                  ))}
                  {card.sub && <small>{card.sub}</small>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="contact-map">
        <div className="container">
          <div className="contact-map__box">
            <div className="contact-map__bg">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6,78,47,0.08)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mgrid)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(6,78,47,0.12)" strokeWidth="3"/>
                <line x1="35%" y1="0" x2="45%" y2="100%" stroke="rgba(6,78,47,0.1)" strokeWidth="2"/>
                <line x1="65%" y1="0" x2="58%" y2="100%" stroke="rgba(6,78,47,0.1)" strokeWidth="2"/>
                <circle cx="50%" cy="50%" r="8" fill="var(--accent)"/>
                <circle cx="50%" cy="50%" r="16" fill="rgba(201,37,45,0.2)"/>
              </svg>
            </div>
            <div className="contact-map__card">
              <h3>
                <span>📍</span> Visit Our Mill
              </h3>
              <p>
                Come experience the traditional stone-grinding process firsthand.<br />
                <strong>Main Bazaar, Guntur, Andhra Pradesh — 522003</strong>
              </p>
              <a
                href="https://maps.google.com/?q=Guntur,AndhraPradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map__directions-btn"
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
