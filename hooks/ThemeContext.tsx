import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

import { ReactNode } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);