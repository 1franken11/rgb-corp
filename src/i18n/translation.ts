import { useTranslations, type Language, defaultLang, getLanguageFromURL } from './utils';

// Obtiene la función de traducción para un idioma dado
export function getTranslation(lang: Language) {
  const t = useTranslations(lang);
  return { lang, t };
}

// Obtiene el idioma desde una ruta o URL (para usar en Astro)
export function getLangFromAstroUrl(Astro: any): Language {
  // Astro.url.pathname está disponible en páginas y layouts
  return getLanguageFromURL(Astro.url?.pathname ?? '') || defaultLang;
} 