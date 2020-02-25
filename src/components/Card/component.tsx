import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Container = styled('div')`
  box-shadow: 0 2px 4px rgba(0,0,0,0.13);

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.35);
  }

  article {
    padding: 8px 12px 32px;
  }

  span {
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 6px;
    display: inline-block;
    color: var(--foreground-primary-dark);
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.25em;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.45em;
    margin-bottom: 48px;
  }

  a {
    font-size: 1.15rem;
    text-decoration: none;
    color: var(--foreground-highlight);
  }
`;

const Card: FunctionComponent<Props> = ({
  className,
  title,
  subtitle,
  image,
  date,
  link,
}) => (
  <Container className={ className }>
    <img src={image} />
    <article>
      <span>{ date }</span>
      <h3>{ title }</h3>
      <p>{subtitle}</p>

      <a href={link}>
        Ir para o artigo
      </a>
    </article>
  </Container>
);

export default styled(Card)``;
