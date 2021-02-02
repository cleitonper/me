export interface MarkdownRemark<T = unknown> {
  frontmatter: T;
  rawFrontmatter: string;
  rawMarkdownBody: string;
  fileRelativePath: string;
  timeToRead: string;
  html: string;
}
