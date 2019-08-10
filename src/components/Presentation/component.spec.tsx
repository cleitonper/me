import React from 'react';
import { render } from '@testing-library/react';
import { Presentation } from '.';

describe('Component: Presentation', () => {
  it('should render with no errors', () => {
    const { container } = render(<Presentation />);
    expect(container).toBeDefined();
  });
});
