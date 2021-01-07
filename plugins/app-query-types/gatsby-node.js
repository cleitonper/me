exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      banner: String!
      bannerAlt: String!
      titleTemplate: String!
      title: String!
      name: String!
      description: String!
      siteUrl: String!
      twitter: String!
    }


    type Tag {
      background: String
      foreground: String
      name: String
    }

    type Icon {
      name: String
      pack: String
    }

    type Tool {
      name: String
    }

    type Job {
      name: String
      link: String
      image: String
      description: String
      tags: [Tag]
    }

    type Skill {
      icon: Icon
      title: String
      description: String
      tools: [Tool]
    }

    type Social {
      title: String
      link: String
      icon: Icon
    }

    type Fields {
      slug: String
      category_slug: String
    }

    type Frontmatter {
      title: String
      subtitle: String
      image: String
      date: Date @dateformat
      jobs: [Job]
      skills: [Skill]
      social: [Social]
    }

    type MarkdownRemark implements Node {
      fileRelativePath: String!
      rawMarkdownBody: String!
      rawFrontmatter: String!
      frontmatter: Frontmatter
      fields: Fields
    }
  `;


  createTypes(typeDefs);
};
