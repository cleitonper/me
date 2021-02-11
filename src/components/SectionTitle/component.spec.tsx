import React from 'react';
import { render } from '@testing-library/react';
import { SectionTitle } from '.';


describe('Component: SectionTitle', () => {
  it('should render with no errors', () => {
    const title = 'Title';
    const { getByText } = render(<SectionTitle>{title}</SectionTitle>);
    const renderedTitle = getByText(title);
    expect(renderedTitle).toHaveTextContent(title);
  });
});
