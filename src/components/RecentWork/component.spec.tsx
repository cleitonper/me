import React from 'react';
import { render } from '@testing-library/react';
import { Job } from '~components/BannerJob/types';
import { RecentWork } from '.';

describe('Component: RecentWork', () => {
  it('should render a list of jobs', () => {
    const image = {
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
    };

    const jobs: Job[] = [
      { image: image, link: '#', description: 'Job 01', tags: [{ background: 'a', foreground: 'b', name: 'c' }] },
      { image: image, link: '#', description: 'Job 02', tags: [{ background: 'a', foreground: 'b', name: 'c' }] },
    ];

    const { getAllByTestId } = render(<RecentWork jobs={jobs} />);
    expect(getAllByTestId('job')).toHaveLength(jobs.length);
  });
});
