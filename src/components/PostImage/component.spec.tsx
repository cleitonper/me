import React from 'react';
import { render } from '@testing-library/react';
import { ResponsiveImage } from '~types/ResponsiveImage';
import { PostImage } from '.';


describe('Component: PostImage', () => {
  it('should render with no errors', () => {
    const alt = 'Test image';
    const image: ResponsiveImage = {
      desktop_image: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1,
            src: '/test/image.webp',
            srcSet: '',
            sizes: '',
          }
        }
      }
    };

    const { getByAltText } = render(<PostImage image={image} alt={alt} />);

    const renderedImage = getByAltText(alt);

    expect(renderedImage).toHaveAttribute('alt', alt);
    expect(renderedImage).toHaveAttribute('src', image.desktop_image?.childImageSharp?.fluid?.src);
  });

  it('should not render when there is not an image', () => {
    const { container } = render(<PostImage />);
    expect(container.children).toHaveLength(0);
  });
});
