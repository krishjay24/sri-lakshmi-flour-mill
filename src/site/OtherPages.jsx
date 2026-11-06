import { Link } from 'react-router-dom';
import SEO from './SEO';
import { PageIntro } from './Cards';

export function Privacy() {
  return <main><SEO title="Privacy Policy" path="/privacy" description="How this website handles enquiry information and local browser data." />
    <PageIntro label="YOUR PRIVACY" title="Privacy policy" description="A straightforward explanation of how this website handles information." />
    <section className="section"><div className="container prose"><h2>Information you enter</h2><p>Contact form details remain in your browser while you use the page. The website does not store or deliver them to us. If you choose to open WhatsApp, your prepared enquiry is passed to WhatsApp; you decide whether to send it. WhatsApp's own privacy terms then apply.</p><h2>Analytics and cookies</h2><p>This website does not currently load analytics or advertising trackers. No analytics consent is requested because tracking is disabled.</p><h2>Fonts and external links</h2><p>Page fonts are requested from Google Fonts, which may receive your IP address and browser details. Links to third-party services open their own websites and are subject to their privacy practices. To ask about privacy, use the <Link to="/contact">contact page</Link> once confirmed contact details are available.</p></div></section>
  </main>;
}

const photos = [
  ['Rice flour', 'Nithyasrm', 'https://commons.wikimedia.org/wiki/File:Picture_of_homemade_Rice_flour.JPG', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['Uncooked rice', 'VinhNguyen.1257', 'https://commons.wikimedia.org/wiki/File:Uncooked_ST25_rice_on_bamboo_surface.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['Gram flour', 'AlexanderVanLoon', 'https://commons.wikimedia.org/wiki/File:Gram_flour_AvL.jpg', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'],
  ['Turmeric powder', 'Marina Pershina', 'https://commons.wikimedia.org/wiki/File:Turmeric_Powder.jpg', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'],
];

export function PhotoCredits() {
  return <main><SEO title="Photo Credits" path="/credits" description="Attributions and licenses for the representative ingredient photographs used on this site." />
    <PageIntro label="IMAGE SOURCES" title="Photo credits" description="Representative ingredient photographs are stock images, not pictures of products or facilities belonging to the mill." />
    <section className="section"><div className="container prose"><p>These Wikimedia Commons photographs are shown at their source-provided preview resolution; no image content was edited. Display cropping is applied by the layout.</p>
      {photos.map(([subject, author, source, license, licenseUrl]) => <p key={subject}><strong>{subject}</strong> — {author}. <a href={source} target="_blank" rel="noopener noreferrer">Original image</a> · <a href={licenseUrl} target="_blank" rel="noopener noreferrer">{license}</a>.</p>)}
    </div></section>
  </main>;
}

export function NotFound() {
  return <main><SEO title="Page Not Found" path="" description="This page could not be found." noIndex /><section className="not-found container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Looks like we've taken a <em>wrong turn.</em></h1><p>The page you are looking for is not here.</p><Link className="button button--green" to="/">Back to home ↗</Link></section></main>;
}
