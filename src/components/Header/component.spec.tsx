import React from 'react';
import { render } from '@testing-library/react';
import { Theme } from '~components/Theme';
import { Header } from '.';

describe('Component: Header', () => {
  it('should render with no errors', () => {
    const { container } = render(
      <Theme>
        <Header />
      </Theme>
    );
    expect(container).toBeDefined();
  });
});
