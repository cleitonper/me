import React from 'react';
import { render } from '@testing-library/react';
import { PostContent } from '.';


describe('Component: PostContent', () => {
  it('should render with no errors', () => {
    const content = 'Content';
    const { getByText } = render(<PostContent>{content}</PostContent>);
    const renderedContent = getByText(content);
    expect(renderedContent).toHaveTextContent(content);
  });
});
