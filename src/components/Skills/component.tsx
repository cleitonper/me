import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FaPencilRuler, FaServer, FaHammer } from 'react-icons/fa';

const Skill = styled.div`
  --border-opacity: ${({ theme }) => theme.name === 'light' ? 0.15 : 1};

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-color: rgba(var(--background-secondary-rgb), var(--border-opacity, 0.15));
  background-color: var(--background-primary);
  min-height: calc(100vh - var(--header-height));
  padding: 32px 16px;

  .icon {
    font-size: 28px;
    margin-bottom: 28px;
  }
`;

const Container = styled.section`
  padding: 32px 16px;
  background-color: var(--background-primary);
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;

  ${Skill} {
    @media (max-width: 960px) {
      width: 100%;
      :not(:last-child) {
        border-bottom-width: 0px;
      }
      :first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        margin-top: -200px;
      }
      :last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }

    @media (min-width: 961px) {
      width: calc(100% / 3);
      box-shadow: 0px 4px 6px -4px rgba(var(--shadow-color-rgba));
      margin-top: -200px;
      position: relative;
      :not(:last-child) {
        border-right-width: 0px;
        ::after {
          content: '';
          display: block;
          background: transparent;
          box-shadow: 0px 6px 6px -4px rgba(var(--shadow-color-rgba));
          position: absolute;
          bottom: 0px;
          right: -10px;
          width: 20px;
          height: 12px;
        }
      }
      :first-child {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      }
      :last-child {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }

`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 18px;
`;

const Text = styled.p`
  font-size: 18px;
  max-width: 360px;
  text-align: center;
  line-height: 1.45em;
  margin-bottom: 48px;
`;

const Subtitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 18px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  font-size: 18px;
  text-align: center;
  margin-bottom: 8px;
`;

const Skills: FunctionComponent = () => (
  <Container>
    <Skill>
      <FaPencilRuler className="icon" />
      <Title>Frontend</Title>
      <Text>
        Gosto de trabalhar com Design Clean,
        com a arquitetura JAMStack e com desenvolvimento
        baseado em componentes.
      </Text>
      <Subtitle>
        Ferramentas
      </Subtitle>
      <List>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>Vue</ListItem>
        <ListItem>React</ListItem>
      </List>
    </Skill>
    <Skill>
      <FaServer className="icon" />
      <Title>Backend</Title>
      <Text>
        Em uma aplicação dividada em responsabilidades,
        o back-end deve ter o papel de gerenciamento de
        dados e regras de negócio.
      </Text>
      <Subtitle>
        Ferramentas
      </Subtitle>
      <List>
        <ListItem>Node</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>Nest</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>MongoDB</ListItem>
      </List>
    </Skill>
    <Skill>
      <FaHammer className="icon" />
      <Title>Produtividade</Title>
      <Text>
        Algumas ferramentas que considero importantes no
        desenvolvimento de uma aplicação, seja frontend ou backend.
      </Text>
      <Subtitle>
        Ferramentas
      </Subtitle>
      <List>
        <ListItem>Terminal Linux</ListItem>
        <ListItem>Visual Studio Code</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>npm / yarn</ListItem>
        <ListItem>Git</ListItem>
      </List>
    </Skill>
  </Container>
);

export default Skills;
