import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BannerJob } from '.';

const props = {
  demo: '#',
  source: '#',
  description: 'My Fake Job',
  image: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        src: 'fake.jpg',
        srcSet:
          ` fake-480w.jpg 480w,
            fake-800w.jpg 800w`,
        sizes:
          `(max-width: 600px) 480px,
          800px`,
      }
    }
  },
  tags: [
    { name: 'html', background: 'red', foreground: 'white' },
    { name: 'css', background: 'blue', foreground: 'white' },
    { name: 'javascript', background: 'yellow', foreground: 'white' },
  ],
};

describe('Component: BannerJob', () => {
  it('should render the job image', () => {
    const { getByAltText } = render(<BannerJob {...props} />);
    expect(getByAltText(props.description)).toHaveAttribute('src', props.image.childImageSharp.fluid.src);
  });

  it('should render the job description', () => {
    const { getByText } = render(<BannerJob {...props} />);
    expect(getByText(props.description)).toBeDefined();
  });

  it('should render the tags of a job', () => {
    const { container } = render(<BannerJob {...props} />);
    const renderedTagList = container.querySelectorAll('footer span');
    expect(renderedTagList).toHaveLength(props.tags.length);
  });

  it('should not render the tags when there is not tags', () => {
    const { getByTestId } = render(<BannerJob image={props.image} />);
    const footer = getByTestId('footer');
    expect(footer.children).toHaveLength(0);
  });

  it('should show job details when click in its banner', () => {
    const { getByTestId } = render(<BannerJob {...props} />);
    const Banner = getByTestId('banner-button');

    fireEvent.click(Banner);

    expect(Banner).toHaveClass('is-open');
  });

  it('should show hide job details when click outside of the job', () => {
    const { container, getByAltText } = render(<BannerJob {...props} />);
    const Banner = getByAltText(props.description);

    fireEvent.click(Banner);
    fireEvent.click(container);

    expect(Banner).not.toHaveClass('is-open');
  });

  it('should not render when there is not an image', () => {
    const { container } = render(<BannerJob />);
    expect(container.children).toHaveLength(0);
  });
});
