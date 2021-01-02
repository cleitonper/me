import { Link } from 'gatsby';
import React, { FunctionComponent, useRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { Logo } from '~components/Logo';
import { ThemeToggle } from '~components/ThemeToggle';
import { usePosition } from '~hooks/usePosition';
import { usePrevious } from '~hooks/usePrevious';

const Sticky = styled.div`
  width: 100%;
  height: var(--header-height);
  padding: 16px;

  background-color: var(--header-background);

  position: fixed;
  top: calc(var(--header-height) * -1);
  left: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  box-shadow:
    var(--header-shadow-offset-x)
    var(--header-shadow-offset-y)
    var(--header-shadow-blur)
    var(--header-shadow-spread)
    rgba(var(--header-shadow-color));

  transition: transform var(--transition-default-timing, 450ms);
`;

const Container = styled.header`
  --header-background: var(--background-primary, #ffffff);
  --header-shadow-color: var(--shadow-color-rgba, 0, 0, 0, 0.25);
  --header-shadow-offset-x: 0px;
  --header-shadow-offset-y: 3px;
  --header-shadow-spread: 1px;
  --header-shadow-blur: 5px;

  width: 100%;
  height: var(--header-height);

  position: relative;
  z-index: 20;

  transition: transform var(--transition-default-timing, 450ms);

  &.static ${Sticky} {
    position: static;
  }

  &.sticky ${Sticky} {
    z-index: 20;
    transform: translateY(100%);
  }
`;

const Header: FunctionComponent = () => {
  const headerRef = useRef(null);

  const [, offsetY] = usePosition(headerRef);
  const previousOffsetY = usePrevious<number>(offsetY) || 0;

  const isRendered = typeof document !== 'undefined' && typeof window !== 'undefined';

  const screenHeight = isRendered
    ? Math.max(document.documentElement.clientHeight, window.innerHeight, 0)
    : 0;

  const isInsidePresentationArea = offsetY <= screenHeight - 200;
  const isBelowPresentationArea = offsetY > screenHeight;
  const isScrollingToTop = offsetY <= previousOffsetY;

  const classNames = classnames({
    sticky: isBelowPresentationArea && isScrollingToTop,
    static: isInsidePresentationArea || !isRendered,
  });

  return (
    <Container ref={headerRef} className={classNames} data-testid="header">
      <Sticky>
        <Link to="/">
          <Logo />
        </Link>
        <ThemeToggle />
      </Sticky>
    </Container>
  );
};

export default Header;
