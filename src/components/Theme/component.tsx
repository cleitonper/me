import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSystemTheme } from '~hooks/useSystemTheme';
import ThemeService from './service';
import { ThemeMode } from './types';


const Theme: FunctionComponent = ({ children }) => {
  const defaultTheme = 'light';
  const systemTheme = useSystemTheme();
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

  const toggleThme = useCallback((): void => {
    ThemeService.toggle(setTheme);
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

  return (
    <ThemeProvider theme={{ name: theme, toggle: toggleThme }}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
