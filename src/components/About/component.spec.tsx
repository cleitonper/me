import React from 'react';
import { render } from '@testing-library/react';
import { About } from '.';

describe('Component: About', () => {
  it('should render with no errors', () => {
    const { container } = render(<About />);
    expect(container).toBeDefined();
  });
});
