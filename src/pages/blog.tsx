import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { PageTitle } from '~components/PageTitle';
import { PageSubtitle } from '~components/PageSubtitle';
import { PostList } from '~components/PostList';
import { PostsQuery } from '~types/PostsQuery';

const BlogPage: FunctionComponent<PostsQuery> = ({ data }) => {
  const posts = data.allFile.nodes.map((node) => ({
    link: `/blog/${node.childMarkdownRemark.fields.slug}`,
    ...node.childMarkdownRemark.frontmatter
  }));

  return (
    <LayoutDefault>
      <PageTitle>
        Blog
      </PageTitle>
      <PageSubtitle>
        Tutoriais sobre o funcionamento do javascript, framweorks,
        bibliotecas e dicas de ferramentas para se trabalhar com a
        linguagem da web.
      </PageSubtitle>
      <PostList posts={posts} />
    </LayoutDefault>
  );
};

export const query = graphql`
query PostsQuery {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          date(formatString: "DD [de] MMMM", locale: "pt-br")
          title
          subtitle
          image
        }
        fields {
          slug
        }
      }
    }
  }
}
`;

export default BlogPage;
