import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
      padding: 30px 16px;
      justify-content: flex-start;
    }

    @media (min-width: 430px) {
      padding: 60px 16px;
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

  @media (max-width: 429px) {
    font-size: 12vw;
    height: calc((100vw / 3) - (32px / 3) - 30px);
    width: calc((100vw / 3) - (32px / 3) - 30px);
    margin-bottom: 30px;

    :nth-child(-n+3) {
      margin-top: 30px;
    }

    :not(:nth-child(3n)) {
      margin-right: 45px;
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

const Footer: FunctionComponent = () => (
  <Container>
    <FooterLink href="javascript:void" title="Github" aria-label="Github">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </FooterLink>
    <FooterLink href="javascript:void" title="Gitlab" aria-label="Gitlab">
      <FontAwesomeIcon icon={['fab', 'gitlab']} />
    </FooterLink>
    <FooterLink href="javascript:void" title="Linkedin" aria-label="Linkedin">
      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
    </FooterLink>
    <FooterLink href="javascript:void" title="Whatsapp" aria-label="Whatsapp">
      <FontAwesomeIcon icon={['fab', 'whatsapp']} />
    </FooterLink>
    <FooterLink href="javascript:void" title="E-mail" aria-label="E-mail">
      <FontAwesomeIcon icon={['fas', 'envelope']} />
    </FooterLink>
  </Container>
);

export default Footer;
