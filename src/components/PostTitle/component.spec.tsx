import React from 'react';
import { render } from '@testing-library/react';
import { PostTitle } from '.';


describe('Component: PostTitle', () => {
  it('should render with no errors', () => {
    const title = 'Title';
    const { getByText } = render(<PostTitle>{title}</PostTitle>);
    const renderedTitle = getByText(title);
    expect(renderedTitle).toHaveTextContent(title);
  });
});
