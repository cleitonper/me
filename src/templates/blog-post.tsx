import { graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';
import React, { FunctionComponent } from 'react';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { BlogPostQuery } from '~types/BlogPostQuery';
import { PostTitle } from '~components/PostTitle';
import { PostSubtitle } from '~components/PostSubtitle';
import { PostMeta } from '~components/PostMeta';
import { PostContent } from '~components/PostContent';
import { postFormOptions } from '~config/tina/forms';


const BlogPost: FunctionComponent<BlogPostQuery> = ({ data }) => {
  const { markdownRemark } = data;
  const { timeToRead, html } = markdownRemark;
  const { title, subtitle, date } = markdownRemark.frontmatter;

  return (
    <LayoutDefault>
      <PostTitle>
        {title}
      </PostTitle>
      <PostSubtitle>
        {subtitle}
      </PostSubtitle>
      <PostMeta>
        {date}・{timeToRead} min para ler
      </PostMeta>
      <PostContent dangerouslySetInnerHTML={{ __html: html }}></PostContent>
    </LayoutDefault>
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
      }
      ...TinaRemark
    }
  }
`;

export default remarkForm(BlogPost, postFormOptions);
