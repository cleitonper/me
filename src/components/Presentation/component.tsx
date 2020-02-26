import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import me from '~assets/img/me.jpg';
import { Avatar } from '~components/Avatar';
import { Button } from '~components/Button';
import { Mouse } from '~components/Mouse';
import { Props } from './types';

const Presentation: FunctionComponent<Props> = ({ className }) => {
  const scrollToFooter = (): void => {
    if(typeof window === undefined || typeof document === undefined) return;
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  };

  return (
    <section className={className}>
      <Avatar src={me} alt="Eu" />
      <h1 className="name">Cleiton da Silva</h1>
      <span className="role">Desenvolvedor Javascript</span>
      <span className="location">Rio de Janeiro, RJ</span>
      <a
        className="job"
        target="_blank"
        rel="noopener noreferrer"
        href="https://dt3.com.br"
        title="Atualmente trabalhando na empresa DT3"
      >
        DT3
      </a>
      <Button onClick={scrollToFooter}>Contato</Button>
      <Mouse />
    </section>
  );
};

const StyledPresentation = styled(Presentation)`
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  padding: 32px 16px;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  background-color: var(--background-primary, #ffffff);
  transition: background-color var(--transition-default-timing);

  ${Avatar} {
    --avatar-size: 140px;
    margin-bottom: 48px;
  }

  .name {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .role {
    color: var(--foreground-primary-dark);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 12px;
  }

  .location {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .job {
    margin-bottom: 60px;
    text-decoration: none;
    color: var(--foreground-primary);
    transition: color 250ms;
    font-weight: 500;
    font-size: 16px;
  }

  .job:hover {
    color: var(--foreground-highlight);
  }

  ${Button} {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 60px;
    padding: 8px 34px;
  }
`;

export default StyledPresentation;
