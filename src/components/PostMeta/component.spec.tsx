import React from 'react';
import { render } from '@testing-library/react';
import { PostMeta } from '.';


describe('Component: PostMeta', () => {
  it('should render with no errors', () => {
    const metadata = '02/10/2021 - 01 min to read';
    const { getByText } = render(<PostMeta>{metadata}</PostMeta>);
    const renderedMetadata = getByText(metadata);
    expect(renderedMetadata).toHaveTextContent(metadata);
  });
});
