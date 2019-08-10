import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '.';

describe('Component: Tag', () => {
  it('should render with no errors', () => {
    const { container } = render(<Tag background="red" foreground="blue" />);
    expect(container).toBeDefined();
  });
});
