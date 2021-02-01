import { GatsbyImage } from '~types/GatsbyImage';
import { FluidObject } from 'gatsby-image';


export interface Post {
  date: string;
  title: string;
  subtitle: string;
  image: GatsbyImage<FluidObject>;
  link: string;
}

export interface Props {
  posts: Post[];
}
