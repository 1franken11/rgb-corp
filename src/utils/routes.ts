// Route utilities for handling trailing slashes

export const BASE_URL = 'https://rgb-corporation.com';

export const LANGUAGES = ['es', 'en', 'pt'] as const;
export type Language = typeof LANGUAGES[number];

// Route configuration
export const ROUTES = {
  home: '/',
  about: '/about/',
  services: '/services/',
  projects: '/projects/',
  contact: '/contact/',
  flooring: '/flooring/',
  cabinets: '/cabinets/',
  renovation: '/renovation/',
} as const;

// Generate language-specific routes
export function getLanguageRoute(lang: Language, route: string): string {
  if (lang === 'en') {
    return route;
  }
  return `/${lang}${route}`;
}

// Generate canonical URL
export function getCanonicalUrl(lang: Language, route: string): string {
  return `${BASE_URL}${getLanguageRoute(lang, route)}`;
}

// Generate hreflang URLs
export function getHreflangUrls(route: string): Record<string, string> {
  const urls: Record<string, string> = {};
  
  LANGUAGES.forEach(lang => {
    urls[lang] = getCanonicalUrl(lang, route);
  });
  
  // Add x-default (English as default)
  urls['x-default'] = getCanonicalUrl('en', route);
  
  return urls;
}

// Check if route exists
export function isValidRoute(route: string): boolean {
  return Object.values(ROUTES).includes(route as any);
}

// Get route from pathname
export function getRouteFromPath(pathname: string): string | null {
  // Remove language prefix if present
  const cleanPath = pathname.replace(/^\/(en|pt)/, '');
  
  // Add trailing slash if missing
  const normalizedPath = cleanPath.endsWith('/') ? cleanPath : cleanPath + '/';
  
  return Object.values(ROUTES).includes(normalizedPath as any) ? normalizedPath : null;
}

// Get language from pathname
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/es/')) return 'es';
  if (pathname.startsWith('/pt/')) return 'pt';
  return 'en'; // Default to English
} 