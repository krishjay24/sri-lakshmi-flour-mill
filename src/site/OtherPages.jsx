import { Link } from 'react-router-dom';
import SEO from './SEO';
import { PageIntro } from './Cards';

export function Privacy() {
  return <main><SEO title="Privacy Policy" path="/privacy" description="How this website handles enquiry information and local browser data." />
    <PageIntro label="YOUR PRIVACY" title="Privacy policy" description="A straightforward explanation of how this website handles information." />
    <section className="section"><div className="container prose"><h2>Information you enter</h2><p>Contact form details remain in your browser while you use the page. The website does not store or deliver them to us. If you choose to open WhatsApp, your prepared enquiry is passed to WhatsApp; you decide whether to send it. WhatsApp's own privacy terms then apply.</p><h2>Analytics and cookies</h2><p>This website does not currently load analytics or advertising trackers. No analytics consent is requested because tracking is disabled.</p><h2>Fonts and external links</h2><p>Page fonts are requested from Google Fonts, which may receive your IP address and browser details. Links to third-party services open their own websites and are subject to their privacy practices. To ask about privacy, use the <Link to="/contact">contact page</Link> once confirmed contact details are available.</p></div></section>
  </main>;
}
export function NotFound() {
  return <main><SEO title="Page Not Found" path="" description="This page could not be found." noIndex /><section className="not-found container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Looks like we've taken a <em>wrong turn.</em></h1><p>The page you are looking for is not here.</p><Link className="button button--green" to="/">Back to home ↗</Link></section></main>;
}
