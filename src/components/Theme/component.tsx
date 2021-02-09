import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSystemTheme } from '~hooks/useSystemTheme';
import { ThemeMode } from './types';


const Theme: FunctionComponent = ({ children }) => {
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState<ThemeMode>();

  const toggleThme = useCallback((): void => {
    setTheme((currentTheme) => {
      const theme = currentTheme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', theme);
      window.__updateTheme(theme);
      return theme;
    });
  }, []);

  useEffect(() => {
    const preferedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (!preferedTheme) return;
    setTheme(preferedTheme);
  }, []);

  useEffect(() => {
    const preferedTheme = window.localStorage.getItem('theme');
    if (preferedTheme) return;
    setTheme(systemTheme);
  }, [systemTheme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const mediaHandler = (event: MediaQueryListEvent): void => {
      const preferedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null;
      const theme = event.matches ? 'dark' : 'light';
      if (preferedTheme) return;
      window.__updateTheme(theme);
    };

    media.addEventListener('change', mediaHandler);
    return () => media.removeEventListener('change', mediaHandler);
  }, []);

  return (
    <ThemeProvider theme={{ name: theme, toggle: toggleThme }}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
