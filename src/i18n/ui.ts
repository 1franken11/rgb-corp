import type { Language } from './types';
import { getLanguageFromURL } from './utils';

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
} as const;

export const defaultLang = 'en';

export function getLangFromUrl(url: URL) {
  return getLanguageFromURL(url) || defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

const translations = {
  en: {
    // Menu
    'Menu.home': 'Home',
    'Menu.instagram': 'Instagram',
    'Menu.QuienesSomos': 'About Us',
    'Menu.floors': 'Explore Our Floor Types',
    'Menu.improveSpace': 'We Improve Your Space',
    'Menu.Reviews': 'Reviews',
    'Menu.contact': 'Contact',
    'Menu.corp': 'CONSTRUCTION CORPORATION',

    // Common
    'Common.readMore': 'Read More',
    'Common.learnMore': 'Learn More',
    'Common.contactUs': 'Contact Us',
    'Common.viewMore': 'View More',
    'Common.ourServices': 'Our Services',
    'Common.ourProjects': 'Our Projects',
    'Common.testimonials': 'Testimonials',

    // Home Page
    'Home.title': 'RGB Corporation - Flooring Installation in Jacksonville',
    'Home.description': 'Professional flooring installation services in Jacksonville, Florida. Specialists in laminate, vinyl, and wood flooring installation.',
    'Home.welcome': 'Welcome to RGB Corporation',
    'Home.expertise': 'Experts in High-Quality Flooring',

    // About Page
    'About.title': 'About Us - RGB Corporation',
    'About.description': 'Learn about our experience and commitment to quality in flooring installation services.',
    'About.ourStory': 'Our Story',
    'About.mission': 'Our Mission',
    'About.vision': 'Our Vision',
    'About.values': 'Our Values',

    // Services Page
    'Services.title': 'Our Services - RGB Corporation',
    'Services.description': 'Discover our comprehensive range of flooring installation services.',
    'Services.laminate': 'Laminate Flooring',
    'Services.vinyl': 'Vinyl Flooring',
    'Services.wood': 'Wood Flooring',
    'Services.carpet': 'Carpet Installation',
    'Services.tile': 'Tile Installation',

    // Projects Page
    'Projects.title': 'Our Projects - RGB Corporation',
    'Projects.description': 'Explore our portfolio of successful flooring installations.',
    'Projects.residential': 'Residential Projects',
    'Projects.commercial': 'Commercial Projects',
    'Projects.viewGallery': 'View Gallery',

    // Contact Page
    'Contact.title': 'Contact Us - RGB Corporation',
    'Contact.description': 'Get in touch with our team for your flooring needs.',
    'Contact.name': 'Name',
    'Contact.email': 'Email',
    'Contact.phone': 'Phone',
    'Contact.message': 'Message',
    'Contact.send': 'Send Message',
    'Contact.address': 'Address',
    'Contact.hours': 'Business Hours',

    // Footer
    'Footer.rights': 'All rights reserved',
    'Footer.privacy': 'Privacy Policy',
    'Footer.terms': 'Terms of Service',
    'Footer.social': 'Follow Us',
  },
  es: {
    // Menu
    'Menu.home': 'Inicio',
    'Menu.instagram': 'Instagram',
    'Menu.QuienesSomos': 'Quienes Somos',
    'Menu.floors': 'Explora nuestros tipo de pisos',
    'Menu.improveSpace': 'Proyectos',
    'Menu.Reviews': 'Reseña',
    'Menu.contact': 'Contacto',
    'Menu.corp': 'CORPORACIÓN DE CONSTRUCCIÓN',

    // Common
    'Common.readMore': 'Leer Más',
    'Common.learnMore': 'Saber Más',
    'Common.contactUs': 'Contáctanos',
    'Common.viewMore': 'Ver Más',
    'Common.ourServices': 'Nuestros Servicios',
    'Common.ourProjects': 'Nuestros Proyectos',
    'Common.testimonials': 'Testimonios',

    // Home Page
    'Home.title': 'RGB Corporation - Instalación de Pisos en Jacksonville',
    'Home.description': 'Servicios profesionales de instalación de pisos en Jacksonville, Florida. Especialistas en instalación de pisos laminados, vinílicos y de madera.',
    'Home.welcome': 'Bienvenido a RGB Corporation',
    'Home.expertise': 'Expertos en Pisos de Alta Calidad',

    // About Page
    'About.title': 'Quienes Somos - RGB Corporation',
    'About.description': 'Conozca nuestra experiencia y compromiso con la calidad en servicios de instalación de pisos.',
    'About.ourStory': 'Nuestra Historia',
    'About.mission': 'Nuestra Misión',
    'About.vision': 'Nuestra Visión',
    'About.values': 'Nuestros Valores',

    // Services Page
    'Services.title': 'Nuestros Servicios - RGB Corporation',
    'Services.description': 'Descubra nuestra amplia gama de servicios de instalación de pisos.',
    'Services.laminate': 'Pisos Laminados',
    'Services.vinyl': 'Pisos Vinílicos',
    'Services.wood': 'Pisos de Madera',
    'Services.carpet': 'Instalación de Alfombras',
    'Services.tile': 'Instalación de Azulejos',

    // Projects Page
    'Projects.title': 'Nuestros Proyectos - RGB Corporation',
    'Projects.description': 'Explore nuestro portafolio de instalaciones exitosas de pisos.',
    'Projects.residential': 'Proyectos Residenciales',
    'Projects.commercial': 'Proyectos Comerciales',
    'Projects.viewGallery': 'Ver Galería',

    // Contact Page
    'Contact.title': 'Contáctenos - RGB Corporation',
    'Contact.description': 'Póngase en contacto con nuestro equipo para sus necesidades de pisos.',
    'Contact.name': 'Nombre',
    'Contact.email': 'Correo Electrónico',
    'Contact.phone': 'Teléfono',
    'Contact.message': 'Mensaje',
    'Contact.send': 'Enviar Mensaje',
    'Contact.address': 'Dirección',
    'Contact.hours': 'Horario de Atención',

    // Footer
    'Footer.rights': 'Todos los derechos reservados',
    'Footer.privacy': 'Política de Privacidad',
    'Footer.terms': 'Términos de Servicio',
    'Footer.social': 'Síguenos',
  },
  pt: {
    // Menu
    'Menu.home': 'Início',
    'Menu.instagram': 'Instagram',
    'Menu.QuienesSomos': 'Quem Somos',
    'Menu.floors': 'Explore nossos tipos de pisos',
    'Menu.improveSpace': 'Melhoramos seu espaço',
    'Menu.Reviews': 'comentários',
    'Menu.contact': 'Contato',
    'Menu.corp': 'CORPORAÇÃO DE CONSTRUÇÃO',

    // Common
    'Common.readMore': 'Leia Mais',
    'Common.learnMore': 'Saiba Mais',
    'Common.contactUs': 'Entre em Contato',
    'Common.viewMore': 'Ver Mais',
    'Common.ourServices': 'Nossos Serviços',
    'Common.ourProjects': 'Nossos Projetos',
    'Common.testimonials': 'Depoimentos',

    // Home Page
    'Home.title': 'RGB Corporation - Instalação de Pisos em Jacksonville',
    'Home.description': 'Serviços profissionais de instalação de pisos em Jacksonville, Flórida. Especialistas em instalação de pisos laminados, vinílicos e de madeira.',
    'Home.welcome': 'Bem-vindo à RGB Corporation',
    'Home.expertise': 'Especialistas em Pisos de Alta Qualidade',

    // About Page
    'About.title': 'Quem Somos - RGB Corporation',
    'About.description': 'Conheça nossa experiência e compromisso com a qualidade em serviços de instalação de pisos.',
    'About.ourStory': 'Nossa História',
    'About.mission': 'Nossa Missão',
    'About.vision': 'Nossa Visão',
    'About.values': 'Nossos Valores',

    // Services Page
    'Services.title': 'Nossos Serviços - RGB Corporation',
    'Services.description': 'Descubra nossa ampla gama de serviços de instalação de pisos.',
    'Services.laminate': 'Pisos Laminados',
    'Services.vinyl': 'Pisos Vinílicos',
    'Services.wood': 'Pisos de Madeira',
    'Services.carpet': 'Instalação de Carpetes',
    'Services.tile': 'Instalação de Azulejos',

    // Projects Page
    'Projects.title': 'Nossos Projetos - RGB Corporation',
    'Projects.description': 'Explore nosso portfólio de instalações bem-sucedidas de pisos.',
    'Projects.residential': 'Projetos Residenciais',
    'Projects.commercial': 'Projetos Comerciais',
    'Projects.viewGallery': 'Ver Galeria',

    // Contact Page
    'Contact.title': 'Entre em Contato - RGB Corporation',
    'Contact.description': 'Entre em contato com nossa equipe para suas necessidades de pisos.',
    'Contact.name': 'Nome',
    'Contact.email': 'E-mail',
    'Contact.phone': 'Telefone',
    'Contact.message': 'Mensagem',
    'Contact.send': 'Enviar Mensagem',
    'Contact.address': 'Endereço',
    'Contact.hours': 'Horário de Funcionamento',

    // Footer
    'Footer.rights': 'Todos os direitos reservados',
    'Footer.privacy': 'Política de Privacidade',
    'Footer.terms': 'Termos de Serviço',
    'Footer.social': 'Siga-nos',
  },
};

export function getLanguageFromURL(url: URL): Language | undefined {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return undefined;
}

export function getLanguageFromPathname(pathname: string): Language | undefined {
  const [, lang] = pathname.split('/');
  if (lang in languages) return lang as Language;
  return undefined;
}

export function getLanguageFromLocale(locale: string): Language | undefined {
  const lang = locale.split('-')[0];
  if (lang in languages) return lang as Language;
  return undefined;
}

export function getLanguageFromNavigator(): Language | undefined {
  if (typeof navigator === 'undefined') return undefined;
  return getLanguageFromLocale(navigator.language);
}

export function getLanguageFromCookie(): Language | undefined {
  if (typeof document === 'undefined') return undefined;
  const cookie = document.cookie.split(';').find(c => c.trim().startsWith('lang='));
  if (!cookie) return undefined;
  const lang = cookie.split('=')[1];
  if (lang in languages) return lang as Language;
  return undefined;
}

export function setLanguageCookie(lang: Language): void {
  if (typeof document === 'undefined') return;
  document.cookie = `lang=${lang};path=/;max-age=31536000`;
}

export function getLanguage(): Language {
  return getLanguageFromCookie() || getLanguageFromNavigator() || defaultLang;
} 