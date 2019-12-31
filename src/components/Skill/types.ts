import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export interface Props {
  className?: string;
  title: string;
  description: string;
  tools: string[];
  icon: {
    pack: IconPrefix;
    name: IconName;
  };
}
