import { useState, useEffect } from 'react';
import { Theme } from './types';


export default function useSystemTheme(): Theme {
  const isRendered = typeof window !== 'undefined';
  const [theme, setTheme] = useState<Theme>('');

  useEffect(() => {
    if (!isRendered) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    setTheme(() => media.matches ? 'dark' : 'light');
    const mediaHandler = (event: MediaQueryListEvent): void => setTheme(event.matches ? 'dark' : 'light');
    media.addEventListener('change', mediaHandler);
    return () => media.removeEventListener('change', mediaHandler);
  }, [isRendered]);

  return theme;
}
