// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import jpTranslation from './locales/jp/translation.json';
import cyTranslation from './locales/cy/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            jp: { translation: jpTranslation },
            cy: { translation: cyTranslation }
        },
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie'],
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
