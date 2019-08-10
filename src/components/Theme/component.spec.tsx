import React from 'react';
import { ThemeContext } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import { Theme } from '.';

describe('Component: Theme', () => {
  it('should use light as default theme', () => {
    render(<Theme />);
    expect(Helmet.peek().htmlAttributes).toHaveProperty('data-theme', 'light');
  });

  it('should change theme to dark', () => {
    const { getByText } = render(
      <Theme>
        <ThemeContext.Consumer>
          {(theme) => <button onClick={theme.toggle}>toggle</button>}
        </ThemeContext.Consumer>
      </Theme>
    );
    fireEvent.click(getByText('toggle'));
    expect(Helmet.peek().htmlAttributes).toHaveProperty('data-theme', 'dark');
  });

  it('should change theme to light', () => {
    const { getByText } = render(
      <Theme>
        <ThemeContext.Consumer>
          {(theme) => <button onClick={theme.toggle}>toggle</button>}
        </ThemeContext.Consumer>
      </Theme>
    );
    fireEvent.click(getByText('toggle'));
    fireEvent.click(getByText('toggle'));
    expect(Helmet.peek().htmlAttributes).toHaveProperty('data-theme', 'light');
  });
});
