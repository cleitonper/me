import { graphql } from 'gatsby';
import { withPlugin } from 'tinacms';
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';
import React, { FunctionComponent } from 'react';
import { PageTitle } from '~components/PageTitle';
import { PageSubtitle } from '~components/PageSubtitle';
import { PostList } from '~components/PostList';
import { PostsQuery } from '~types/PostsQuery';
import { postCreatorOptions } from '~config/tina/forms';

const BlogPage: FunctionComponent<PostsQuery> = ({ data }) => {
  const posts = data.allFile.nodes.map((node) => ({
    link: `/blog${node.childMarkdownRemark.fields.slug}`,
    ...node.childMarkdownRemark.frontmatter
  }));

  return (
    <>
      <PageTitle>
        Blog
      </PageTitle>
      <PageSubtitle>
        Tutoriais sobre o funcionamento do javascript, framweorks,
        bibliotecas e dicas de ferramentas para se trabalhar com a
        linguagem da web.
      </PageSubtitle>
      <PostList posts={posts} />
    </>
  );
};

const CreatePostPlugin = new RemarkCreatorPlugin(postCreatorOptions);

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

export default withPlugin(BlogPage, CreatePostPlugin);
