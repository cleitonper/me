import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Props } from './types';
import { Skill } from '~components/Skill';

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

const Skills: FunctionComponent<Props> = ({ skills }) => (
  <Container data-testid="skills">
    {skills
      .sort((first, second) => first.order - second.order)
      .map(({ title, description, tools, icon }, index) =>
        <Skill
          key={index}
          title={title}
          description={description}
          tools={tools}
          icon={icon}
        />
      )}
  </Container>
);

export default Skills;
