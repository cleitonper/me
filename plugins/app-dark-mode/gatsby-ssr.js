const React = require('react');

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getSystemMode() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const mode = media.matches ? 'dark' : 'light';
    return mode;
  }

  function getPreferedMode() {
    const mode = window.localStorage.getItem('theme');
    return mode;
  }

  function getThemeColor(mode) {
    const colors = {
      light: '#ffffff',
      dark: '#2e3440',
    };

    return colors[mode];
  }

  const mode = getPreferedMode() || getSystemMode();
  const color = getThemeColor(mode);
  const root = document.documentElement;

  root.dataset.theme = mode;

  let meta = document.head.querySelector('meta[name=theme-color]');

  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = color;
    document.getElementsByTagName('head')[0].appendChild(meta);
  } else {
    meta.content = color;
  }


  window.__updateTheme = function(theme) {
    const color = getThemeColor(theme);

    root.dataset.theme = theme;
    meta.content = color;
  }
})();

(function() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const mediaHandler = (event) => {
    const preferedTheme = window.localStorage.getItem('theme');
    const theme = event.matches ? 'dark' : 'light';
    if (preferedTheme) return;
    window.__updateTheme(theme);
  };

  media.addEventListener('change', mediaHandler);
})();
`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="theme-handler" />);
};
