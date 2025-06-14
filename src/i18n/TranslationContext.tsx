import React, { createContext, useContext } from 'react';
import { useTranslations } from './utils';
import type { Language } from './utils';

interface TranslationContextType {
  lang: Language;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: React.ReactNode;
  lang: Language;
}

export const TranslationProvider = ({ children, lang }: TranslationProviderProps) => {
  const t = useTranslations(lang);
  return (
    <TranslationContext.Provider value={{ lang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}; 