import { useState } from 'react';
import SEO from './SEO';
import { PageIntro } from './Cards';
import { business } from '../config/business';
import { whatsappUrl, contactMessage, enquiryMessage } from '../lib/whatsapp';
import { products, services } from './content';
import { validPhone } from '../lib/validation';

const empty = { name: '', phone: '', requirement: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const url = whatsappUrl(contactMessage(form));
  function change(e) { setForm({ ...form, [e.target.name]: e.target.value }); setReady(false); setError(''); }
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !validPhone(form.phone) || !form.requirement) {
      setError('Enter your name, a valid 10–15 digit phone number and a requirement.');
      return;
    }
    if (!url) { setError('Online enquiries are not available until the contact number is confirmed. Please keep your message and check back soon.'); return; }
    setReady(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return <main><SEO title="Contact" path="/contact" description="Contact Sri Lakshmi Tirupatamma Flour Mill about products and customer-provided ingredient grinding. Enquiry details require confirmation." />
    <PageIntro label="CONTACT / START A CONVERSATION" title="Let's talk about what you need." description="Ask about products, grinding or preparing ingredients. Continue to WhatsApp to send your enquiry to the mill." />
    <section className="section"><div className="container contact-grid"><div className="contact-form-panel"><span className="eyebrow">YOUR ENQUIRY</span><h2>Tell us a little <em>more.</em></h2>
      <form onSubmit={submit} noValidate>
        <div className="form-two"><div><label htmlFor="contact-name">Your name *</label><input id="contact-name" name="name" value={form.name} onChange={change} autoComplete="name" required /></div><div><label htmlFor="contact-phone">Your phone *</label><input id="contact-phone" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={change} autoComplete="tel" required /></div></div>
        <div><label htmlFor="contact-requirement">What are you interested in? *</label><select id="contact-requirement" name="requirement" value={form.requirement} onChange={change} required><option value="">Choose an option</option><optgroup label="Products">{products.map((p) => <option key={p.id}>{p.name}</option>)}</optgroup><optgroup label="Grinding services">{services.map((s) => <option key={s.id}>{s.name}</option>)}</optgroup><option>Other enquiry</option></select></div>
        <div><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" value={form.message} onChange={change} placeholder="Tell us about your ingredients, quantity or question..." /></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        {ready && url && <div className="handoff" role="status"><strong>Continue to WhatsApp to send your enquiry.</strong><p>Your message has been prepared, not delivered. If WhatsApp did not open, use this link. Press Send in WhatsApp to finish.</p><a className="button button--green" href={url} target="_blank" rel="noopener noreferrer">Open WhatsApp ↗</a></div>}
        <button className="button button--green" type="submit">{url ? 'Continue to WhatsApp ↗' : 'Check enquiry availability ↗'}</button>
      </form>
    </div><aside className="contact-aside"><span className="eyebrow">BEFORE YOU GO</span><h2>We're here to help you find the right fit.</h2><p>Tell us what you need and we can discuss available products and services.</p><div className="aside-note"><span>01</span><div><strong>Products</strong><p>Ask about availability and pricing.</p></div></div><div className="aside-note"><span>02</span><div><strong>Grinding</strong><p>Ask about ingredients, texture and collection.</p></div></div><a className="button button--green" href={whatsappUrl(enquiryMessage('your products and grinding services'))} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a>{business.address && <address>{business.address}</address>}{business.phone && <a href={`tel:${business.phone}`}>Call {business.phone}</a>}</aside></div></section>
  </main>;
}
