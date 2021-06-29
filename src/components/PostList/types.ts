import { GatsbyImage } from '~types/GatsbyImage';
import { FluidObject, FixedObject } from 'gatsby-image';


export interface Post {
  date?: string;
  title?: string;
  subtitle?: string;
  desktop_image?: GatsbyImage<FluidObject, FixedObject>;
  mobile_image?: GatsbyImage<FluidObject, FixedObject>;
  link?: string;
}

export interface Props {
  posts?: Post[];
}
