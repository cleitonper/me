import React from 'react';
import { render } from '@testing-library/react';
import { Mouse } from '.';

describe('Component: Mouse', () => {
  it('should render with no errors', () => {
    const { container } = render(<Mouse />);
    expect(container).toBeDefined();
  });
});
