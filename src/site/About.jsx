import { Link } from 'react-router-dom';
import SEO from './SEO';
import { PageIntro, ContactStrip } from './Cards';
import { imagery } from './content';

export default function About() {
  return <main><SEO title="About Us" path="/about" description="Learn about Sri Lakshmi Tirupatamma Flour Mill's product categories and customer-provided ingredient grinding services." />
    <PageIntro label="OUR STORY / OUR WORK" title="A mill for the meals that bring us together." description="Flour, spices, rice and grinding services: the everyday ingredients behind so many favourite dishes." />
    <section className="section"><div className="container split"><div className="split-image"><img src={imagery.flour} alt="Illustration of wheat grains and flour" loading="lazy" /></div><div className="split-copy"><span className="eyebrow">WHO WE ARE</span><h2>Good food begins with <em>good ingredients.</em></h2><p>Sri Lakshmi Tirupatamma Flour Mill presents a range of flour, spice and rice products alongside grinding services for ingredients supplied by customers.</p><p>We want it to be easy to find what you need: browse our catalogue, explore the services and contact us to confirm the details before visiting.</p><Link className="button button--green" to="/products">Explore our products ↗</Link></div></div></section>
    <section className="section section--cream"><div className="container"><div className="section-head"><div><span className="eyebrow">WHAT WE DO</span><h2>One place, <em>many possibilities.</em></h2></div></div><div className="steps-grid"><div><span>01</span><h3>Flour & rice</h3><p>Discover the flour and rice products represented in our catalogue.</p></div><div><span>02</span><h3>Spices</h3><p>Explore chilli and turmeric products for everyday cooking.</p></div><div><span>03</span><h3>Your ingredients</h3><p>Ask about grain, spice, paste and pickle ingredient processing.</p></div></div></div></section><ContactStrip />
  </main>;
}
