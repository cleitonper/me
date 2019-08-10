import { ImgHTMLAttributes } from "react";

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
