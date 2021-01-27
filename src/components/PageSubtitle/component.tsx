import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Subtitle = styled('h2')`
  padding: 0px var(--page-side-gap);
  margin: 0px auto 48px;
  text-align: center;
  font-weight: 300;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 1.40rem;
    line-height: 1.45em;
    letter-spacing: 0.025em;
  }

  @media (min-width: 768px) {
    font-size: 1.95rem;
    line-height: 1.25em;
    letter-spacing: 0.010em;
  }
`;

const PageSubtitle: FunctionComponent = ({ children }) => (
  <Subtitle>{ children }</Subtitle>
);

export default PageSubtitle;
