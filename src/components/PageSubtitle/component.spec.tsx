import React from 'react';
import { render } from '@testing-library/react';
import { PageSubtitle } from '.';


describe('Component: PageSubtitle', () => {
  it('should render with no errors', () => {
    const subtitle = 'Subtitle';
    const { getByText } = render(<PageSubtitle>{subtitle}</PageSubtitle>);
    const renderedSubtitle = getByText(subtitle);
    expect(renderedSubtitle).toHaveTextContent(subtitle);
  });
});
