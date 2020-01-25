import { HTMLAttributes } from "react";
import { Tag } from '~components/Tag/types';

export interface Job {
  name?: string;
  image: string;
  description: string;
  tags: Tag[];
}
export interface Props extends HTMLAttributes<HTMLElement>, Job {
  className?: string;
}
