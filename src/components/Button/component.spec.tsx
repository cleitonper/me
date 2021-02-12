import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';


jest.mock('gatsby', () => require('~config/jest/mock/gatsby'));


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

  it('should have default values for the rel and target attributes', () => {
    const href = 'https://me.me';
    const { getByTestId } = render(<Button href={href}>Hello</Button>);
    expect(getByTestId('button')).toHaveAttribute('href', href);
    expect(getByTestId('button')).toHaveAttribute('rel', 'noopener noreferrer nofollow');
    expect(getByTestId('button')).toHaveAttribute('target', '_blank');
  });

  it('should not have default values for the rel and target attributes', () => {
    const { getByTestId } = render(<Button>Hello</Button>);
    expect(getByTestId('button')).not.toHaveAttribute('href');
    expect(getByTestId('button')).not.toHaveAttribute('rel', 'noopener noreferrer nofollow');
    expect(getByTestId('button')).not.toHaveAttribute('target', '_blank');
  });

  it('should use the rel and target attributes', () => {
    const rel = 'bookmark';
    const target = '_top';
    const href = 'https://me.me';
    const { getByTestId } = render(<Button href={href} rel={rel} target={target}>Hello</Button>);
    expect(getByTestId('button')).toHaveAttribute('href', href);
    expect(getByTestId('button')).toHaveAttribute('rel', rel);
    expect(getByTestId('button')).toHaveAttribute('target', target);
    expect(getByTestId('button')).not.toHaveAttribute('rel', 'noopener noreferrer nofollow');
    expect(getByTestId('button')).not.toHaveAttribute('target', '_blank');
  });
});
