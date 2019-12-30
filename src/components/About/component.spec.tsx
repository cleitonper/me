import React from 'react';
import { render } from '@testing-library/react';
import { About } from '.';

describe('Component: About', () => {
  it('should render title and content', () => {
    const title = 'My Title';
    const content = 'My Content';
    const { getByTestId } = render(<About title={title} content={content} />);
    const container = getByTestId('about');
    const renderedTitle = container.querySelector('h2');
    const renderedContent = container.querySelector('p');
    expect(renderedTitle).toHaveTextContent(title);
    expect(renderedContent).toHaveTextContent(content);
  });
});
