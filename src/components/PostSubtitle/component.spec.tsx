import React from 'react';
import { render } from '@testing-library/react';
import { PostSubtitle } from '.';


describe('Component: PostSubtitle', () => {
  it('should render with no errors', () => {
    const subtitle = 'Subtitle';
    const { getByText } = render(<PostSubtitle>{subtitle}</PostSubtitle>);
    const renderedSubtitle = getByText(subtitle);
    expect(renderedSubtitle).toHaveTextContent(subtitle);
  });
});
