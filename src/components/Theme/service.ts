import { Dispatch, SetStateAction } from 'react';
import { ThemeMode } from './types';


function toggle(setTheme: Dispatch<SetStateAction<ThemeMode>>): void {
  setTheme((currentTheme) => {
    const theme = currentTheme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    window.__updateTheme(theme);
    return theme;
  });
}


export default { toggle };
