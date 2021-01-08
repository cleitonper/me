import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Props } from './types';

const Button: FunctionComponent<Props> = ({
  href,
  fill,
  size,
  shape,
  target,
  rel,
  children,
  className,
  ...props
}) => {
  const linkType = !href
    ? null
    : href.startsWith('/') || href.startsWith('#')
      ? 'internal'
      : 'external';

  const _rel = rel
    ? rel
    : linkType === 'external'
      ? 'noopener noreferrer nofollow'
      : '';

  const _target = target
    ? target
    : linkType === 'external'
      ? '_blank'
      : '';

  const classes = classNames(
    className,
    `fill-${fill}`,
    shape,
    size,
  );

  const button =
  (
    <button
      {...props}
      className={classes}
      data-testid="button"
    >
      {children}
    </button>
  );

  const externalLink =
    (
      <a
        {...props}
        href={href}
        target={_target}
        rel={_rel}
        className={classes}
        data-testid="button"
      >
        {children}
      </a>
    );

  const internalLink = (
    <Link
      className={classes}
      to={href || '/'}
      replace
    >
      {children}
    </Link>
  );

  return !href
    ? button
    : linkType === 'internal'
      ? internalLink
      : externalLink;
};

Button.defaultProps = {
  shape: 'rect',
  fill: 'default',
  size: 'small',
};

const StyledButton = styled(Button)`
  cursor: pointer;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  transition: all var(--transition-default-timing);
  display: inline-block;

  &.fill-default {
    background-color: ${(props) => props.background ? props.background : 'var(--background-accent-primary)'};
    border-color: ${(props) => props.background ? props.background : 'var(--background-accent-primary)'};
    color: ${(props) => props.foreground ? props.foreground : 'var(--foreground-accent-primary)'};
  }

  &.fill-clear {
    background-color: transparent;
    border-color: transparent;
    color: ${(props) => props.foreground ? props.foreground : 'var(--foreground-accent-primary)'};

    :hover {
      background-color: rgba(var(--foreground-primary-rgb), 0.05);
      border-color: transparent;
    }
  }

  &.small {
    font-size: 16px;
    padding: 8px 16px;
  }

  &.medium {
    font-size: 24px;
    padding: 12px 24px;
  }

  &.big {
    font-size: 32px;
    padding: 16px 32px;
  }

  &.rounded {
    border-radius: 24px;
  }

  &.round {
    border-radius: 8px;
  }

  &.rect {
    border-radius: 0px;
  }

  &:disabled {
    opacity: 0.50;
    cursor: not-allowed;
  }
`;

export default StyledButton;
