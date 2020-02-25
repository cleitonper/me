import { Post } from '~components/PostList/types';

export interface PostsQuery {
  data: {
    allFile: {
      nodes: {
        childMarkdownRemark: {
          frontmatter: Post;
          fields: { slug: string };
        };
      }[];
    };
  };
}
