import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export interface Network {
  order: number;
  title: string;
  link: string;
  icon: {
    pack: IconPrefix;
    name: IconName;
  };
}

export interface Props {
  networks: Network[];
}
