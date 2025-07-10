import type { APIRoute } from 'astro';

const baseUrl = 'https://rgb-corporation.com';

const pages = [
  { url: '/', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: '/en', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: '/es', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: '/pt', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
  { url: '/en/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  { url: '/es/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  { url: '/pt/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
  { url: '/en/services', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.9 },
  { url: '/es/services', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.9 },
  { url: '/pt/services', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.9 },
  { url: '/en/projects', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
  { url: '/es/projects', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
  { url: '/pt/projects', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
  { url: '/en/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
  { url: '/es/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
  { url: '/pt/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 