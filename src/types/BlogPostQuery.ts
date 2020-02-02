export interface BlogPostQuery {
  isEditing: boolean;
  setIsEditing: (callback: (isEditing: boolean) => boolean) => boolean;
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
