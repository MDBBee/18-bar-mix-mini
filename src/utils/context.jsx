import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

const getDarkMode = () => {
  const userPreference = window.matchMedia('(prefers-color-scheme)').matches;
  const storage = localStorage.getItem('theme');

  if (storage === null) {
    return userPreference;
  } else {
    return storage === 'true';
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getDarkMode);

  useEffect(() => {
    document.querySelector('body').classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('theme', isDarkMode);
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
