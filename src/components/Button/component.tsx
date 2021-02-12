import { Link, navigate } from 'gatsby';
import React, { forwardRef, Ref, MouseEvent, useCallback } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Props } from './types';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = forwardRef<any, Props>(({
  href,
  fill,
  size,
  shape,
  target,
  rel,
  children,
  className,
  onClick,
  ...props
}, ref) => {
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

  const scrollIntoView = useCallback((event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    event.preventDefault();

    const anchor = href?.startsWith('#') && href;
    const target = anchor && document.querySelector(anchor);
    const rootElement = document.documentElement;

    if (!target) {
      rootElement.classList.add('smoothless');
      if (href) navigate(href);
      return;
    }

    rootElement.classList.remove('smoothless');

    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'center',
    });
  }, [href, onClick]);

  const button =
  (
    <button
      {...props}
      className={classes}
      data-testid="button"
      onClick={onClick}
      ref={ref as Ref<HTMLButtonElement>}
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
        onClick={onClick}
        ref={ref as Ref<HTMLAnchorElement>}
        data-testid="button"
      >
        {children}
      </a>
    );

  const internalLink = (
    <Link
      data-testid="button"
      onClick={scrollIntoView}
      className={classes}
      to={href || '/'}
      ref={ref}
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
});


Button.defaultProps = {
  shape: 'rect',
  fill: 'default',
  size: 'small',
};


const StyledButton = styled(Button)`
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-default-timing);
  display: inline-block;

  &.fill-default {
    overflow: hidden;
    position: relative;
    border-width: 0px;
    border-style: solid;
    background-color: ${(props) => props.background ? props.background : 'var(--background-accent-primary)'};
    border-color: ${(props) => props.background ? props.background : 'var(--background-accent-primary)'};
    color: ${(props) => props.foreground ? props.foreground : 'var(--foreground-accent-primary)'};

    ::after {
      content: '';
      display: block;
      background-color: var(--background-accent-tertiary);
      width: 100%;
      height: 5px;

      transform: translateX(-50%);
      position: absolute;
      bottom: 0;
      left: 50%;

      transition-property: all;
    }

    &:not(:hover) ::after {
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.64, 0, 0.78, 0);
      margin-bottom: -5px;
    }

    &:hover ::after {
      transition-duration: 450ms;
      transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
      margin-bottom: 0px;
    }
  }

  &.fill-clear {
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    background-color: transparent;
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
