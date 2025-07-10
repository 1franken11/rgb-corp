import type { Language } from '../i18n/utils';

interface SeoData {
  title: string;
  description: string;
  ogImage: string;
  keywords: string;
  canonicalUrl: string;
  schemaMarkup: object;
  localBusinessSchema?: object;
}

type RouteKey = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'flooring' | 'cabinets' | 'renovation';

const seoContent: Record<Language, Record<RouteKey, SeoData>> = {
  es: {
    home: {
      title: 'RGB Corporation - Instalación de Pisos y Revestimientos en Jacksonville, FL | Expertos en Vinilo, Porcelanato y Madera',
      description: 'Especialistas en instalación de pisos de vinilo, porcelanato, madera y laminados en Jacksonville, Florida. Servicios de renovación de pisos, instalación de gabinetes y remodelación de cocinas y baños. ¡Cotización gratuita!',
      keywords: 'instalación de pisos Jacksonville FL, pisos de vinilo Jacksonville, porcelanato Jacksonville, pisos de madera Florida, renovación de pisos Jacksonville, instalación de gabinetes Jacksonville, remodelación de cocinas Jacksonville, pisos laminados Florida, expertos en pisos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RGB Corporation",
        "description": "Especialistas en instalación de pisos y revestimientos en Jacksonville, Florida",
        "url": "https://rgb-corporation.com",
        "telephone": "+1-904-422-5380",
        "email": "rgbconstructioncorp@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.3322",
          "longitude": "-81.6557"
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "30.3322",
            "longitude": "-81.6557"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Pisos y Revestimientos",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalación de Pisos de Vinilo"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalación de Porcelanato"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalación de Pisos de Madera"
              }
            }
          ]
        }
      }
    },
    about: {
      title: 'Quiénes Somos - RGB Corporation | Expertos en Pisos y Revestimientos en Jacksonville, FL',
      description: 'Conoce a RGB Corporation, tu socio de confianza para instalación de pisos y revestimientos en Jacksonville, Florida. Más de 10 años de experiencia en renovación de pisos, instalación de gabinetes y remodelación de espacios.',
      keywords: 'RGB Corporation Jacksonville, expertos en pisos Florida, instalación de revestimientos Jacksonville, renovación de pisos Florida, empresa de pisos Jacksonville, especialistas en porcelanato Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/about',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RGB Corporation",
        "description": "Especialistas en instalación de pisos y revestimientos en Jacksonville, Florida",
        "url": "https://rgb-corporation.com",
        "foundingDate": "2014",
        "numberOfEmployees": "10-50"
      }
    },
    services: {
      title: 'Servicios de Pisos y Revestimientos | RGB Corporation Jacksonville, FL',
      description: 'Servicios completos de instalación de pisos: vinilo, porcelanato, madera, laminados. Instalación de gabinetes, renovación de cocinas y baños en Jacksonville, Florida. ¡Cotización gratuita!',
      keywords: 'servicios de pisos Jacksonville, instalación de vinilo Florida, porcelanato Jacksonville, pisos de madera Florida, laminados Jacksonville, gabinetes Jacksonville, renovación de cocinas Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/services',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Servicios de Pisos y Revestimientos",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Instalación de Pisos de Vinilo",
            "description": "Instalación profesional de pisos de vinilo en Jacksonville, Florida"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Instalación de Porcelanato",
            "description": "Instalación de porcelanato y cerámica en Jacksonville, Florida"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Instalación de Pisos de Madera",
            "description": "Instalación de pisos de madera dura y laminados en Jacksonville, Florida"
          }
        ]
      }
    },
    projects: {
      title: 'Proyectos de Pisos y Revestimientos | RGB Corporation Jacksonville, FL',
      description: 'Galería de proyectos realizados: instalación de pisos de vinilo, porcelanato, madera y laminados en Jacksonville, Florida. Renovaciones de cocinas, baños y espacios comerciales.',
      keywords: 'proyectos de pisos Jacksonville, trabajos de porcelanato Florida, instalaciones de vinilo Jacksonville, renovaciones de pisos Florida, galería de proyectos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/projects',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Proyectos Realizados",
        "description": "Galería de proyectos de instalación de pisos y revestimientos en Jacksonville, Florida"
      }
    },
    contact: {
      title: 'Contacto | RGB Corporation - Instalación de Pisos Jacksonville, FL',
      description: 'Contacta con RGB Corporation para cotización gratuita de instalación de pisos y revestimientos en Jacksonville, Florida. Teléfono: +1-904-422-5380. Servicios en toda el área de Jacksonville.',
      keywords: 'contacto RGB Corporation Jacksonville, cotización pisos Florida, teléfono instalación pisos Jacksonville, presupuesto revestimientos Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/contact',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto RGB Corporation",
        "description": "Contacta con expertos en instalación de pisos en Jacksonville, Florida"
      }
    },
    flooring: {
      title: 'Instalación de Pisos | Vinilo, Porcelanato, Madera | RGB Corporation Jacksonville, FL',
      description: 'Instalación profesional de pisos de vinilo, porcelanato, madera y laminados en Jacksonville, Florida. Servicios de renovación y reparación de pisos. ¡Cotización gratuita!',
      keywords: 'instalación de pisos Jacksonville FL, pisos de vinilo Florida, porcelanato Jacksonville, pisos de madera Florida, laminados Jacksonville, renovación de pisos Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/flooring',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instalación de Pisos",
        "description": "Instalación profesional de pisos de vinilo, porcelanato, madera y laminados en Jacksonville, Florida"
      }
    },
    cabinets: {
      title: 'Instalación de Gabinetes | Cocinas y Baños | RGB Corporation Jacksonville, FL',
      description: 'Instalación profesional de gabinetes para cocinas y baños en Jacksonville, Florida. Renovación de cocinas, diseño de espacios y instalación de islas de cocina.',
      keywords: 'instalación de gabinetes Jacksonville FL, gabinetes de cocina Florida, gabinetes de baño Jacksonville, renovación de cocinas Florida, islas de cocina Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/cabinets',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instalación de Gabinetes",
        "description": "Instalación profesional de gabinetes para cocinas y baños en Jacksonville, Florida"
      }
    },
    renovation: {
      title: 'Renovación de Pisos y Espacios | RGB Corporation Jacksonville, FL',
      description: 'Servicios completos de renovación de pisos y espacios en Jacksonville, Florida. Remodelación de cocinas, baños y áreas comerciales. Instalación de pisos, gabinetes y revestimientos.',
      keywords: 'renovación de pisos Jacksonville FL, remodelación de cocinas Florida, renovación de baños Jacksonville, remodelación de espacios Florida, renovación de pisos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/es/renovation',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Renovación de Pisos y Espacios",
        "description": "Servicios completos de renovación de pisos y espacios en Jacksonville, Florida"
      }
    }
  },
  en: {
    home: {
      title: 'RGB Corporation - Flooring Installation Jacksonville, FL | Vinyl, Porcelain & Hardwood Experts',
      description: 'Professional flooring installation specialists in Jacksonville, Florida. Vinyl, porcelain, hardwood, and laminate flooring. Cabinet installation, kitchen and bathroom remodeling. Free estimates!',
      keywords: 'flooring installation Jacksonville FL, vinyl flooring Jacksonville, porcelain tiles Florida, hardwood floors Jacksonville, laminate flooring Florida, cabinet installation Jacksonville, kitchen remodeling Florida, bathroom renovation Jacksonville, flooring contractors Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RGB Corporation",
        "description": "Professional flooring installation specialists in Jacksonville, Florida",
        "url": "https://rgb-corporation.com",
        "telephone": "+1-904-422-5380",
        "email": "rgbconstructioncorp@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.3322",
          "longitude": "-81.6557"
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "30.3322",
            "longitude": "-81.6557"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Flooring and Installation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vinyl Flooring Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Porcelain Tile Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hardwood Flooring Installation"
              }
            }
          ]
        }
      }
    },
    about: {
      title: 'About Us - RGB Corporation | Flooring Experts Jacksonville, FL',
      description: 'Meet RGB Corporation, your trusted partner for flooring installation and renovations in Jacksonville, Florida. Over 10 years of experience in flooring, cabinet installation, and space remodeling.',
      keywords: 'RGB Corporation Jacksonville, flooring experts Florida, cabinet installation Jacksonville, flooring contractors Florida, Jacksonville flooring company, porcelain tile experts Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/about',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RGB Corporation",
        "description": "Professional flooring installation specialists in Jacksonville, Florida",
        "url": "https://rgb-corporation.com",
        "foundingDate": "2014",
        "numberOfEmployees": "10-50"
      }
    },
    services: {
      title: 'Flooring & Installation Services | RGB Corporation Jacksonville, FL',
      description: 'Complete flooring installation services: vinyl, porcelain, hardwood, laminate. Cabinet installation, kitchen and bathroom remodeling in Jacksonville, Florida. Free estimates!',
      keywords: 'flooring services Jacksonville, vinyl installation Florida, porcelain tiles Jacksonville, hardwood floors Florida, laminate flooring Jacksonville, cabinet installation Florida, kitchen remodeling Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/services',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Flooring and Installation Services",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Vinyl Flooring Installation",
            "description": "Professional vinyl flooring installation in Jacksonville, Florida"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Porcelain Tile Installation",
            "description": "Porcelain and ceramic tile installation in Jacksonville, Florida"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Hardwood Flooring Installation",
            "description": "Hardwood and laminate flooring installation in Jacksonville, Florida"
          }
        ]
      }
    },
    projects: {
      title: 'Flooring Projects Gallery | RGB Corporation Jacksonville, FL',
      description: 'Gallery of completed projects: vinyl, porcelain, hardwood, and laminate flooring installation in Jacksonville, Florida. Kitchen, bathroom, and commercial space renovations.',
      keywords: 'flooring projects Jacksonville, porcelain work Florida, vinyl installations Jacksonville, flooring renovations Florida, project gallery Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/projects',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Completed Projects",
        "description": "Gallery of flooring installation and renovation projects in Jacksonville, Florida"
      }
    },
    contact: {
      title: 'Contact | RGB Corporation - Flooring Installation Jacksonville, FL',
      description: 'Contact RGB Corporation for free estimates on flooring installation and renovations in Jacksonville, Florida. Phone: +1-904-422-5380. Services throughout the Jacksonville area.',
      keywords: 'contact RGB Corporation Jacksonville, flooring estimates Florida, flooring installation phone Jacksonville, flooring quotes Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/contact',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact RGB Corporation",
        "description": "Contact flooring installation experts in Jacksonville, Florida"
      }
    },
    flooring: {
      title: 'Flooring Installation | Vinyl, Porcelain, Hardwood | RGB Corporation Jacksonville, FL',
      description: 'Professional installation of vinyl, porcelain, hardwood, and laminate flooring in Jacksonville, Florida. Flooring renovation and repair services. Free estimates!',
      keywords: 'flooring installation Jacksonville FL, vinyl flooring Florida, porcelain tiles Jacksonville, hardwood floors Florida, laminate flooring Jacksonville, flooring renovation Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/flooring',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Flooring Installation",
        "description": "Professional installation of vinyl, porcelain, hardwood, and laminate flooring in Jacksonville, Florida"
      }
    },
    cabinets: {
      title: 'Cabinet Installation | Kitchens & Bathrooms | RGB Corporation Jacksonville, FL',
      description: 'Professional cabinet installation for kitchens and bathrooms in Jacksonville, Florida. Kitchen renovation, space design, and kitchen island installation.',
      keywords: 'cabinet installation Jacksonville FL, kitchen cabinets Florida, bathroom cabinets Jacksonville, kitchen renovation Florida, kitchen islands Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/cabinets',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cabinet Installation",
        "description": "Professional cabinet installation for kitchens and bathrooms in Jacksonville, Florida"
      }
    },
    renovation: {
      title: 'Flooring & Space Renovation | RGB Corporation Jacksonville, FL',
      description: 'Complete flooring and space renovation services in Jacksonville, Florida. Kitchen, bathroom, and commercial space remodeling. Flooring, cabinet, and wall covering installation.',
      keywords: 'flooring renovation Jacksonville FL, kitchen remodeling Florida, bathroom renovation Jacksonville, space remodeling Florida, flooring renovation Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/en/renovation',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Flooring and Space Renovation",
        "description": "Complete flooring and space renovation services in Jacksonville, Florida"
      }
    }
  },
  pt: {
    home: {
      title: 'RGB Corporation - Instalação de Pisos Jacksonville, FL | Especialistas em Vinil, Porcelanato e Madeira',
      description: 'Especialistas profissionais em instalação de pisos em Jacksonville, Flórida. Pisos de vinil, porcelanato, madeira e laminados. Instalação de gabinetes, remodelação de cozinhas e banheiros. Orçamentos gratuitos!',
      keywords: 'instalação de pisos Jacksonville FL, pisos de vinil Jacksonville, porcelanato Florida, pisos de madeira Jacksonville, laminados Florida, instalação de gabinetes Jacksonville, remodelação de cozinhas Florida, renovação de banheiros Jacksonville, contratantes de pisos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RGB Corporation",
        "description": "Especialistas profissionais em instalação de pisos em Jacksonville, Flórida",
        "url": "https://rgb-corporation.com",
        "telephone": "+1-904-422-5380",
        "email": "rgbconstructioncorp@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jacksonville",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.3322",
          "longitude": "-81.6557"
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "30.3322",
            "longitude": "-81.6557"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços de Pisos e Instalação",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalação de Pisos de Vinil"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalação de Porcelanato"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Instalação de Pisos de Madeira"
              }
            }
          ]
        }
      }
    },
    about: {
      title: 'Quem Somos - RGB Corporation | Especialistas em Pisos Jacksonville, FL',
      description: 'Conheça a RGB Corporation, seu parceiro de confiança para instalação de pisos e renovações em Jacksonville, Flórida. Mais de 10 anos de experiência em pisos, instalação de gabinetes e remodelação de espaços.',
      keywords: 'RGB Corporation Jacksonville, especialistas em pisos Florida, instalação de gabinetes Jacksonville, contratantes de pisos Florida, empresa de pisos Jacksonville, especialistas em porcelanato Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/about',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RGB Corporation",
        "description": "Especialistas profissionais em instalação de pisos em Jacksonville, Flórida",
        "url": "https://rgb-corporation.com",
        "foundingDate": "2014",
        "numberOfEmployees": "10-50"
      }
    },
    services: {
      title: 'Serviços de Pisos e Instalação | RGB Corporation Jacksonville, FL',
      description: 'Serviços completos de instalação de pisos: vinil, porcelanato, madeira, laminados. Instalação de gabinetes, remodelação de cozinhas e banheiros em Jacksonville, Flórida. Orçamentos gratuitos!',
      keywords: 'serviços de pisos Jacksonville, instalação de vinil Florida, porcelanato Jacksonville, pisos de madeira Florida, laminados Jacksonville, instalação de gabinetes Florida, remodelação de cozinhas Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/services',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Serviços de Pisos e Instalação",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Instalação de Pisos de Vinil",
            "description": "Instalação profissional de pisos de vinil em Jacksonville, Flórida"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Instalação de Porcelanato",
            "description": "Instalação de porcelanato e cerâmica em Jacksonville, Flórida"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "Instalação de Pisos de Madeira",
            "description": "Instalação de pisos de madeira e laminados em Jacksonville, Flórida"
          }
        ]
      }
    },
    projects: {
      title: 'Galeria de Projetos de Pisos | RGB Corporation Jacksonville, FL',
      description: 'Galeria de projetos realizados: instalação de pisos de vinil, porcelanato, madeira e laminados em Jacksonville, Flórida. Renovações de cozinhas, banheiros e espaços comerciais.',
      keywords: 'projetos de pisos Jacksonville, trabalhos de porcelanato Florida, instalações de vinil Jacksonville, renovações de pisos Florida, galeria de projetos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/projects',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Projetos Realizados",
        "description": "Galeria de projetos de instalação de pisos e renovações em Jacksonville, Flórida"
      }
    },
    contact: {
      title: 'Contato | RGB Corporation - Instalação de Pisos Jacksonville, FL',
      description: 'Entre em contato com a RGB Corporation para orçamentos gratuitos de instalação de pisos e renovações em Jacksonville, Flórida. Telefone: +1-904-422-5380. Serviços em toda a área de Jacksonville.',
      keywords: 'contato RGB Corporation Jacksonville, orçamentos de pisos Florida, telefone instalação pisos Jacksonville, orçamentos de revestimentos Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/contact',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contato RGB Corporation",
        "description": "Entre em contato com especialistas em instalação de pisos em Jacksonville, Flórida"
      }
    },
    flooring: {
      title: 'Instalação de Pisos | Vinil, Porcelanato, Madeira | RGB Corporation Jacksonville, FL',
      description: 'Instalação profissional de pisos de vinil, porcelanato, madeira e laminados em Jacksonville, Flórida. Serviços de renovação e reparo de pisos. Orçamentos gratuitos!',
      keywords: 'instalação de pisos Jacksonville FL, pisos de vinil Florida, porcelanato Jacksonville, pisos de madeira Florida, laminados Jacksonville, renovação de pisos Florida',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/flooring',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instalação de Pisos",
        "description": "Instalação profissional de pisos de vinil, porcelanato, madeira e laminados em Jacksonville, Flórida"
      }
    },
    cabinets: {
      title: 'Instalação de Gabinetes | Cozinhas e Banheiros | RGB Corporation Jacksonville, FL',
      description: 'Instalação profissional de gabinetes para cozinhas e banheiros em Jacksonville, Flórida. Renovação de cozinhas, design de espaços e instalação de ilhas de cozinha.',
      keywords: 'instalação de gabinetes Jacksonville FL, gabinetes de cozinha Florida, gabinetes de banheiro Jacksonville, renovação de cozinhas Florida, ilhas de cozinha Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/cabinets',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Instalação de Gabinetes",
        "description": "Instalação profissional de gabinetes para cozinhas e banheiros em Jacksonville, Flórida"
      }
    },
    renovation: {
      title: 'Renovação de Pisos e Espaços | RGB Corporation Jacksonville, FL',
      description: 'Serviços completos de renovação de pisos e espaços em Jacksonville, Flórida. Remodelação de cozinhas, banheiros e áreas comerciais. Instalação de pisos, gabinetes e revestimentos.',
      keywords: 'renovação de pisos Jacksonville FL, remodelação de cozinhas Florida, renovação de banheiros Jacksonville, remodelação de espaços Florida, renovação de pisos Jacksonville',
      ogImage: 'https://res.cloudinary.com/drwacbtjf/image/upload/v1742920360/firstsection4_eb9qfy.jpg',
      canonicalUrl: 'https://rgb-corporation.com/pt/renovation',
      schemaMarkup: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Renovação de Pisos e Espaços",
        "description": "Serviços completos de renovação de pisos e espaços em Jacksonville, Flórida"
      }
    }
  }
};

export function getSeoData(lang: Language, pathname: string): SeoData {
  const route = getRouteKeyFromPath(pathname);
  const baseUrl = 'https://rgb-corporation.com';
  const seoData = seoContent[lang][route];
  
  return {
    ...seoData,
    canonicalUrl: `${baseUrl}${pathname}`
  };
}

function getRouteKeyFromPath(pathname: string): RouteKey {
  if (pathname.includes('/about')) return 'about';
  if (pathname.includes('/services')) return 'services';
  if (pathname.includes('/projects')) return 'projects';
  if (pathname.includes('/contact')) return 'contact';
  if (pathname.includes('/flooring')) return 'flooring';
  if (pathname.includes('/cabinets')) return 'cabinets';
  if (pathname.includes('/renovation')) return 'renovation';
  return 'home';
}

// FAQ Schema markup para mejorar SEO
export function getFAQSchema(lang: Language) {
  const faqs = {
    es: [
      {
        question: "¿Qué tipos de pisos instalan en Jacksonville, FL?",
        answer: "Instalamos pisos de vinilo, porcelanato, madera dura, laminados y cerámica en Jacksonville y áreas cercanas. Ofrecemos instalación profesional con garantía."
      },
      {
        question: "¿Cuánto cuesta instalar pisos en Jacksonville?",
        answer: "Los precios varían según el tipo de piso y el área. Ofrecemos cotizaciones gratuitas. Contacta al +1-904-422-5380 para una estimación personalizada."
      },
      {
        question: "¿Trabajan en toda el área de Jacksonville?",
        answer: "Sí, servimos Jacksonville y áreas cercanas como Jacksonville Beach, Atlantic Beach, Orange Park y Fleming Island. Radio de servicio de 50km."
      },
      {
        question: "¿Cuánto tiempo toma la instalación de pisos?",
        answer: "Depende del tipo de piso y área. Pisos de vinilo: 1-2 días. Porcelanato: 2-3 días. Madera: 3-5 días. Proyectos completos: 1-2 semanas."
      },
      {
        question: "¿Ofrecen garantía en la instalación?",
        answer: "Sí, ofrecemos garantía en todos nuestros trabajos. Garantía de 1 año en instalación y hasta 25 años en materiales según el fabricante."
      }
    ],
    en: [
      {
        question: "What types of flooring do you install in Jacksonville, FL?",
        answer: "We install vinyl, porcelain, hardwood, laminate, and ceramic flooring in Jacksonville and surrounding areas. Professional installation with warranty included."
      },
      {
        question: "How much does flooring installation cost in Jacksonville?",
        answer: "Prices vary by flooring type and area. We offer free estimates. Contact +1-904-422-5380 for a personalized quote."
      },
      {
        question: "Do you work throughout the Jacksonville area?",
        answer: "Yes, we serve Jacksonville and nearby areas like Jacksonville Beach, Atlantic Beach, Orange Park, and Fleming Island. 50km service radius."
      },
      {
        question: "How long does flooring installation take?",
        answer: "Depends on flooring type and area. Vinyl: 1-2 days. Porcelain: 2-3 days. Hardwood: 3-5 days. Complete projects: 1-2 weeks."
      },
      {
        question: "Do you offer installation warranty?",
        answer: "Yes, we offer warranty on all our work. 1-year installation warranty and up to 25 years on materials depending on manufacturer."
      }
    ],
    pt: [
      {
        question: "Que tipos de pisos vocês instalam em Jacksonville, FL?",
        answer: "Instalamos pisos de vinil, porcelanato, madeira dura, laminados e cerâmica em Jacksonville e áreas próximas. Instalação profissional com garantia."
      },
      {
        question: "Quanto custa instalar pisos em Jacksonville?",
        answer: "Os preços variam conforme o tipo de piso e área. Oferecemos orçamentos gratuitos. Contate +1-904-422-5380 para uma estimativa personalizada."
      },
      {
        question: "Vocês trabalham em toda a área de Jacksonville?",
        answer: "Sim, atendemos Jacksonville e áreas próximas como Jacksonville Beach, Atlantic Beach, Orange Park e Fleming Island. Raio de serviço de 50km."
      },
      {
        question: "Quanto tempo leva a instalação de pisos?",
        answer: "Depende do tipo de piso e área. Vinil: 1-2 dias. Porcelanato: 2-3 dias. Madeira: 3-5 dias. Projetos completos: 1-2 semanas."
      },
      {
        question: "Vocês oferecem garantia na instalação?",
        answer: "Sim, oferecemos garantia em todos os nossos trabalhos. Garantia de 1 ano na instalação e até 25 anos nos materiais conforme o fabricante."
      }
    ]
  };

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs[lang].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}