import { Post } from '~components/PostList/types';


export interface BlogPostQuery {
  isEditing: boolean;
  setIsEditing: (callback: (isEditing: boolean) => boolean) => boolean;
  data: {
    markdownRemark: {
      frontmatter: Post;
      timeToRead: string;
      html: string;
    };
  };
}
