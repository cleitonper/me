import React from 'react';
import { render } from '@testing-library/react';
import { Theme } from '~components/Theme';
import { Header } from '.';
import * as position from '~hooks/usePosition';
import * as previous from '~hooks/usePrevious';

describe('Component: Header', () => {
  it('should render with no errors', () => {
    const { getByTestId } = render(
      <Theme>
        <Header />
      </Theme>
    );
    expect(getByTestId('header')).toBeDefined();
  });

  describe('inside presentation area', () => {
    it('should be static', () => {
      jest.spyOn(position, 'usePosition').mockImplementation(() => [0, 300]);
      jest.spyOn(document.documentElement, 'scrollHeight', 'get').mockImplementation(() => 600);
      const { getByTestId } = render(
        <Theme>
          <Header />
        </Theme>
      );
      expect(getByTestId('header')).toHaveClass('static');
    });
  });

  describe('below presetation area', () => {
    beforeEach(() => {
      jest.spyOn(document.documentElement, 'scrollHeight', 'get').mockImplementation(() => 600);
    });

    it('should not be sticky when scrolling to bottom', () => {
      jest.spyOn(position, 'usePosition').mockImplementation(() => [0, 1750]);
      jest.spyOn(previous, 'usePrevious').mockImplementation(() => 1600);
      const { getByTestId } = render(
        <Theme>
          <Header />
        </Theme>
      );
      expect(getByTestId('header')).not.toHaveClass('sticky');
    });

    it('should be sticky when scrolling to top', () => {
      jest.spyOn(position, 'usePosition').mockImplementation(() => [0, 1600]);
      jest.spyOn(previous, 'usePrevious').mockImplementation(() => 1750);
      const { getByTestId } = render(
        <Theme>
          <Header />
        </Theme>
      );
      expect(getByTestId('header')).toHaveClass('sticky');
    });
  });
});
