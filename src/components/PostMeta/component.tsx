import styled from 'styled-components';

const PostMeta = styled('span')`
  font-weight: 300;
  padding: 0px var(--page-side-gap);
  display: block;
  opacity: 0.45;

  @media (max-width: 767px) { font-size: calc(1.10rem + 0vw); letter-spacing: 0.035em; }
  @media (min-width: 768px) { font-size: calc(1.00rem + 1vw); letter-spacing: 0.020em; }
`;

export default PostMeta;
