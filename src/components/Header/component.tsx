import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ThemeToggle } from '~components/ThemeToggle';
import { Logo } from '~components/Logo';

const Container = styled.header`
  --header-background: var(--background-primary, #ffffff);
  --header-shadow-color: var(--shadow-color-rgba, 0, 0, 0, 0.25);
  --header-shadow-offset-x: 0px;
  --header-shadow-offset-y: 3px;
  --header-shadow-spread: 1px;
  --header-shadow-blur: 5px;

  width: 100%;
  height: var(--header-height);
  padding: 16px;
  background-color: var(--header-background);
  box-shadow:
    var(--header-shadow-offset-x)
    var(--header-shadow-offset-y)
    var(--header-shadow-blur)
    var(--header-shadow-spread)
    rgba(var(--header-shadow-color));

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 20;

  transition: all var(--transition-default-timing, 450ms);
`;

const Header: FunctionComponent = () => (
  <Container>
    <Logo />
    <ThemeToggle />
  </Container>
);

export default Header;
