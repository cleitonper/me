import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Title = styled('h1')`
  padding: 0px var(--page-side-gap);
  margin: 32px 0px 12px;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  width: 100%;
`;

const PageTitle: FunctionComponent = ({ children }) => (
  <Title>{ children }</Title>
);

export default PageTitle;
