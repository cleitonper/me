export interface FrontMatterQuery<T> {
  allFile: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: T;
      };
    }[];
  };
}
