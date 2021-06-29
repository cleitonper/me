import React from 'react';
import { render } from '@testing-library/react';
import { Post } from '~components/PostList/types';
import { Card } from '.';


describe('Component: Card', () => {
  it('should render with no errors', () => {
    const title = 'Title';
    const subtitle = 'Subtitle';
    const link = '/hello-world';
    const date = '02/10/2021';
    const linkLabel = 'Ir para o artigo';

    const desktop_image = {
      childImageSharp: {
        fluid: {
          aspectRatio: 1,
          src: '/test/image.webp',
          srcSet: '',
          sizes: '',
        }
      }
    };

    const props: Post = { title, subtitle, link, date, desktop_image };

    const { getByText, getByAltText } = render(<Card {...props} />);

    const renderedImage = getByAltText(title);
    const renderedTitle = getByText(title);
    const renderedSubtitle = getByText(subtitle);
    const renderedDate = getByText(date);
    const renderedLink = getByText(linkLabel);

    expect(renderedImage).toHaveAttribute('src', desktop_image.childImageSharp.fluid.src);
    expect(renderedImage).toHaveAttribute('alt', title);
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedSubtitle).toHaveTextContent(subtitle);
    expect(renderedDate).toHaveTextContent(date);
    expect(renderedLink).toHaveAttribute('href', link);
  });
});
