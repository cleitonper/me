import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '.';

describe('Component: Logo', () => {
  it('should render with no errors', () => {
    const { container } = render(<Logo />);
    expect(container).toBeDefined();
  });
});
