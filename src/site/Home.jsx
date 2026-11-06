import { Link } from 'react-router-dom';
import SEO from './SEO';
import { products, services, imagery } from './content';
import { ProductCard, ServiceCard, ContactStrip } from './Cards';

export default function Home() {
  return <main>
    <SEO description="Explore flour, spices, rice and customer-provided ingredient grinding at Sri Lakshmi Tirupatamma Flour Mill." path="/" />
    <section className="home-hero"><div className="container hero-grid">
      <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> FLOUR · SPICE · RICE</span>
        <h1>Freshly ground goodness, <em>rooted in tradition.</em></h1>
        <p>From pantry staples to grinding your own ingredients, discover the products and services of Sri Lakshmi Tirupatamma Flour Mill.</p>
        <div className="button-row"><Link className="button button--green" to="/products">Explore products <span aria-hidden="true">↗</span></Link><Link className="button button--outline" to="/services">Grinding services <span aria-hidden="true">→</span></Link></div>
        <div className="hero-footnote"><span className="grain-icon" aria-hidden="true">✳</span><span>For the everyday meals that matter most.</span></div>
      </div>
      <div className="hero-art"><div className="hero-orbit" aria-hidden="true" /><div className="hero-photo"><img src={imagery.flour} alt="Illustration of wheat grains and flour" fetchPriority="high" /></div><div className="hero-stamp"><span>GOOD FOOD</span><strong>starts here</strong><span>✳</span></div><div className="hero-caption">01 / THE ESSENTIALS</div></div>
    </div></section>
    <div className="marquee" aria-hidden="true"><div>FLOUR PRODUCTS <span>✳</span> SPICE PRODUCTS <span>✳</span> RICE PRODUCTS <span>✳</span> CUSTOM GRINDING <span>✳</span> FLOUR PRODUCTS <span>✳</span> SPICE PRODUCTS <span>✳</span></div></div>
    <section className="section" id="products"><div className="container">
      <div className="section-head"><div><span className="eyebrow">01 / THE PANTRY</span><h2>Everyday essentials,<br /><em>thoughtfully chosen.</em></h2></div><Link className="text-link" to="/products">View all products ↗</Link></div>
      <div className="product-grid">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </div></section>
    <section className="section section--green"><div className="container"><div className="section-head"><div><span className="eyebrow">02 / MADE FOR YOU</span><h2>Bring the ingredients.<br /><em>We'll talk grinding.</em></h2></div><p>Explore the services listed by the mill. Contact us to confirm suitability and availability for your ingredients.</p></div>
      <div className="service-grid">{services.slice(0, 4).map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}</div>
      <Link className="button button--cream section-cta" to="/services">See all grinding services ↗</Link>
    </div></section>
    <section className="story-feature"><div className="story-visual"><img src={imagery.chilli} alt="Illustration of chilli powder" loading="lazy" /></div><div className="story-content"><span className="eyebrow">03 / A LITTLE HEAT</span><h2>A place for <em>spice</em> in every kitchen.</h2><p>Chilli powder is one of the spice products listed in our catalogue. Ask us about current availability and grinding options.</p><Link className="button button--green" to="/products?category=spices">Discover spices ↗</Link></div></section>
    <section className="section section--cream"><div className="container"><div className="section-head"><div><span className="eyebrow">04 / HOW TO BEGIN</span><h2>Simple, from the <em>first enquiry.</em></h2></div></div>
      <div className="steps-grid"><div><span>01</span><h3>Explore</h3><p>Browse our products and grinding services to find what you need.</p></div><div><span>02</span><h3>Ask</h3><p>Tell us which ingredients or products you have in mind.</p></div><div><span>03</span><h3>Confirm</h3><p>Check availability, preparation and collection details before visiting.</p></div></div>
    </div></section>
    <ContactStrip />
  </main>;
}
