import React from 'react';
import { render } from '@testing-library/react';
import { ResponsiveImage } from '.';


describe('Component: ResponsiveImage', () => {
  describe('Type: Any', () => {
    it('should not render when there is not both desktop and mobile images', () => {
      const { container } = render(<ResponsiveImage />);
      expect(container.children).toHaveLength(0);
    });
  });

  describe('Type: Fluid Image', () => {
    it('should render when there is both desktop and mobile image', () => {
      const alt = 'Image alt';
      const title = 'Image title';
      const image = {
        desktop_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: '/test/image.webp',
              srcSet: '/test/image.webp 1024w, /test/image.webp 1920w',
              sizes: '(min-width: 1024px) 100vw, 1024px',
            }
          }
        },
        mobile_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: '/test/image__mobile.webp',
              srcSet: '/test/image.webp 360w, /test/image.webp 480w',
              sizes: '(max-width: 1023px) 100vw, 1023px',
            }
          }
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} title={title} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('alt', alt);
      expect(renderedImage).toHaveAttribute('title', title);
      expect(renderedImage).toHaveAttribute('src', image.desktop_image.childImageSharp.fluid.src);
      expect(renderedImage).toHaveAttribute('sizes', image.desktop_image.childImageSharp.fluid.sizes);
      expect(renderedImage).toHaveAttribute('srcset', image.desktop_image.childImageSharp.fluid.srcSet);
      expect(renderedImage).toHaveStyle('object-fit: cover; object-position: center');
    });

    it('should render when there is only desktop image', () => {
      const alt = 'Image alt';
      const image = {
        desktop_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: '/test/image.webp',
              srcSet: '/test/image__small.webp 1024w, /test/image__large.webp 1920w',
              sizes: '(min-width: 1024px) 100vw, 1920px',
            }
          }
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('src', image.desktop_image.childImageSharp.fluid.src);
    });

    it('should render when there is only mobile image', () => {
      const alt = 'Image alt';
      const image = {
        mobile_image: {
          childImageSharp: {
            fluid: {
              aspectRatio: 1,
              src: '/test/image.webp',
              srcSet: '/test/image__small.webp 360w, /test/image__large.webp 1023w',
              sizes: '(max-width: 1023px) 100vw, 1023px',
            }
          }
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('src', image.mobile_image.childImageSharp.fluid.src);
    });
  });

  describe('Type: Public URL', () => {
    it('should render when there is both desktop and mobile image', () => {
      const alt = 'Image alt';
      const title = 'Image title';
      const image = {
        desktop_image: {
          extension: 'gif',
          publicURL: '/test/image.gif'
        },
        mobile_image: {
          extension: 'gif',
          src: '/test/image__mobile.webp'
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} title={title} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('alt', alt);
      expect(renderedImage).toHaveAttribute('title', title);
      expect(renderedImage).toHaveAttribute('src', image.desktop_image.publicURL);
      expect(renderedImage).toHaveAttribute('sizes', `
        (min-width: 960px) 960px,
        (max-width: 959px) 959px
      `);
      expect(renderedImage).toHaveAttribute('srcset', `
        /test/image.gif 960w,
        /test/image.gif 959w
      `);
      expect(renderedImage).toHaveStyle({
        objectFit: 'cover',
        objectPosition: 'center'
      });
    });

    it('should render when there is only desktop image', () => {
      const alt = 'Image alt';
      const image = {
        desktop_image: {
          extension: 'gif',
          publicURL: '/test/image.gif'
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('src', image.desktop_image.publicURL);
    });

    it('should render when there is only mobile image', () => {
      const alt = 'Image alt';
      const image = {
        mobile_image: {
          extension: 'gif',
          publicURL: '/test/image__mobile.gif'
        }
      };

      const { getByAltText } = render(<ResponsiveImage image={image} alt={alt} />);

      const renderedImage = getByAltText(alt);

      expect(renderedImage).toHaveAttribute('src', image.mobile_image.publicURL);
    });
  });
});
