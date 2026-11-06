import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo-mark.png';
import { business } from '../config/business';
import { whatsappUrl, enquiryMessage } from '../lib/whatsapp';

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/products', 'Products'],
  ['/services', 'Grinding services'], ['/contact', 'Contact'],
];

export function EnquiryLink({ subject, children = 'Enquire on WhatsApp', className = 'button button--gold' }) {
  const url = whatsappUrl(enquiryMessage(subject));
  return url
    ? <a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link className={className} to="/contact">{children === 'Enquire on WhatsApp' ? 'Contact us' : children}</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  useEffect(() => { if (open) document.getElementById('site-menu-button')?.focus(); }, [open]);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);
  useEffect(() => {
    if (!open) return undefined;
    const close = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  function search(e) {
    e.preventDefault();
    navigate(`/products${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ''}`);
    setOpen(false);
  }
  return <header className="site-header">
    <div className="container header-inner">
      <Link to="/" className="brand" aria-label={`${business.businessName} home`}>
        <img src={logo} alt="" width="56" height="56" />
        <span><strong>Sri Lakshmi Tirupatamma</strong><small>FLOUR MILL</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([path, label]) => <NavLink key={path} end={path === '/'} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
      </nav>
      <form className="header-search" onSubmit={search} role="search">
        <label className="sr-only" htmlFor="header-search">Search products</label>
        <input id="header-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" />
        <button aria-label="Submit product search" type="submit">⌕</button>
      </form>
      <button id="site-menu-button" className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    </div>
    {open && <div id="mobile-menu" className="mobile-menu">
      <nav aria-label="Mobile navigation">{links.map(([path, label]) => <NavLink key={path} end={path === '/'} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
      <form onSubmit={search} role="search"><label htmlFor="mobile-search">Find a product</label><div className="search-row"><input id="mobile-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" /><button type="submit">Search</button></div></form>
    </div>}
  </header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><span className="eyebrow">FROM GRAIN TO TABLE</span><h2>{business.businessName}</h2><p>Explore our flour, spice and rice products, or ask about grinding your own ingredients.</p></div>
    <div><h3>Explore</h3>{links.map(([path, label]) => <Link key={path} to={path}>{label}</Link>)}<Link to="/privacy">Privacy policy</Link><Link to="/credits">Photo credits</Link></div>
    <div><h3>What we offer</h3><Link to="/products?category=flours">Flour products</Link><Link to="/products?category=spices">Spice products</Link><Link to="/products?category=grains">Rice products</Link><Link to="/services">Custom grinding</Link></div>
    <div><h3>Get in touch</h3><p>Have a question about a product or service?</p><Link className="footer-contact" to="/contact">Send an enquiry ↗</Link>{whatsappUrl() && <a href={whatsappUrl(enquiryMessage('your products and services'))} target="_blank" rel="noopener noreferrer">WhatsApp {business.whatsappNumber}</a>}{business.phone && <a href={`tel:${business.phone}`}>Call {business.phone}</a>}{business.address && <p>{business.address}</p>}</div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.businessName}</span><span>Made for good food, every day.</span></div></footer>;
}

export function ScrollTools() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, window.scrollY / max * 100) : 0);
      setShowTop(window.scrollY > 480);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);
  const url = whatsappUrl(enquiryMessage('your products and services'));
  return <>
    <div className="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuenow={Math.round(progress)} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }} />
    <div className="floating-actions">
      {showTop && <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>↑</button>}
      {url && <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></a>}
    </div>
  </>;
}
