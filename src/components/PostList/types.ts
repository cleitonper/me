export interface Post {
  date: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface Props {
  posts: Post[];
}
