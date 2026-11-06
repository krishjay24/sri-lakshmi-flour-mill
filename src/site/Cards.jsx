import { EnquiryLink } from './Layout';

export function ProductCard({ product }) {
  return <article className="catalog-card">
    <div className={`catalog-image catalog-image--${product.category}`}>
      {product.image ? <img src={product.image} alt={product.imageAlt} loading="lazy" /> : <span aria-hidden="true" className="placeholder-mark">SL</span>}
    </div>
    <div className="catalog-body"><span className="eyebrow">{product.categoryLabel}</span><h3>{product.name}</h3><p>{product.description}</p>
      <EnquiryLink subject={product.name} className="text-link">Ask about this product <span aria-hidden="true">↗</span></EnquiryLink>
    </div>
  </article>;
}

export function ServiceCard({ service, index }) {
  return <article className="service-tile"><span className="service-index">{String(index + 1).padStart(2, '0')}</span><h3>{service.name}</h3><p>{service.description}</p>
    <EnquiryLink subject={service.name} className="text-link">Ask about this service <span aria-hidden="true">↗</span></EnquiryLink>
  </article>;
}

export function PageIntro({ label, title, description }) {
  return <section className="page-intro"><div className="container"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{description}</p></div></section>;
}

export function ContactStrip() {
  return <section className="contact-strip"><div className="container contact-strip-inner"><div><span className="eyebrow">LET'S TALK</span><h2>Good questions deserve a conversation.</h2><p>Tell us what you are looking for and we will help you find the right next step.</p></div><EnquiryLink subject="your products and services" className="button button--gold">Get in touch <span aria-hidden="true">↗</span></EnquiryLink></div></section>;
}
