import React from 'react';
import { render } from '@testing-library/react';
import { Job } from '~components/BannerJob/types';
import { RecentWork } from '.';

describe('Component: RecentWork', () => {
  it('should render a list of jobs', () => {
    const jobs: Job[] = [
      { image: 'job-01', description: 'Job 01', tags: [{ background: 'a', foreground: 'b', name: 'c' }] },
      { image: 'job-02', description: 'Job 02', tags: [{ background: 'a', foreground: 'b', name: 'c' }] },
    ];
    const { getAllByTestId } = render(<RecentWork jobs={jobs} />);
    expect(getAllByTestId('job')).toHaveLength(jobs.length);
  });
});
