export interface Tag {
  name?: string;
  background: string;
  foreground: string;
}

export interface Props extends Tag {
  className?: string;
}
