import { ResponsiveImage } from '~types/ResponsiveImage';


export interface ResponsiveImageAttributes {
  readonly src: string;
  readonly sizes: string;
  readonly srcSet: string;
  readonly aspectRatio: number;
}

export interface Props {
  readonly alt?: string;
  readonly title?: string;
  readonly className?: string;
  readonly objectFit?: string;
  readonly objectPosition?: string;
  readonly image?: ResponsiveImage;
}
