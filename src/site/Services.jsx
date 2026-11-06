import SEO from './SEO';
import { services } from './content';
import { ServiceCard, PageIntro, ContactStrip } from './Cards';

export default function Services() {
  return <main><SEO title="Grinding Services" path="/services" description="Ask about rice, gram, chilli, pickle ingredient, paste, rava and custom grain and spice grinding services." />
    <PageIntro label="YOUR INGREDIENTS / OUR SERVICES" title="Grinding for the way you cook." description="Explore eight services listed by the mill. Get in touch to confirm whether your ingredients and desired texture can be accommodated." />
    <section className="section"><div className="container"><div className="section-head"><div><span className="eyebrow">THE SERVICE LIST</span><h2>Find the right <em>grind.</em></h2></div><p>Availability and preparation details should be confirmed with the mill before bringing ingredients.</p></div>
      <div className="service-grid service-grid--light">{services.map((service, i) => <ServiceCard key={service.id} service={service} index={i} />)}</div>
    </div></section>
    <section className="section section--cream"><div className="container"><div className="section-head"><div><span className="eyebrow">BEFORE YOU VISIT</span><h2>Let's get the details <em>right.</em></h2></div></div><div className="steps-grid"><div><span>01</span><h3>Tell us your ingredient</h3><p>Share what you would like processed and your approximate quantity.</p></div><div><span>02</span><h3>Discuss your result</h3><p>Let us know the texture or preparation you are looking for.</p></div><div><span>03</span><h3>Confirm the visit</h3><p>Check availability, preparation instructions and collection arrangements.</p></div></div></div></section><ContactStrip />
  </main>;
}
