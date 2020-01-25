import React from 'react';
import { render } from '@testing-library/react';
import { Props } from './types';
import { Skills } from '.';

jest.mock('@fortawesome/react-fontawesome', () => ({ FontAwesomeIcon: () => true }));

describe('Component: Skills', () => {
  it('should render skills', () => {
    const props: Props = {
      skills: [
        { title: 'My Title 1', description: 'My Description 1', icon: { pack: 'fas', name: 'server' }, tools: ['1', '2'] },
        { title: 'My Title 2', description: 'My Description 2', icon: { pack: 'fas', name: 'server' }, tools: ['a', 'b'] },
      ],
    };
    const { getByTestId } = render(<Skills {...props} />);
    const element = getByTestId('skills');
    expect(element.children).toHaveLength(props.skills.length);
  });
});
