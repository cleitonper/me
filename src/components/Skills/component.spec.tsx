import React from 'react';
import { render } from '@testing-library/react';
import { Skills } from '.';

describe('Component: Skills', () => {
  it('should render with no errors', () => {
    const { container } = render(<Skills />);
    expect(container).toBeDefined();
  });
});
