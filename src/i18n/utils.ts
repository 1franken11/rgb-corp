import ES from '../components/languages/ES.json';
import EN from '../components/languages/EN.json';
import PT from '../components/languages/PT.json';

export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
} as const;

export type Language = 'es' | 'en' | 'pt';

export const defaultLang = 'es';
export const showDefaultLang = false;

export function getLanguageFromURL(pathname: string): Language {
  const langCode = pathname.split('/')[1];
  if (langCode === 'en' || langCode === 'pt') {
    return langCode;
  }
  return 'es';
}

export function getLangFromUrl(url: URL): { lang: Language } {
  const langCode = url.pathname.split('/')[1];
  if (langCode === 'en' || langCode === 'pt') {
    return { lang: langCode };
  }
  return { lang: 'es' };
}

export function useTranslations(lang: Language) {
  const translations = {
    es: ES,
    en: EN,
    pt: PT
  };

  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  };
}

export const languageFlags: Record<Language, string> = {
  es: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743188884/spain_n6iqbo.png",
  en: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743189034/eeuu_hbbmnt.png",
  pt: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743187487/11zon_cropped_ykitcx.png",
};

export function useI18n() {
  // En el servidor, usamos el idioma por defecto
  const lang = typeof window !== 'undefined' 
    ? getLangFromUrl(new URL(window.location.href)).lang
    : defaultLang;
  
  const t = useTranslations(lang);
  
  return {
    lang,
    t
  };
}

export function getPathFromURL(url: URL) {
  const [, lang, ...rest] = url.pathname.split('/');
  return rest.join('/');
}

export function getLanguageFromPath(path: string) {
  const [, lang] = path.split('/');
  if (lang in languages) return lang as Language;
  return undefined;
}

export function getPathWithoutLanguage(path: string) {
  const [, lang, ...rest] = path.split('/');
  return rest.join('/');
} 