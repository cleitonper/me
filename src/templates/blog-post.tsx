import { graphql } from 'gatsby';
import { usePlugin, Form } from 'tinacms';
import { InlineForm } from 'react-tinacms-inline';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import React, { FunctionComponent } from 'react';
import { BlogPostQuery } from '~types/BlogPostQuery';
import { PostImage } from '~components/PostImage';
import { PostTitle } from '~components/PostTitle';
import { PostSubtitle } from '~components/PostSubtitle';
import { PostMeta } from '~components/PostMeta';
import { PostContent, PostContentEditor } from '~components/PostContent';
import { postFormOptions } from '~config/tina/forms';


const BlogPost: FunctionComponent<BlogPostQuery> = ({ data }) => {
  const [, form] = useRemarkForm(data.markdownRemark, postFormOptions) as [any, Form];

  usePlugin(form);

  const { markdownRemark } = data;
  const { timeToRead, html } = markdownRemark;
  const { image, title, subtitle, date } = markdownRemark.frontmatter;

  return (
    <>
      <PostImage image={image.childImageSharp?.fluid} alt={title} />
      <PostTitle>
        {title}
      </PostTitle>
      <PostSubtitle>
        {subtitle}
      </PostSubtitle>
      <PostMeta>
        {date}・{timeToRead} min para ler
      </PostMeta>
      <InlineForm form={form}>
        <PostContentEditor name="rawMarkdownBody">
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostContentEditor>
      </InlineForm>
    </>
  );

};


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        subtitle
        date(formatString: "DD [de] MMM [de] YYYY", locale: "pt-br")
        image {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 1024, srcSetBreakpoints: [360, 480, 768, 1024]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      ...TinaRemark
    }
  }
`;


export default BlogPost;
