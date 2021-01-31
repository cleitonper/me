import styled, { css } from 'styled-components';
import { InlineWysiwyg } from 'react-tinacms-editor';


const style = css`
  padding: 0px var(--page-side-gap);
  margin-bottom: 32px;
  margin-top: 60px;

  ul {
    list-style-type: square;
    margin-bottom: 3rem;
    margin-left: 4.2em;
  }

  p, li {
    line-height: 1.45em;
  }

  li,
  p + p {
    margin-top: 1em;
  }

  h3, h4, h5, h6 {
    margin: 1.75em 0px 0.10em;
    line-height: 1.45em;
    font-weight: 700;
  }

  h3 {
    font-weight: 700;
  }

  h4, h5, h6 {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: var(--foreground-highlight);
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  a > code,
  p > code {
    background-color: var(--code-background);
    white-space: nowrap;
    font-size: 0.80em;
    line-height: 1em;
    border-radius: 8px;
    padding: 0.10em 10px;
  }

  p > code {
    color: var(--code-foreground);
  }

  a > code {
    color: var(--foreground-highlight);
  }

  pre[class*="language-"],
  code[class*="language-"],
  div[class*="CodeMirror"] {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  }

  .gatsby-highlight {
    margin-top: 0.75em;
    margin-bottom: 2.50em;
  }

  @media (max-width: 767px) {
    h3 { font-size: 1.40rem; }
    h4 { font-size: 1.35rem; }
    h5 { font-size: 1.30rem; }
    h6 { font-size: 1.25rem; }

    p, li, .gatsby-highlight { font-size: 1.25rem; }

    p, li { letter-spacing: 0.070em; }
    h3, h4, h5, h6 { letter-spacing: 0.050em; }
  }

  @media (min-width: 768px) {
    h3 { font-size: calc(1.25rem + 1vw); }
    h4 { font-size: calc(1.15rem + 1vw); }
    h5 { font-size: calc(1.00rem + 1vw); }
    h6 { font-size: calc(0.90rem + 1vw); }

    p, li, .gatsby-highlight { font-size: calc(0.75rem + 1vw); }

    p, li { letter-spacing: 0.030em; }
    h3, h4, h5, h6 { letter-spacing: 0.045em; }
  }
`;


const PostContent = styled('div')`${style}`;
const PostContentEditor = styled(InlineWysiwyg)`${style}`;


PostContentEditor.defaultProps = {
  sticky: true,
  name: 'rawMarkdownRemark',
  format: 'markdown',
  focusRing: {
    offset: {
      x: 0,
      y: 0,
    },
  },
};


export {
  PostContent,
  PostContentEditor,
};
