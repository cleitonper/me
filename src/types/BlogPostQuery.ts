export interface BlogPostQuery {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        subtitle: string;
      };
      timeToRead: string;
      html: string;
    };
  };
}
