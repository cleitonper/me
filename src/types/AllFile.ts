export interface Fields {
  slug: string;
}

export interface AllFile<T = unknown, F = Fields> {
  nodes: {
    childMarkdownRemark: {
      frontmatter: T;
      fields: F;
    };
  }[];
}
