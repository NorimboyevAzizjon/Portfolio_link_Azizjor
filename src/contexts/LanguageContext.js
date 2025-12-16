import React, { createContext, useContext, useState, useEffect } from 'react';
import uzTranslations from '../locales/uz';
import ruTranslations from '../locales/ru';
import enTranslations from '../locales/en';
import useNotification from '../hooks/useNotification';

const translations = {
  uz: uzTranslations,
  ru: ruTranslations,
  en: enTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'uz';
  });
  const { showNotification } = useNotification();

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguageState(lang);
    let message = '';
    if (lang === 'uz') {
      message = uzTranslations.uzbekLanguageSelected;
    } else if (lang === 'ru') {
      message = ruTranslations.russianLanguageSelected;
    } else {
      message = enTranslations.englishLanguageSelected;
    }
    showNotification(message, 'success');
  };

  const t = translations[language] || translations['uz'];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
