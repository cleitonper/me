import React, { Dispatch } from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as SystemTheme from '~hooks/useSystemTheme';
import { ThemeToggle } from '~src/components/ThemeToggle';
import ThemeService from './service';
import { Theme } from '.';


describe('Component: Theme', () => {
  const theme = '';
  const setTheme = jest.fn();
  const useTheme = (): [unknown, Dispatch<unknown>] => [theme, setTheme];

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useTheme);
  });


  describe('System: prefer dark mode', () => {
    beforeEach(() => {
      jest.spyOn(SystemTheme, 'useSystemTheme').mockImplementation(() => 'dark');
    });

    it('should initialize with app preferred mode by default', () => {
      const preferedMode = 'unicorn';
      const expectedMode = preferedMode;
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(setTheme).toBeCalledWith(expectedMode);
    });

    it('should initialize with dark mode when there is not an app preferred mode', () => {
      const preferedMode = null;
      const expectedMode = 'dark';
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(setTheme).toBeCalledWith(expectedMode);
    });
  });


  describe('System: prefer light mode', () => {
    beforeEach(() => {
      jest.spyOn(SystemTheme, 'useSystemTheme').mockImplementation(() => 'light');
    });

    it('should initialize with app preferred mode by default', () => {
      const preferedMode = 'rainbow';
      const expectedMode = preferedMode;
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(setTheme).toBeCalledWith(expectedMode);
    });

    it('should initialize with light mode when there is not an app preferred mode', () => {
      const preferedMode = null;
      const expectedMode = 'light';
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(setTheme).toBeCalledWith(expectedMode);
    });
  });


  describe('System: no preferred mode', () => {
    beforeEach(() => {
      jest.spyOn(SystemTheme, 'useSystemTheme').mockImplementation(() => undefined);
    });

    it('should initialize with app preferred mode by default', () => {
      const preferedMode = 'tech';
      const expectedMode = preferedMode;
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(setTheme).toBeCalledWith(expectedMode);
    });

    it('should initialize with light mode when there is not an app preferred mode', () => {
      const preferedMode = null;
      const expectedMode = 'light';
      const useState = jest.spyOn(React, 'useState');
      jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(preferedMode);

      render(<Theme />);

      expect(useState).toBeCalledWith(expectedMode);
    });
  });


  describe('User action: change theme', () => {
    it('should change the theme when a user click in the toggle button', () => {
      const { getByTestId } = render(
        <Theme>
          <ThemeToggle />
        </Theme>
      );

      const button = getByTestId('toggle-theme');
      const toggle = jest.spyOn(ThemeService, 'toggle');

      fireEvent.click(button);

      expect(toggle).toBeCalled();
    });
  });
});
