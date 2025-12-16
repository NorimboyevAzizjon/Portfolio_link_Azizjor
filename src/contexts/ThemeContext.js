import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import useNotification from '../hooks/useNotification';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkThemeState] = useState(() => {
    return JSON.parse(localStorage.getItem('darkTheme')) || false;
  });
  const { t } = useLanguage();
  const { showNotification } = useNotification();

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkThemeState((prevTheme) => !prevTheme);
    showNotification(darkTheme ? t.lightThemeEnabled : t.darkThemeEnabled, 'success');
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
