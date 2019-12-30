export interface FrontMatterQuery<T> {
  jobs: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: T;
      };
    }[];
  };
}
