import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export interface Tool {
  name: string;
}
export interface Skill {
  title: string;
  description: string;
  tools: Tool[];
  icon: {
    pack: IconPrefix;
    name: IconName;
  };
}
export interface Props extends Skill {
  className?: string;
}
