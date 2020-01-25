import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { Props } from './types';

const Container = styled.div`
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

const Skill: FunctionComponent<Props> = ({
  className,
  title,
  description,
  tools,
  icon,
}) => (
  <Container data-testid="skill" className={className}>
    <FontAwesomeIcon icon={[icon.pack, icon.name]} className="icon" />
    <Title>{title}</Title>
    <Text>{description}</Text>
    <Subtitle>
      Ferramentas
    </Subtitle>
    <List>
      {tools.map((tool, index) =>
        <ListItem key={`tool-${index}`}>{tool.name}</ListItem>
      )}
    </List>
  </Container>
);

export default styled(Skill)``;
