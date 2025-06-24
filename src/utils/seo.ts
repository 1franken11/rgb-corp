import type { Language } from '../i18n/utils';

interface SeoData {
  title: string;
  description: string;
  ogImage: string;
}

type RouteKey = 'home' | 'projects' | 'contact';

const seoContent: Record<Language, Record<RouteKey, SeoData>> = {
  es: {
    home: {
      title: 'RGB Corporation - Instalaciones de pisos y revestimientos en Jacksonville, FL',
      description: 'Especialistas en reformas, pisos vinílicos, porcelanatos y más.',
      ogImage: '/images/og-home-es.jpg',
    },
    projects: {
      title: 'Proyectos Realizados | RGB Corporation',
      description: 'Mirá nuestros trabajos con vinílicos, porcelanatos, madera y más.',
      ogImage: '/images/og-projects-es.jpg',
    },
    contact: {
      title: 'Contactanos | RGB Corporation',
      description: 'Hablemos sobre tu próximo proyecto o reforma.',
      ogImage: '/images/og-contact-es.jpg',
    },
  },
  en: {
    home: {
      title: 'RGB Corporation - Flooring and wall covering installation in Jacksonville, FL',
      description: 'Experts in reforms, vinyl flooring, porcelain tiles and more.',
      ogImage: '/images/og-home-en.jpg',
    },
    projects: {
      title: 'Our Projects | RGB Corporation',
      description: 'Check out our work with vinyl, wood, and ceramic.',
      ogImage: '/images/og-projects-en.jpg',
    },
    contact: {
      title: 'Contact Us | RGB Corporation',
      description: 'Let’s talk about your next project or renovation.',
      ogImage: '/images/og-contact-en.jpg',
    },
  },
  pt: {
    home: {
      title: 'RGB Corporation - Instalação de pisos e revestimentos de parede em Jacksonville, FL',
      description: 'Especialistas em reformas, pisos vinílicos, porcelanatos e mais.',
      ogImage: '/images/og-home-pt.jpg',
    },
    projects: {
      title: 'Projetos Realizados | RGB Corporation',
      description: 'Veja nossos trabalhos com vinílicos, madeira e cerâmica.',
      ogImage: '/images/og-projects-pt.jpg',
    },
    contact: {
      title: 'Contate-nos | RGB Corporation',
      description: 'Vamos conversar sobre sua próxima reforma ou projeto.',
      ogImage: '/images/og-contact-pt.jpg',
    },
  },
};

export function getSeoData(lang: Language, pathname: string): SeoData {
  const route = getRouteKeyFromPath(pathname);
  return seoContent[lang][route];
}

function getRouteKeyFromPath(pathname: string): RouteKey {
  if (pathname.includes('/projects')) return 'projects';
  if (pathname.includes('/contact')) return 'contact';
  return 'home';
}
