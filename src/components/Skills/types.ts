import { Props as Skill } from '~components/Skill/types';

type Skills = (Skill & { order: number })[];

export interface Props {
  className?: string;
  skills: Skills;
}
