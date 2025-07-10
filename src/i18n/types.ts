export const languages = {
  en: "English",
  es: "Español",
  pt: "Português"
} as const;

export type Language = keyof typeof languages;
