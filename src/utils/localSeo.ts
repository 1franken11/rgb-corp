import type { Language } from '../i18n/utils';

// Keywords específicas para Jacksonville, FL
export const localKeywords = {
  es: {
    primary: [
      'instalación de pisos Jacksonville FL',
      'pisos de vinilo Jacksonville',
      'porcelanato Jacksonville Florida',
      'pisos de madera Jacksonville',
      'renovación de pisos Jacksonville FL',
      'instalación de gabinetes Jacksonville',
      'remodelación de cocinas Jacksonville Florida',
      'expertos en pisos Jacksonville',
      'contratistas de pisos Jacksonville FL',
      'servicios de pisos Jacksonville'
    ],
    secondary: [
      'Jacksonville flooring installation',
      'Jacksonville vinyl flooring',
      'Jacksonville hardwood floors',
      'Jacksonville laminate flooring',
      'Jacksonville cabinet installation',
      'Jacksonville kitchen remodeling',
      'Jacksonville bathroom renovation',
      'Jacksonville flooring contractors',
      'Jacksonville tile installation',
      'Jacksonville flooring services'
    ]
  },
  en: {
    primary: [
      'flooring installation Jacksonville FL',
      'vinyl flooring Jacksonville',
      'porcelain tiles Jacksonville Florida',
      'hardwood floors Jacksonville',
      'flooring renovation Jacksonville FL',
      'cabinet installation Jacksonville',
      'kitchen remodeling Jacksonville Florida',
      'flooring experts Jacksonville',
      'flooring contractors Jacksonville FL',
      'flooring services Jacksonville'
    ],
    secondary: [
      'Jacksonville flooring installation',
      'Jacksonville vinyl flooring',
      'Jacksonville hardwood floors',
      'Jacksonville laminate flooring',
      'Jacksonville cabinet installation',
      'Jacksonville kitchen remodeling',
      'Jacksonville bathroom renovation',
      'Jacksonville flooring contractors',
      'Jacksonville tile installation',
      'Jacksonville flooring services'
    ]
  },
  pt: {
    primary: [
      'instalação de pisos Jacksonville FL',
      'pisos de vinil Jacksonville',
      'porcelanato Jacksonville Florida',
      'pisos de madeira Jacksonville',
      'renovação de pisos Jacksonville FL',
      'instalação de gabinetes Jacksonville',
      'remodelação de cozinhas Jacksonville Florida',
      'especialistas em pisos Jacksonville',
      'contratantes de pisos Jacksonville FL',
      'serviços de pisos Jacksonville'
    ],
    secondary: [
      'Jacksonville flooring installation',
      'Jacksonville vinyl flooring',
      'Jacksonville hardwood floors',
      'Jacksonville laminate flooring',
      'Jacksonville cabinet installation',
      'Jacksonville kitchen remodeling',
      'Jacksonville bathroom renovation',
      'Jacksonville flooring contractors',
      'Jacksonville tile installation',
      'Jacksonville flooring services'
    ]
  }
};

// Información de contacto local
export const localBusinessInfo = {
  name: 'RGB Corporation',
  phone: '+1-904-422-5380',
  email: 'rgbconstructioncorp@gmail.com',
  address: {
    locality: 'Jacksonville',
    region: 'FL',
    country: 'US',
    postalCode: '32202'
  },
  coordinates: {
    latitude: 30.3322,
    longitude: -81.6557
  },
  serviceArea: {
    radius: 50000, // 50km radius
    cities: [
      'Jacksonville',
      'Jacksonville Beach',
      'Atlantic Beach',
      'Neptune Beach',
      'Ponte Vedra Beach',
      'Orange Park',
      'Fleming Island',
      'Green Cove Springs',
      'St. Augustine',
      'Fernandina Beach'
    ]
  },
  hours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
  services: [
    'Vinyl Flooring Installation',
    'Porcelain Tile Installation',
    'Hardwood Flooring Installation',
    'Laminate Flooring Installation',
    'Cabinet Installation',
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Flooring Repair',
    'Flooring Maintenance'
  ]
};

// Schema markup para negocio local
export function getLocalBusinessSchema(lang: Language) {
  const descriptions = {
    es: 'Especialistas en instalación de pisos y revestimientos en Jacksonville, Florida',
    en: 'Professional flooring installation specialists in Jacksonville, Florida',
    pt: 'Especialistas profissionais em instalação de pisos em Jacksonville, Flórida'
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": localBusinessInfo.name,
    "description": descriptions[lang],
    "url": "https://rgb-corporation.com",
    "telephone": localBusinessInfo.phone,
    "email": localBusinessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": localBusinessInfo.address.locality,
      "addressRegion": localBusinessInfo.address.region,
      "addressCountry": localBusinessInfo.address.country,
      "postalCode": localBusinessInfo.address.postalCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": localBusinessInfo.coordinates.latitude,
      "longitude": localBusinessInfo.coordinates.longitude
    },
    "openingHours": localBusinessInfo.hours,
    "priceRange": localBusinessInfo.priceRange,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": localBusinessInfo.coordinates.latitude,
        "longitude": localBusinessInfo.coordinates.longitude
      },
      "geoRadius": localBusinessInfo.serviceArea.radius
    },
    "areaServed": localBusinessInfo.serviceArea.cities.map(city => ({
      "@type": "City",
      "name": city,
      "addressRegion": "FL",
      "addressCountry": "US"
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flooring and Installation Services",
      "itemListElement": localBusinessInfo.services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61562097362152",
      "https://www.instagram.com/rgb_corp/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Rodriguez"
        },
        "reviewBody": "Excelente trabajo en la instalación de pisos de vinilo. Muy profesionales y puntuales.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewBody": "Great service installing hardwood floors. Highly recommend RGB Corporation.",
        "datePublished": "2024-11-10"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Carlos Silva"
        },
        "reviewBody": "Serviço excepcional na instalação de porcelanato. Equipe muito profissional.",
        "datePublished": "2024-11-05"
      }
    ]
  };
}

// Generar keywords optimizadas para SEO local
export function generateLocalKeywords(lang: Language, service?: string): string {
  const keywords = localKeywords[lang];
  const baseKeywords = [...keywords.primary, ...keywords.secondary];
  
  if (service) {
    const serviceKeywords = baseKeywords.filter(keyword => 
      keyword.toLowerCase().includes(service.toLowerCase())
    );
    return serviceKeywords.join(', ');
  }
  
  return baseKeywords.join(', ');
} 