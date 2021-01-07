import { GatsbyImage } from '~types/GatsbyImage';


export interface Post {
  date: string;
  title: string;
  subtitle: string;
  image: GatsbyImage;
  link: string;
}

export interface Props {
  posts: Post[];
}
