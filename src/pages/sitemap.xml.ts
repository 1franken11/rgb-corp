import type { APIRoute } from 'astro';

const baseUrl = 'https://rgb-corporation.com';

const languages = ['es', 'en', 'pt'] as const;

const pages = [
  { 
    path: '/', 
    lastmod: new Date().toISOString(), 
    changefreq: 'weekly', 
    priority: 1.0 
  },
  { 
    path: '/about/', 
    lastmod: new Date().toISOString(), 
    changefreq: 'monthly', 
    priority: 0.8 
  },
  { 
    path: '/projects/', 
    lastmod: new Date().toISOString(), 
    changefreq: 'weekly', 
    priority: 0.8 
  }
];

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((page) => {
    const urls = languages.map((lang) => {
      const url = lang === 'en' ? page.path : `/${lang}${page.path}`;
      return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${languages.map((hreflang) => {
  const hreflangUrl = hreflang === 'en' ? page.path : `/${hreflang}${page.path}`;
  return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${baseUrl}${hreflangUrl}" />`;
}).join('\n')}
  </url>`;
    });
    return urls.join('\n');
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}; 