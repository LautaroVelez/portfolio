import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Carga las traducciones usando un backend (puede ser desde el servidor)
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Inicia la configuración de i18next con react-i18next
  .init({
    fallbackLng: 'en', // Idioma predeterminado si no se detecta otro
    debug: false, // Puedes desactivarlo en producción
    interpolation: {
      escapeValue: false // React ya escapa los valores de forma segura
    },
    backend: {
      loadPath: '/translations/{{lng}}/{{ns}}.json', // Ruta a tus archivos de traducción
    },
    ns: ['landing', 'about', 'projects', 'contact', 'navbar', 'footer'], // Nombres de los namespaces (uno por página/componente)
    defaultNS: 'landing', // Namespace por defecto
  });

export default i18n;
