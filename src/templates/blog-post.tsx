import { graphql } from 'gatsby';
import { inlineRemarkForm } from 'gatsby-tinacms-remark';
import { TinaField } from '@tinacms/form-builder';
import React, { FunctionComponent } from 'react';
import { BlogPostQuery } from '~types/BlogPostQuery';
import { PostTitle } from '~components/PostTitle';
import { PostSubtitle } from '~components/PostSubtitle';
import { PostMeta } from '~components/PostMeta';
import { Button } from '~components/Button';
import { PostContent, PostContentEditor } from '~components/PostContent';
import { postFormOptions } from '~config/tina/forms';


const BlogPost: FunctionComponent<BlogPostQuery> = ({ data, isEditing, setIsEditing }) => {
  const { markdownRemark } = data;
  const { timeToRead, html } = markdownRemark;
  const { title, subtitle, date } = markdownRemark.frontmatter;

  return (
    <>
      <PostTitle>
        {title}
      </PostTitle>
      <PostSubtitle>
        {subtitle}
      </PostSubtitle>
      <PostMeta>
        {date}・{timeToRead} min para ler
      </PostMeta>
      <TinaField name="rawMarkdownBody" Component={PostContentEditor}>
        <PostContent dangerouslySetInnerHTML={{ __html: html }}></PostContent>
      </TinaField>
      <div style={{ padding: '16px' }}>
        <Button onClick={() => setIsEditing(edting => !edting)}>
          {isEditing ? 'Preview' : 'Editar Página'}
        </Button>
      </div>
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
      }
      ...TinaRemark
    }
  }
`;

export default inlineRemarkForm(BlogPost, postFormOptions);
