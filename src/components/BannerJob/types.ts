import { HTMLAttributes } from "react";

export interface Tag {
  name: string;
  background: string;
  foreground: string;
}

export interface Props extends HTMLAttributes<HTMLElement> {
  name?: string;
  image: string;
  description: string;
  className?: string;
  tags: Tag[];
}
