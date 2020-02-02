import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export interface Props
  extends
  Partial<ButtonHTMLAttributes<HTMLElement>>,
  Partial<AnchorHTMLAttributes<HTMLElement>> {
  type?: "reset" | "button" | "submit" | undefined;
  size?: 'small' | 'medium' | 'big';
  fill?: 'clear' | 'default';
  href?: string;
}
