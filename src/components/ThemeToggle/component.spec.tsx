import React from 'react';
import { render } from '@testing-library/react';
import { Theme } from '~components/Theme';
import { ThemeToggle } from '.';

describe('Component: ThemeToggle', () => {
  it('should render with no errors', () => {
    const { container } = render(
      <Theme>
        <ThemeToggle />
      </Theme>
    );
    expect(container).toBeDefined();
  });
});
