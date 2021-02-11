import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '.';

describe('Component: Tag', () => {
  it('should render with no errors', () => {
    const name = 'javascript';
    const { getByText } = render(<Tag background="red" foreground="blue">{name}</Tag>);
    const renderedTag = getByText(name);
    expect(renderedTag).toHaveTextContent(name);
  });
});
