import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  color: var(--foreground-secondary);
  background-color: var(--background-secondary);
  min-height: calc(100vh - var(--header-height));
  padding: 32px 16px 200px;
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

const About: FunctionComponent = () => (
  <Container>
    <Title>Apresentação</Title>
    <Text>
      Sempre fui um grande entusiasta da área de tecnologia.
      Tive meus primeiros contatos com programação durante o
      Ensino Médio e desde então busco sempre estar atualizado
      com o que há de mais novo na área de desenvolvimento.
      Acredito que um bom produto de software é aquele que
      atende as nescessidades de seus usuários de maneira
      simples e intuitiva, e que tenha um código fonte que
      possa ser compreendido não somente por máquinas,
      mas também por outros desenvolvedores.
    </Text>
  </Container>
);

export default About;
