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

// Local SEO utilities for RGB Corporation

export interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string;
  priceRange: string;
  serviceArea: {
    geoMidpoint: {
      latitude: string;
      longitude: string;
    };
    geoRadius: string;
  };
  services: string[];
  areasServed: string[];
  sameAs: string[];
}

export const localBusinessData: LocalBusinessData = {
  name: "RGB Corporation",
  description: "Professional flooring installation specialists in Jacksonville, Florida. Expert vinyl, porcelain, hardwood, and laminate flooring installation. Cabinet installation and kitchen remodeling services.",
  url: "https://rgb-corporation.com",
  telephone: "+1-904-422-5380",
  email: "rgbconstructioncorp@gmail.com",
  address: {
    streetAddress: "Jacksonville, FL",
    addressLocality: "Jacksonville",
    addressRegion: "FL",
    postalCode: "32201",
    addressCountry: "US"
  },
  geo: {
    latitude: "30.3322",
    longitude: "-81.6557"
  },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
  serviceArea: {
    geoMidpoint: {
      latitude: "30.3322",
      longitude: "-81.6557"
    },
    geoRadius: "50000"
  },
  services: [
    "Vinyl Flooring Installation",
    "Porcelain Tile Installation", 
    "Hardwood Flooring Installation",
    "Laminate Flooring Installation",
    "Cabinet Installation",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Floor Repair",
    "Floor Refinishing"
  ],
  areasServed: [
    "Jacksonville, FL",
    "Jacksonville Beach, FL",
    "Atlantic Beach, FL",
    "Neptune Beach, FL",
    "Ponte Vedra Beach, FL",
    "Orange Park, FL",
    "Fleming Island, FL",
    "Green Cove Springs, FL",
    "St. Augustine, FL",
    "Fernandina Beach, FL"
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61562097362152",
    "https://www.instagram.com/rgb_corp/"
  ]
};

// Generate LocalBusiness schema
export function generateLocalBusinessSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": localBusinessData.name,
    "description": localBusinessData.description,
    "url": localBusinessData.url,
    "telephone": localBusinessData.telephone,
    "email": localBusinessData.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": localBusinessData.address.streetAddress,
      "addressLocality": localBusinessData.address.addressLocality,
      "addressRegion": localBusinessData.address.addressRegion,
      "postalCode": localBusinessData.address.postalCode,
      "addressCountry": localBusinessData.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": localBusinessData.geo.latitude,
      "longitude": localBusinessData.geo.longitude
    },
    "openingHours": localBusinessData.openingHours,
    "priceRange": localBusinessData.priceRange,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": localBusinessData.serviceArea.geoMidpoint.latitude,
        "longitude": localBusinessData.serviceArea.geoMidpoint.longitude
      },
      "geoRadius": localBusinessData.serviceArea.geoRadius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flooring and Remodeling Services",
      "itemListElement": localBusinessData.services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    },
    "areaServed": localBusinessData.areasServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "sameAs": localBusinessData.sameAs
  };
}

// Generate Service schema for specific services
export function generateServiceSchema(serviceName: string, description: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": localBusinessData.name,
      "url": localBusinessData.url
    },
    "areaServed": localBusinessData.areasServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": "Flooring Installation"
  };
}

// Generate FAQ schema for common questions
export function generateFAQSchema(lang: string = 'es'): object {
  const faqs = {
    es: [
      {
        question: "¿Qué tipos de pisos instalan?",
        answer: "Instalamos pisos de vinilo, porcelanato, madera dura, laminados y más. Ofrecemos una amplia variedad de opciones para satisfacer sus necesidades y presupuesto."
      },
      {
        question: "¿En qué áreas de Jacksonville prestan servicios?",
        answer: "Servimos a toda el área de Jacksonville, incluyendo Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, Fleming Island y comunidades cercanas."
      },
      {
        question: "¿Ofrecen cotizaciones gratuitas?",
        answer: "Sí, ofrecemos cotizaciones gratuitas y sin compromiso. Contáctenos para programar una visita a su hogar o negocio."
      },
      {
        question: "¿Cuánto tiempo toma la instalación de pisos?",
        answer: "El tiempo de instalación varía según el tipo de piso y el tamaño del área. Una instalación típica puede tomar de 1 a 3 días."
      },
      {
        question: "¿Trabajan con seguros?",
        answer: "Sí, trabajamos con la mayoría de las compañías de seguros para proyectos de renovación y reparación."
      }
    ],
    en: [
      {
        question: "What types of flooring do you install?",
        answer: "We install vinyl, porcelain, hardwood, laminate flooring and more. We offer a wide variety of options to meet your needs and budget."
      },
      {
        question: "What areas of Jacksonville do you serve?",
        answer: "We serve all of Jacksonville area, including Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, Fleming Island and nearby communities."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes, we offer free, no-obligation estimates. Contact us to schedule a visit to your home or business."
      },
      {
        question: "How long does flooring installation take?",
        answer: "Installation time varies depending on the type of flooring and the size of the area. A typical installation can take 1 to 3 days."
      },
      {
        question: "Do you work with insurance?",
        answer: "Yes, we work with most insurance companies for renovation and repair projects."
      }
    ],
    pt: [
      {
        question: "Que tipos de pisos vocês instalam?",
        answer: "Instalamos pisos de vinil, porcelanato, madeira maciça, laminados e mais. Oferecemos uma ampla variedade de opções para atender suas necessidades e orçamento."
      },
      {
        question: "Em quais áreas de Jacksonville vocês atendem?",
        answer: "Atendemos toda a área de Jacksonville, incluindo Jacksonville Beach, Atlantic Beach, Ponte Vedra Beach, Orange Park, Fleming Island e comunidades próximas."
      },
      {
        question: "Vocês oferecem orçamentos gratuitos?",
        answer: "Sim, oferecemos orçamentos gratuitos e sem compromisso. Entre em contato conosco para agendar uma visita à sua casa ou empresa."
      },
      {
        question: "Quanto tempo leva a instalação de pisos?",
        answer: "O tempo de instalação varia dependendo do tipo de piso e do tamanho da área. Uma instalação típica pode levar de 1 a 3 dias."
      },
      {
        question: "Vocês trabalham com seguros?",
        answer: "Sim, trabalhamos com a maioria das seguradoras para projetos de renovação e reparo."
      }
    ]
  };

  const currentFaqs = faqs[lang as keyof typeof faqs] || faqs.es;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate Review schema
export function generateReviewSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": localBusinessData.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
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
        "reviewBody": "Excelente trabajo en la instalación de nuestros pisos de vinilo. Profesionales, puntuales y muy limpios."
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
        "reviewBody": "Great service installing our hardwood floors. Very professional and the quality is outstanding."
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