import { writeFileSync } from 'node:fs';

const siteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, '');
if (siteUrl) {
  const url = new URL(siteUrl);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('VITE_SITE_URL must be the confirmed HTTPS site origin');
  }
  const paths = ['/', '/about', '/products', '/services', '/contact', '/privacy', '/credits'];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${url.origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
  writeFileSync('dist/sitemap.xml', sitemap);
  writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url.origin}/sitemap.xml\n`);
} else {
  console.warn('No confirmed VITE_SITE_URL; canonical URLs and populated sitemap are withheld.');
}
