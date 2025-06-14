import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslations } from '../i18n/utils';
import type { Language } from '../i18n/utils';
import { getLangFromUrl } from '../../i18n/utils';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');
  const t = useTranslations(lang);

  useEffect(() => {
    // Obtener el idioma de la URL al cargar
    const path = window.location.pathname;
    const [, pathLang] = path.split('/');
    if (pathLang && ['es', 'en', 'pt'].includes(pathLang)) {
      setLang(pathLang as Language);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    // Actualizar la URL
    const path = window.location.pathname;
    const [, , ...rest] = path.split('/');
    window.location.pathname = `/${newLang}/${rest.join('/')}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 