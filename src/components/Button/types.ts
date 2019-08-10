import { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLElement> {
  fill?: 'clear' | 'default';
}
