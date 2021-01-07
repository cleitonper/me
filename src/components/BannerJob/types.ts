import { HTMLAttributes } from "react";
import { Tag } from '~components/Tag/types';
import { GatsbyImage } from '~types/GatsbyImage';

export interface Job {
  name?: string;
  link: string;
  image: GatsbyImage;
  description: string;
  tags: Tag[];
}
export interface Props extends HTMLAttributes<HTMLElement>, Job {
  className?: string;
}
