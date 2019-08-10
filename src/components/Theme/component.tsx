import React, { FunctionComponent, useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

const colors = {
  light: '#ffffff',
  dark: '#2e3440',
};

const Theme: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [color, setColor] = useState<string>('#ffffff');
  const toggleThme = (): void => setTheme((theme) => theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    setColor(colors[theme]);
  }, [theme]);

  return (
    <ThemeProvider theme={{ name: theme, toggle: toggleThme }}>
      <>
        {children}
        <Helmet>
          <html data-theme={theme} />
          <meta name="theme-color" content={color} />
        </Helmet>
      </>
    </ThemeProvider>
  );
};

export default Theme;
