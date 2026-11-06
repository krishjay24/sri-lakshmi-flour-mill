import { Helmet } from 'react-helmet-async';
import { business } from '../config/business';

export default function SEO({ title, description, path = '', noIndex = false }) {
  const fullTitle = title ? `${title} | ${business.businessName}` : business.businessName;
  const canonical = business.siteUrl ? `${business.siteUrl.replace(/\/$/, '')}${path}` : null;
  return <Helmet>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    {noIndex && <meta name="robots" content="noindex,follow" />}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    {!noIndex && <script type="application/ld+json">{JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: business.businessName,
      description: 'Flour, spice and rice products and customer-provided ingredient grinding.',
      ...(canonical ? { url: business.siteUrl.replace(/\/$/, '') } : {}),
    })}</script>}
    {canonical && <meta property="og:url" content={canonical} />}
    {canonical && <meta property="og:image" content={`${business.siteUrl.replace(/\/$/, '')}/og-image.jpg`} />}
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>;
}
