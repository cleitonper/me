import styled, { css } from 'styled-components';
import { Wysiwyg } from '@tinacms/fields';

const style = css`
  padding: 0px 16px;
  margin-bottom: 32px;
  margin-top: 24px;

  ul {
    list-style-type: square;
    margin-bottom: 3rem;
    margin-left: 4.2em;
  }

  p, li {
    font-size: calc(14px + 1.50vw);
  }

  p, li {
    margin-bottom: 1em;
    line-height: 1.45em;
  }

  h3, h4, h5, h6 {
    margin: 1em 0px 0.10em;
    line-height: 1.45em;
    font-weight: 700;
  }

  h3 {
    font-weight: 700;
  }

  h4, h5, h6 {
    font-weight: 500;
  }

  h3 { font-size: calc(24px + 3vw); }
  h4 { font-size: calc(20px + 2.50vw); }
  h5 { font-size: calc(16px + 2.30vw); }
  h6 { font-size: calc(14px + 2vw); }

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
    border-radius: 8px;
    padding: 0.30em 10px;
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
    font-size: calc(12px + 1.35vw);
  }
`;

export default styled('div')`${style}`;
export const PostContentEditor = styled(Wysiwyg)`${style}`;
