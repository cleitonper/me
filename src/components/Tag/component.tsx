import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Tag: FunctionComponent<Props> = ({ children, className }) => (
  <span className={className}>{children}</span>
);

const StyledTag = styled(Tag)`
  color: ${({ foreground }) => foreground};
  background-color: ${({ background }) => background};
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 8px;
`;

export default StyledTag;
