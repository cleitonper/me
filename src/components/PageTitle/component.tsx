import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Title = styled('h1')`
  padding: 0px var(--page-side-gap);
  margin: 32px 0px 12px;
  text-align: center;
  font-weight: 700;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 1.95rem;
    letter-spacing: 0.035em;
  }

  @media (min-width: 768px) {
    font-size: 2.50rem;
    letter-spacing: 0.010em;
  }
`;

const PageTitle: FunctionComponent = ({ children }) => (
  <Title>{ children }</Title>
);

export default PageTitle;
