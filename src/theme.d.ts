import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark' | undefined;
    toggle: () => void;
  }
}

declare global {
  interface Window {
    /**
     * Atualiza o tema da aplicação.
     *
     * @param name Nome do tema
     */
    __updateTheme: (name: 'dark' | 'light') => void;
  }
}
