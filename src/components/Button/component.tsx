import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Props } from './types';

const Button: FunctionComponent<Props> = ({
  fill,
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      className,
      `fill-${fill}`,
    )}
  >
    {children}
  </button>
);

Button.defaultProps = { fill: 'default' };

const StyledButton = styled(Button)`
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  transition: all var(--transition-default-timing);

  &.fill-default {
    background-color: var(--background-accent-primary);
    border-color: var(--background-accent-primary);
    color: var(--foreground-accent-primary);
  }

  &.fill-clear {
    background-color: transparent;
    border-color: transparent;
    color: var(--foreground-primary);

    :hover {
      background-color: rgba(var(--foreground-primary-rgb), 0.05);
      border-color: transparent;
    }
  }
`;

export default StyledButton;
