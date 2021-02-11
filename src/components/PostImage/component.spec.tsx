import React from 'react';
import { render } from '@testing-library/react';
import { PostImage } from '.';


describe('Component: PostImage', () => {
  it('should render with no errors', () => {
    const alt = 'Test image';
    const image = {
      aspectRatio: 1,
      src: '/test/image.webp',
      srcSet: '',
      sizes: '',
    };

    const { getByAltText } = render(<PostImage image={image} alt={alt} />);

    const renderedImage = getByAltText(alt);

    expect(renderedImage).toHaveAttribute('alt', alt);
    expect(renderedImage).toHaveAttribute('src', image.src);
  });
});
