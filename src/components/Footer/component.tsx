import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  FaGithub,
  FaGitlab,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const Container = styled.footer`
  --footer-background: var(--background-primary, #ffffff);
  --footer-shadow-color: var(--shadow-color-rgba, 0, 0, 0, 0.25);
  --footer-shadow-offset-x: 0px;
  --footer-shadow-offset-y: -3px;
  --footer-shadow-spread: 1px;
  --footer-shadow-blur: 5px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 16px;
  background-color: var(--background-secondary);
  box-shadow:
    var(--footer-shadow-offset-x)
    var(--footer-shadow-offset-y)
    var(--footer-shadow-blur)
    var(--footer-shadow-spread)
    rgba(var(--footer-shadow-color));
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
  font-size: 32px;
  height: 60px;
  width: 60px;

  :hover {
    border-color: var(--background-accent-tertiary);
    color: var(--background-accent-tertiary);
  }

  :not(:last-child) {
    margin-right: 24px;
  }
`;

const Footer: FunctionComponent = () => (
  <Container>
    <FooterLink href="javascript:void" title="Github" aria-label="Github">
      <FaGithub />
    </FooterLink>
    <FooterLink href="javascript:void" title="Gitlab" aria-label="Gitlab">
      <FaGitlab />
    </FooterLink>
    <FooterLink href="javascript:void" title="Whatsapp" aria-label="Whatsapp">
      <FaWhatsapp />
    </FooterLink>
    <FooterLink href="javascript:void" title="E-mail" aria-label="E-mail">
      <FaEnvelope />
    </FooterLink>
  </Container>
);

export default Footer;
