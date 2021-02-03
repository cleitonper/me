import { MarkdownRemark } from '~types/MarkdownRemark';
import { Post } from '~components/PostList/types';


export type PostQuery = MarkdownRemark<Post>;

export interface BlogPostQuery {
  markdownRemark: PostQuery;
}
