import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import './Footer.css';

const WA_NUMBER = '918632212345';

const quickLinks = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact'  },
];

const productLinks = [
  'Premium Rice Flour',
  'Fresh Chilli Powder',
  'Premium Quality Rice',
  'Whole Wheat Flour',
  'Besan (Gram Flour)',
  'Turmeric Powder',
];

const serviceLinks = [
  'Rice Grinding',
  'Chilli Grinding',
  'Gram Grinding',
  'Ginger Garlic Paste',
  'Tomato Pickle Grinding',
  'Custom Grinding',
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src={logo} alt="Sri Lakshmi Tirupatamma Flour Mill logo" className="footer__logo-img" />
          </Link>
          <p className="footer__desc">
            Sri Lakshmi Tirupatamma Flour Mill offers fresh flour, spice products, rice products,
            and custom grinding services with hygiene, freshness, and trusted quality.
          </p>
          <div className="footer__contact-quick">
            <a href="tel:+918632212345" className="footer__contact-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.72h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.08a16 16 0 0 0 6.29 6.29l1.44-1.44a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 86322 12345
            </a>
            <a href={`https://wa.me/${WA_NUMBER}`} className="footer__contact-btn footer__contact-btn--wa" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="footer__link">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="footer__col">
          <h4 className="footer__col-title">Products</h4>
          <ul className="footer__links">
            {productLinks.map((name) => (
              <li key={name}>
                <Link to="/products" className="footer__link">{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Services</h4>
          <ul className="footer__links">
            {serviceLinks.map((name) => (
              <li key={name}>
                <Link to="/services" className="footer__link">{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <address className="footer__address">
            <p>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Main Bazaar, Near Temple,<br/>Guntur, AP — 522003
            </p>
            <p>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Mon–Sat: 8 AM – 7 PM
            </p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2024 Sri Lakshmi Tirupatamma Flour Mill. Traditionally crafted in Guntur, Andhra Pradesh.</p>
          <p>Hygienic · Pure · Traditional</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
