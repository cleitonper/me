import React from 'react';
import { render } from '@testing-library/react';
import { Skill } from '.';
import { Props } from './types';

jest.mock('@fortawesome/react-fontawesome', () => ({ FontAwesomeIcon: () => true }));

describe('Component: Skill', () => {
  it('should render with no errors', () => {
    const props: Props = {
      title: 'My Title',
      description: 'My Description',
      tools: ['1', '2'],
      icon: {
        pack: 'fas',
        name: 'hammer',
      },
    };
    const { getByTestId } = render(<Skill {...props} />);
    const element = getByTestId('skill');
    const renderedTitle = element.querySelector('h3');
    const renderedDescription = element.querySelector('p');
    const renderedTools = element.querySelectorAll('li');
    expect(renderedTitle).toHaveTextContent(props.title);
    expect(renderedDescription).toHaveTextContent(props.description);
    expect(renderedTools).toHaveLength(props.tools.length);
  });
});
