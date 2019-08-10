import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Mouse: FunctionComponent<Props> = ({ className }) => (
  <div className={className}></div>
);

const StyledMouse = styled(Mouse)`
  width: 34px;
  height: 55px;
  border: 2px solid var(--foreground-primary);
  border-radius: 25px;
  opacity: 0.75;
  position: relative;

  @keyframes scroll {
    0% { top: 8px; opacity: 1; }
    100% { top: 30px; opacity: 0;}
  }

  ::before {
    content: '';
    display: block;
    width: 3px;
    height: 6px;
    border-radius: 25%;
    background-color: var(--foreground-primary);
    animation-name: scroll;
    animation-duration: 2s;
    animation-timing-function: var(--ease-in-out-cubic);
    animation-iteration-count: infinite;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 4px;
  }
`;

export default StyledMouse;
