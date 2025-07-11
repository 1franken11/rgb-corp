import type { Language } from './types';

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
    return (translations as any)[lang]?.[key] || (translations as any)[defaultLang]?.[key] || key;
  };
}

const translations = {
  en: {
    // Menu
    'Menu.home': 'Home',
    'Menu.instagram': 'Instagram',
    'Menu.QuienesSomos': 'About Us',
    'Menu.floors': 'Explore our flooring types',
    'Menu.improveSpace': 'Projects',
    'Menu.Reviews': 'Reviews',
    'Menu.contact': 'Contact',
    'Menu.corp': 'CONSTRUCTION CORPORATION',

    // ProjectSection
    'ProjectSection.title': 'Our Projects',
    'Button.Download': 'Download image',
    'Button.Close': 'Close',

    // FlooringSections
    'FlooringSections.title': 'Our Flooring Types',
    'FlooringSections.options.Vinyl': 'Vinyl',
    'FlooringSections.options.Laminate': 'Laminate',
    'FlooringSections.options.Tile': 'Tile',
    'FlooringSections.options.Wood': 'Wood',
    'FlooringSections.button.Close': 'Close',
    'FlooringSections.descriptions.Laminate': [
      {
        title: 'Durability',
        description: 'Laminate floors are known for their exceptional durability and wear resistance.'
      },
      {
        title: 'Easy Maintenance',
        description: 'They require minimal maintenance and are easy to clean.'
      },
      {
        title: 'Style Variety',
        description: 'Available in a wide range of colors and textures that mimic natural wood.'
      }
    ],
    'FlooringSections.descriptions.Vinyl': [
      {
        title: 'Water Resistant',
        description: 'Perfect for wet areas like bathrooms and kitchens.'
      },
      {
        title: 'Comfort',
        description: 'Provides a soft and comfortable surface to walk on.'
      },
      {
        title: 'Versatility',
        description: 'Suitable for any space in your home.'
      }
    ],
    'FlooringSections.descriptions.Tile': [
      {
        title: 'Durability',
        description: 'Extremely resistant and long-lasting.'
      },
      {
        title: 'Water Resistant',
        description: 'Ideal for wet areas and high-traffic spaces.'
      },
      {
        title: 'Design',
        description: 'Wide variety of designs and styles available.'
      }
    ],
    'FlooringSections.descriptions.Wood': [
      {
        title: 'Natural Elegance',
        description: 'Brings warmth and natural elegance to any space.'
      },
      {
        title: 'Durability',
        description: 'With proper care, can last for generations.'
      },
      {
        title: 'Value',
        description: 'Increases your property value.'
      }
    ],

    // QuienesSomos
    'QuienesSomos.specialty.title': 'Nuestra Especialidad',
    'QuienesSomos.specialty.description': 'Somos expertos en la instalación y renovación de pisos, ofreciendo soluciones de alta calidad para transformar tus espacios.',
    'QuienesSomos.whyChooseUs.title': '¿Por qué elegirnos?',
    'QuienesSomos.whyChooseUs.items': [
      'Experiencia y profesionalismo garantizado',
      'Materiales de primera calidad',
      'Instalación precisa y eficiente',
      'Atención personalizada',
      'Garantía en todos nuestros trabajos',
      'Precios competitivos'
    ],
    'QuienesSomos.commitment.title': 'Nuestro Compromiso',
    'QuienesSomos.commitment.description': [
      'Calidad en cada detalle',
      'Satisfacción del cliente',
      'Trabajo limpio y ordenado',
      'Cumplimiento de plazos'
    ],
    'QuienesSomos.services.title': 'Nuestros Servicios',
    'QuienesSomos.services.description': [
      'Instalación de pisos laminados',
      'Instalación de pisos vinílicos',
      'Instalación de pisos de madera',
      'Renovación de pisos existentes',
      'Asesoramiento en diseño'
    ],
    'QuienesSomos.floorTypes.title': 'Tipos de Pisos',
    'QuienesSomos.floorTypes.items': [
      'Laminados',
      'Vinílicos',
      'Madera',
      'Porcelanato',
      'Cerámica'
    ],
    'QuienesSomos.cabinets.title': 'Muebles',
    'QuienesSomos.cabinets.items': [
      'Cocinas',
      'Baños',
      'Closets',
      'Muebles a medida'
    ],
    'QuienesSomos.materials.title': 'Materiales',
    'QuienesSomos.materials.items': [
      'Madera',
      'Melamina',
      'MDF',
      'Aluminio',
      'Acero inoxidable'
    ],

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

    // ProjectSection
    'ProjectSection.title': 'Nuestros Proyectos',
    'Button.Download': 'Descargar imagen',
    'Button.Close': 'Cerrar',

    // FlooringSections
    'FlooringSections.title': 'Nuestros Tipos de Pisos',
    'FlooringSections.options.Vinyl': 'Vinílico',
    'FlooringSections.options.Laminate': 'Laminado',
    'FlooringSections.options.Tile': 'Porcelanato',
    'FlooringSections.options.Wood': 'Madera',
    'FlooringSections.button.Close': 'Cerrar',
    'FlooringSections.descriptions.Laminate': [
      {
        title: 'Durabilidad',
        description: 'Los pisos laminados son conocidos por su excepcional durabilidad y resistencia al desgaste.'
      },
      {
        title: 'Fácil Mantenimiento',
        description: 'Requieren poco mantenimiento y son fáciles de limpiar.'
      },
      {
        title: 'Variedad de Estilos',
        description: 'Disponibles en una amplia gama de colores y texturas que imitan la madera natural.'
      }
    ],
    'FlooringSections.descriptions.Vinyl': [
      {
        title: 'Resistente al Agua',
        description: 'Ideal para áreas húmedas como baños y cocinas.'
      },
      {
        title: 'Confort',
        description: 'Ofrece una superficie suave y cómoda para caminar.'
      },
      {
        title: 'Versatilidad',
        description: 'Perfecto para cualquier espacio de la casa.'
      }
    ],
    'FlooringSections.descriptions.Tile': [
      {
        title: 'Durabilidad',
        description: 'Extremadamente resistente y duradero.'
      },
      {
        title: 'Resistente al Agua',
        description: 'Ideal para áreas húmedas y de alto tráfico.'
      },
      {
        title: 'Diseño',
        description: 'Amplia variedad de diseños y estilos disponibles.'
      }
    ],
    'FlooringSections.descriptions.Wood': [
      {
        title: 'Elegancia Natural',
        description: 'Aporta calidez y elegancia natural a cualquier espacio.'
      },
      {
        title: 'Durabilidad',
        description: 'Con el cuidado adecuado, puede durar generaciones.'
      },
      {
        title: 'Valor',
        description: 'Aumenta el valor de tu propiedad.'
      }
    ],

    // QuienesSomos
    'QuienesSomos.specialty.title': 'Nuestra Especialidad',
    'QuienesSomos.specialty.description': 'Somos expertos en la instalación y renovación de pisos, ofreciendo soluciones de alta calidad para transformar tus espacios.',
    'QuienesSomos.whyChooseUs.title': '¿Por qué elegirnos?',
    'QuienesSomos.whyChooseUs.items': [
      'Experiencia y profesionalismo garantizado',
      'Materiales de primera calidad',
      'Instalación precisa y eficiente',
      'Atención personalizada',
      'Garantía en todos nuestros trabajos',
      'Precios competitivos'
    ],
    'QuienesSomos.commitment.title': 'Nuestro Compromiso',
    'QuienesSomos.commitment.description': [
      'Calidad en cada detalle',
      'Satisfacción del cliente',
      'Trabajo limpio y ordenado',
      'Cumplimiento de plazos'
    ],
    'QuienesSomos.services.title': 'Nuestros Servicios',
    'QuienesSomos.services.description': [
      'Instalación de pisos laminados',
      'Instalación de pisos vinílicos',
      'Instalación de pisos de madera',
      'Renovación de pisos existentes',
      'Asesoramiento en diseño'
    ],
    'QuienesSomos.floorTypes.title': 'Tipos de Pisos',
    'QuienesSomos.floorTypes.items': [
      'Laminados',
      'Vinílicos',
      'Madera',
      'Porcelanato',
      'Cerámica'
    ],
    'QuienesSomos.cabinets.title': 'Muebles',
    'QuienesSomos.cabinets.items': [
      'Cocinas',
      'Baños',
      'Closets',
      'Muebles a medida'
    ],
    'QuienesSomos.materials.title': 'Materiales',
    'QuienesSomos.materials.items': [
      'Madera',
      'Melamina',
      'MDF',
      'Aluminio',
      'Acero inoxidable'
    ],

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
    'Menu.QuienesSomos': 'Sobre Nós',
    'Menu.floors': 'Explore nossos tipos de pisos',
    'Menu.improveSpace': 'Projetos',
    'Menu.Reviews': 'Avaliações',
    'Menu.contact': 'Contato',
    'Menu.corp': 'CORPORAÇÃO DE CONSTRUÇÃO',

    // ProjectSection
    'ProjectSection.title': 'Nossos Projetos',
    'Button.Download': 'Baixar imagem',
    'Button.Close': 'Fechar',

    // FlooringSections
    'FlooringSections.title': 'Nossos Tipos de Pisos',
    'FlooringSections.options.Vinyl': 'Vinílico',
    'FlooringSections.options.Laminate': 'Laminado',
    'FlooringSections.options.Tile': 'Porcelanato',
    'FlooringSections.options.Wood': 'Madeira',
    'FlooringSections.button.Close': 'Fechar',
    'FlooringSections.descriptions.Laminate': [
      {
        title: 'Durabilidade',
        description: 'Os pisos laminados são conhecidos por sua excepcional durabilidade e resistência ao desgaste.'
      },
      {
        title: 'Fácil Manutenção',
        description: 'Requerem pouca manutenção e são fáceis de limpar.'
      },
      {
        title: 'Variedade de Estilos',
        description: 'Disponíveis em uma ampla gama de cores e texturas que imitam a madeira natural.'
      }
    ],
    'FlooringSections.descriptions.Vinyl': [
      {
        title: 'Resistente à Água',
        description: 'Ideal para áreas úmidas como banheiros e cozinhas.'
      },
      {
        title: 'Conforto',
        description: 'Oferece uma superfície macia e confortável para caminhar.'
      },
      {
        title: 'Versatilidade',
        description: 'Perfeito para qualquer espaço da casa.'
      }
    ],
    'FlooringSections.descriptions.Tile': [
      {
        title: 'Durabilidade',
        description: 'Extremamente resistente e durável.'
      },
      {
        title: 'Resistente à Água',
        description: 'Ideal para áreas úmidas e de alto tráfego.'
      },
      {
        title: 'Design',
        description: 'Ampla variedade de designs e estilos disponíveis.'
      }
    ],
    'FlooringSections.descriptions.Wood': [
      {
        title: 'Elegância Natural',
        description: 'Traz calor e elegância natural para qualquer espaço.'
      },
      {
        title: 'Durabilidade',
        description: 'Com os cuidados adequados, pode durar gerações.'
      },
      {
        title: 'Valor',
        description: 'Aumenta o valor da sua propriedade.'
      }
    ],

    // QuienesSomos
    'QuienesSomos.specialty.title': 'Nossa Especialidade',
    'QuienesSomos.specialty.description': 'Somos especialistas em instalação e renovação de pisos, oferecendo soluções de alta qualidade para transformar seus espaços.',
    'QuienesSomos.whyChooseUs.title': 'Por que escolhermos?',
    'QuienesSomos.whyChooseUs.items': [
      'Experiência e profissionalismo garantido',
      'Materiais de primeira qualidade',
      'Instalação precisa e eficiente',
      'Atendimento personalizado',
      'Garantia em todos os nossos trabalhos',
      'Preços competitivos'
    ],
    'QuienesSomos.commitment.title': 'Nosso Compromisso',
    'QuienesSomos.commitment.description': [
      'Qualidade em cada detalhe',
      'Satisfação do cliente',
      'Trabalho limpo e organizado',
      'Cumprimento de prazos'
    ],
    'QuienesSomos.services.title': 'Nossos Serviços',
    'QuienesSomos.services.description': [
      'Instalação de pisos laminados',
      'Instalação de pisos vinílicos',
      'Instalação de pisos de madeira',
      'Renovação de pisos existentes',
      'Assessoria em design'
    ],
    'QuienesSomos.floorTypes.title': 'Tipos de Pisos',
    'QuienesSomos.floorTypes.items': [
      'Laminados',
      'Vinílicos',
      'Madeira',
      'Porcelanato',
      'Cerâmica'
    ],
    'QuienesSomos.cabinets.title': 'Móveis',
    'QuienesSomos.cabinets.items': [
      'Cozinhas',
      'Banheiros',
      'Closets',
      'Móveis sob medida'
    ],
    'QuienesSomos.materials.title': 'Materiais',
    'QuienesSomos.materials.items': [
      'Madeira',
      'Melaço',
      'MDF',
      'Alumínio',
      'Aço inoxidável'
    ],

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