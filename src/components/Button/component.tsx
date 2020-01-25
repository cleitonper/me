import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Props } from './types';

const Button: FunctionComponent<Props> = ({
  fill,
  href,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const _rel = !rel
    ? 'noopener noreferrer nofollow'
    : rel;

  const _target = !target
    ? '_blank'
    : target;


  const button =
  (
    <button
      {...props}
      className={classNames(
        className,
        `fill-${fill}`,
      )}
      data-testid="button"
    >
      {children}
    </button>
  );

  const link =
    (
      <a
        {...props}
        href={href}
        target={_target}
        rel={_rel}
        className={classNames(
          className,
          `fill-${fill}`,
        )}
        data-testid="button"
      >
        {children}
      </a>
    );

  return href
    ? link
    : button;
};

Button.defaultProps = { fill: 'default' };

const StyledButton = styled(Button)`
  cursor: pointer;
  text-decoration: none;
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
