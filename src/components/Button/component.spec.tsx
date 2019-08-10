import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Component: Button', () => {
  it('should use default fill class', () => {
    const buttonText = 'Click';
    const { getByText } = render(<Button>{buttonText}</Button>);
    expect(getByText(buttonText)).toHaveClass('fill-default');
  });

  it('should use clear fill class', () => {
    const buttonText = 'Click';
    const { getByText } = render(<Button fill="clear">{buttonText}</Button>);
    expect(getByText(buttonText)).toHaveClass('fill-clear');
  });
});
