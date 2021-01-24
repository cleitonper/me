import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Props } from './types';


const Container = styled.footer`
  --footer-background: var(--background-primary, #ffffff);
  --footer-shadow-color: var(--shadow-color-rgba, 0, 0, 0, 0.25);
  --footer-shadow-offset-x: 0px;
  --footer-shadow-offset-y: -3px;
  --footer-shadow-spread: 1px;
  --footer-shadow-blur: 5px;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  background-color: var(--background-secondary);
  box-shadow:
    var(--footer-shadow-offset-x)
    var(--footer-shadow-offset-y)
    var(--footer-shadow-blur)
    var(--footer-shadow-spread)
    rgba(var(--footer-shadow-color));

    @media (max-width: 429px) {
      padding: 30px var(--page-side-gap);
      justify-content: flex-start;
    }

    @media (min-width: 430px) {
      padding: 60px var(--page-side-gap);
      justify-content: center;
    }
`;

const FooterLink = styled.a`
  transition-property: all;
  transition-duration: var(--transition-default-timing);
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 50%;
  border-style: solid;
  border-color: var(--foreground-secondary);
  color: var(--foreground-secondary);

  :hover {
    border-color: var(--background-accent-tertiary);
    color: var(--background-accent-tertiary);
  }

  @media (max-width: 359px) {
    font-size: 10vw;
    height: calc((100vw / 3) - (var(--page-side-gap) * 2 / 3) - 40px);
    width: calc((100vw / 3) - (var(--page-side-gap) * 2 / 3) - 40px);
    margin-bottom: 40px;

    :nth-child(-n+3) {
      margin-top: 30px;
    }

    :not(:nth-child(3n)) {
      margin-right: 60px;
    }
  }

  @media (min-width: 360px) and (max-width: 419px) {
    font-size: 6.50vw;
    height: calc((100vw / 5) - (var(--page-side-gap) * 2 / 5) - 20px);
    width: calc((100vw / 5) - (var(--page-side-gap) * 2 / 5) - 20px);
    margin-bottom: 25px;

    :nth-child(-n+5) {
      margin-top: 25px;
    }

    :not(:nth-child(5n)) {
      margin-right: 25px;
    }
  }

  @media (min-width: 430px) {
    font-size: 32px;
    height: 60px;
    width: 60px;

    :not(:last-child) {
      margin-right: 24px;
    }
}
`;

const Footer: FunctionComponent<Props> = ({ networks }) => (
  <Container data-testid="footer" id="main-footer">
    {networks
      .map((network, index) => (
        <FooterLink
          data-testid="footer-link"
          key={`network-${index}`}
          href={network.link}
          target="__blank"
          title={network.title}
          aria-label={network.title}
        >
          <FontAwesomeIcon icon={[network.icon.pack, network.icon.name]} />
        </FooterLink>
      ))
    }
  </Container>
);

export default Footer;
