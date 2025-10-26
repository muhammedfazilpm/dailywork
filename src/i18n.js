import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationML from './locales/ml/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ml: {
    translation: translationML
  }
};

i18n
  .use(LanguageDetector) // optional: detect user language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;
