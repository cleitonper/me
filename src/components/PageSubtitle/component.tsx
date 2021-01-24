import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Subtitle = styled('h2')`
  padding: 0px var(--page-side-gap);
  margin: 0px auto 48px;
  text-align: center;
  font-weight: 300;
  font-size: 1.95rem;
  line-height: 1.25em;
  max-width: 1200px;
  width: 100%;
`;

const PageSubtitle: FunctionComponent = ({ children }) => (
  <Subtitle>{ children }</Subtitle>
);

export default PageSubtitle;
