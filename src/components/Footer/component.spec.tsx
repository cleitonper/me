import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '.';
import { Network } from './types';

jest.mock('@fortawesome/react-fontawesome', () => ({ FontAwesomeIcon: () => true }));

describe('Component: Footer', () => {
  let networks: Network[];

  beforeAll(() => {
    networks = [
      { order: 1, title: 'Social 1', link: 'https://me.br', icon: { name: 'dev', pack: 'far' } },
      { order: 2, title: 'Social 2', link: 'https://me.me', icon: { name: '500px', pack: 'fad' } },
    ];
  });

  it('should render all the links', () => {
    const { getAllByTestId } = render(<Footer networks={networks} />);
    const links = getAllByTestId('footer-link');
    expect(links).toHaveLength(networks.length);
  });
});
