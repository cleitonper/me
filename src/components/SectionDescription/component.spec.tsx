import React from 'react';
import { render } from '@testing-library/react';
import { SectionDescription } from '.';


describe('Component: SectionDescription', () => {
  it('should render with no errors', () => {
    const description = 'Description';
    const { getByText } = render(<SectionDescription>{description}</SectionDescription>);
    const renderedDescription = getByText(description);
    expect(renderedDescription).toHaveTextContent(description);
  });
});
