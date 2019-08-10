import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '.';

describe('Component: Avatar', () => {
  it('should render with no errors', () => {
    const altText = 'Avatar';
    const src = 'avatar.jpg';
    const { getByAltText } = render(<Avatar src={src} alt={altText} />);
    expect(getByAltText(altText)).toHaveAttribute('src', src);
  });
});
