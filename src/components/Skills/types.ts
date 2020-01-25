import { Skill } from '~components/Skill/types';

export type Skills = (Skill & { order: number })[];

export interface Props {
  className?: string;
  skills: Skills;
}
