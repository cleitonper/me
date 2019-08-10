import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '.';

describe('Component: Footer', () => {
  it('should render with no errors', () => {
    const { container } = render(<Footer />);
    expect(container).toBeDefined();
  });
});
