import type { APIRoute } from 'astro';

const baseUrl = 'https://rgb-corporation.com';

// Define your content items (projects, services, etc.)
const contentItems = [
  {
    title: 'Instalación de Pisos de Vinilo en Jacksonville',
    description: 'Servicios profesionales de instalación de pisos de vinilo en Jacksonville, Florida. Calidad garantizada y precios competitivos.',
    url: '/es/flooring',
    pubDate: new Date('2024-01-15'),
    category: 'Flooring Installation'
  },
  {
    title: 'Instalación de Porcelanato y Cerámica',
    description: 'Especialistas en instalación de porcelanato y cerámica para cocinas, baños y áreas comerciales en Jacksonville.',
    url: '/es/flooring',
    pubDate: new Date('2024-01-10'),
    category: 'Tile Installation'
  },
  {
    title: 'Renovación de Cocinas Jacksonville',
    description: 'Servicios completos de renovación de cocinas incluyendo instalación de gabinetes, pisos y revestimientos.',
    url: '/es/cabinets',
    pubDate: new Date('2024-01-05'),
    category: 'Kitchen Remodeling'
  },
  {
    title: 'Instalación de Gabinetes Profesional',
    description: 'Instalación profesional de gabinetes para cocinas y baños. Diseño personalizado y calidad superior.',
    url: '/es/cabinets',
    pubDate: new Date('2024-01-01'),
    category: 'Cabinet Installation'
  }
];

export const GET: APIRoute = async () => {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RGB Corporation - Servicios de Pisos Jacksonville</title>
    <description>Servicios profesionales de instalación de pisos, gabinetes y renovaciones en Jacksonville, Florida</description>
    <link>${baseUrl}</link>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <generator>Astro</generator>
    <ttl>60</ttl>
    
    ${contentItems
      .map(
        (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${baseUrl}${item.url}</link>
      <guid>${baseUrl}${item.url}</guid>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
      <category>${item.category}</category>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}; 