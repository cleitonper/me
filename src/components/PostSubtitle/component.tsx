import styled from 'styled-components';

const PostTitle = styled('h2')`
  font-weight: 300;
  line-height: 1.15em;
  padding: 0px var(--page-side-gap);
  opacity: 0.75;


  @media (max-width: 767px) {
    font-size: calc(1.45rem + 0vw);
    letter-spacing: 0.070em;
    margin-bottom: 0.45em;
  }

  @media (min-width: 768px) {
    font-size: calc(1.20rem + 1vw);
    letter-spacing: 0.035em;
    margin-bottom: 0.25em;
    }
`;

export default PostTitle;
