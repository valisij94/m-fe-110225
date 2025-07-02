// file src/context/ThemeContext.jsx
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext('light');

export function ThemeContextWrapper( {children} ) {

  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme( old => old === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={ {value: theme, switchTheme: switchTheme} }>
      {children}
    </ThemeContext.Provider>
  );
}