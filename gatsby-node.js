const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes('/blog/')) {
    const slug = createFilePath({ node, getNode, basePath: `src/content/blog` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: {fileRelativePath: {glob: "**/blog/**"}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.fields.slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: { slug: node.fields.slug },
    });
  });
};
