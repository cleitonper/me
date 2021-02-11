import React from 'react';
import { render } from '@testing-library/react';
import { PageTitle } from '.';


describe('Component: PageTitle', () => {
  it('should render with no errors', () => {
    const title = 'Title';
    const { getByText } = render(<PageTitle>{title}</PageTitle>);
    const renderedTitle = getByText(title);
    expect(renderedTitle).toHaveTextContent(title);
  });
});
