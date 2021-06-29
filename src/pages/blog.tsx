import { graphql } from 'gatsby';
import { withPlugin } from 'tinacms';
import React, { FunctionComponent } from 'react';
import { SEO } from '~components/SEO';
import { PageTitle } from '~components/PageTitle';
import { PageSubtitle } from '~components/PageSubtitle';
import { PostList } from '~components/PostList';
import { PostsQuery } from '~types/PostsQuery';
import { CreatePostPlugin } from '~config/tina/forms';


const BlogPage: FunctionComponent<PostsQuery> = ({ data }) => {
  const posts = data.allFile.nodes.map((node) => ({
    ...node.childMarkdownRemark.frontmatter,
    link: `/blog${node.childMarkdownRemark.fields.slug}`,
  }));

  const title = 'Blog'
  const subtitle = '' +
    'Tutoriais sobre o funcionamento do javascript, framweorks, ' +
    'bibliotecas e dicas de ferramentas para se trabalhar com a ' +
    'linguagem da web.';

  return (
    <>
      <SEO
        title={title}
        description={subtitle}
      />
      <PageTitle>
        Blog
      </PageTitle>
      <PageSubtitle>
        {subtitle}
      </PageSubtitle>
      <PostList posts={posts} />
    </>
  );
};


export const query = graphql`
query PostsQuery {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          title
          subtitle
          desktop_image {
            childImageSharp {
              fluid(jpegQuality: 100, maxWidth: 1024, srcSetBreakpoints: [360, 480, 768, 1024]) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`;


export default withPlugin(BlogPage, CreatePostPlugin);
