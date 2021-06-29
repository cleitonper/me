import { graphql } from 'gatsby';
import { usePlugin, Form } from 'tinacms';
import { InlineForm } from 'react-tinacms-inline';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import React, { FunctionComponent } from 'react';
import { BlogPostQuery, PostQuery } from '~types/BlogPostQuery';
import { SEO } from '~components/SEO';
import { PostImage } from '~components/PostImage';
import { PostTitle } from '~components/PostTitle';
import { PostSubtitle } from '~components/PostSubtitle';
import { PostMeta } from '~components/PostMeta';
import { PostContent, PostContentEditor } from '~components/PostContent';
import { postFormOptions } from '~config/tina/forms';


export interface Props {
  data: BlogPostQuery;
}


const BlogPost: FunctionComponent<Props> = ({ data }) => {
  const [, form] = useRemarkForm(data.markdownRemark, postFormOptions) as [PostQuery, Form];

  usePlugin(form);

  const { markdownRemark } = data;
  const { timeToRead, html } = markdownRemark;
  const { desktop_image, mobile_image, title, subtitle, date } = markdownRemark.frontmatter;
  const image = { desktop_image, mobile_image };

  return (
    <>
      <SEO
        title={title}
        description={subtitle}
        banner={desktop_image?.childImageSharp?.fluid?.src}
        pageType="article"
      />
      <PostImage
        alt={title}
        title={title}
        image={image}
      />
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
        desktop_image {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 1920, srcSetBreakpoints: [1024, 1200, 1440, 1920]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobile_image {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 1920, srcSetBreakpoints: [360, 480, 768, 1023]) {
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
