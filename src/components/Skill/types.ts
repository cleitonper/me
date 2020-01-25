import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export interface Skill {
  title: string;
  description: string;
  tools: string[];
  icon: {
    pack: IconPrefix;
    name: IconName;
  };
}
export interface Props extends Skill {
  className?: string;
}
