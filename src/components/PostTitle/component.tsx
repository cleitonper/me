import styled from 'styled-components';

const PostSubtitle = styled('h1')`
  padding: 0px var(--page-side-gap);
  letter-spacing: 0.050em;
  font-weight: 900;


  @media (max-width: 767px) {
    font-size: calc(1.65rem + 0vw);
    margin-bottom: 0.35em;
    margin-top: 1.25em;
  }

  @media (min-width: 768px) {
    font-size: calc(2.00rem + 1vw);
    margin-bottom: 0.10em;
    margin-top: 0.60em;
  }
`;

export default PostSubtitle;
