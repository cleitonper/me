import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Props } from './types';
import { BannerJob } from '.';

const props: Props = {
  link: '#',
  image: 'fake.png',
  description: 'My Fake Job',
  tags: [
    { name: 'html', background: 'red', foreground: 'white' },
    { name: 'css', background: 'blue', foreground: 'white' },
    { name: 'javascript', background: 'yellow', foreground: 'white' },
  ],
};

describe('Component: BannerJob', () => {
  it('should render the job image', () => {
    const { getByAltText } = render(<BannerJob {...props} />);
    expect(getByAltText(props.description)).toHaveAttribute('src', props.image);
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

  it('should show job details when click in its banner', () => {
    const { getByAltText } = render(<BannerJob {...props} />);
    const Banner = getByAltText(props.description);

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
});
