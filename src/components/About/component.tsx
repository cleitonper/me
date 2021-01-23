import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  color: var(--foreground-secondary);
  background-color: var(--background-secondary);
  min-height: calc(100vh - var(--header-height));
  padding: 32px var(--page-side-gap) 200px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;
`;

const Text = styled.p`
  max-width: 960px;
  letter-spacing: 0.085em;
  line-height: 1.45em;
  text-align: center;
  font-size: 18px;
`;

const About: FunctionComponent<Props> = ({ title, content }) => (
  <Container data-testid="about">
    <Title>{title}</Title>
    <Text>{content}</Text>
  </Container>
);

export default About;
