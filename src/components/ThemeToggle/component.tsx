import React, { FunctionComponent, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import { Props } from './types';

const ThemeToggle: FunctionComponent<Props> = ({ className }) => {
  const theme = useContext(ThemeContext);

  return (
    <button className={`${className} ${theme.name}`} onClick={theme.toggle}>
      <IoIosSunny className="sun" />
      <IoMdMoon className="moon" />
    </button>
  );
};

const StyledThemeToggle = styled(ThemeToggle)`
  overflow: hidden;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  border: none;
  height: 36px;
  width: 36px;

  transition: background-color 450ms;

  :hover {
    background-color: rgba(var(--foreground-primary-rgb), 0.05);
  }

  .sun { font-size: 24px; }
  .moon { font-size: 18px; }

  .sun,
  .moon {
    position: absolute;
    color: var(--foreground-primary);
  }

  &.dark .sun,
  &.light .moon {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition:
      transform
        var(--transition-default-timing, 450ms)
        calc(var(--transition-default-timing, 450ms) + 150ms)
        var(--ease-out-quad, linear),
      top
        var(--transition-default-timing, 450ms)
        calc(var(--transition-default-timing, 450ms) + 150ms)
        var(--ease-out-quad, linear),
      color
        var(--transition-default-timing, 450ms);
  }

  &.dark .moon,
  &.light .sun {
    top: 100%;
    left: 50%;
    transform: translate3d(-50%, 0%, 0);
    transition:
      transform var(--transition-default-timing, 450ms) var(--ease-in-quad, linear),
      top var(--transition-default-timing, 450ms) var(--ease-in-quad, linear),
      color var(--transition-default-timing, 450ms);
  }
`;

export default StyledThemeToggle;
