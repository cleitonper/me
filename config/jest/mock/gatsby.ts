/* eslint-disable */
import { createElement } from 'react';
const gatsby = jest.requireActual('gatsby');


module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  navigate: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
  Link: jest.fn().mockImplementation(
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      createElement('a', {
        ...rest,
        href: to,
      })
  ),
};
