import { useEffect } from "react";
import { useState } from "react"

export const useTheme = () => {

  const [theme, setTheme] = useState( 'light' );

  useEffect( () => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => setTheme( old => old === 'light' ? 'dark' : 'light');

  useEffect( () => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme: theme, toggleTheme: toggleTheme };
}