import type { Translations } from '../types/Translations';

export type Language = "ES" | "EN" | "POR";

export interface TranslationContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  languageFlags: Record<Language, string>;
}

// Create a store to hold the current language and translations
let currentLanguage: Language = "EN";
let currentTranslations: Translations;
let languageFlags: Record<Language, string> = {
  ES: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743188884/spain_n6iqbo.png",
  EN: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743189034/eeuu_hbbmnt.png",
  POR: "https://res.cloudinary.com/drwacbtjf/image/upload/v1743187487/11zon_cropped_ykitcx.png",
};

// Function to set the language
export function setLanguage(lang: Language) {
  currentLanguage = lang;
  // You'll need to implement the logic to load translations here
  // This could be done through a server-side function or client-side script
}

// Function to get the current language
export function getLanguage(): Language {
  return currentLanguage;
}

// Function to get the current translations
export function getTranslations(): Translations {
  return currentTranslations;
}

// Function to get language flags
export function getLanguageFlags(): Record<Language, string> {
  return languageFlags;
}

// Function to initialize translations
export function initializeTranslations(translations: Translations) {
  currentTranslations = translations;
} 