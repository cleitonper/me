import { graphql } from 'gatsby';
import { usePlugin, Form } from 'tinacms';
import React, { FunctionComponent } from 'react';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { Helmet } from 'react-helmet';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { PostList } from '~components/PostList';
import { SectionTitle } from '~components/SectionTitle';
import { SectionDescription } from '~components/SectionDescription';
import { Button } from '~components/Button';
import { RecentWork } from '~components/RecentWork';

import {
  HomeQuery,
  PresentationQuery,
  SkillsQuery,
  JobsQuery,
} from "~src/types/HomeQuery";

import {
  presentationFormOptions,
  skillsFormOptions,
  jobsFormOptions,
} from '~config/tina/forms';


export interface Props {
  data: HomeQuery;
}


const HomePage: FunctionComponent<Props> = ({ data }) => {
  const [, presentationForm] = useRemarkForm(data.presentation, presentationFormOptions) as [PresentationQuery, Form];
  const [, skillsForm] = useRemarkForm(data.skills, skillsFormOptions) as [SkillsQuery, Form];
  const [, jobsForm] = useRemarkForm(data.jobs, jobsFormOptions) as [JobsQuery, Form];

  usePlugin(presentationForm);
  usePlugin(skillsForm);
  usePlugin(jobsForm);

  const presentation = data.presentation;
  const skills = data.skills?.frontmatter.skills;
  const jobs = data.jobs?.frontmatter.jobs;

  const posts = data.posts.nodes.map((node) => ({
    ...node.childMarkdownRemark.frontmatter,
    link: `/blog${node.childMarkdownRemark.fields.slug}`,
  }));

  return (
    <>
      <Presentation />

      {presentation && <About title={presentation.frontmatter.title} content={presentation.rawMarkdownBody} />}

      {skills && <Skills skills={skills} />}

      <SectionTitle>
        Trabalhos Recentes
      </SectionTitle>
      <SectionDescription>
        Confira aqui alguns projetos que
        desenvolvi recentemente.
      </SectionDescription>
      {jobs && <RecentWork jobs={jobs} />}

      <SectionTitle>
        Blog
      </SectionTitle>
      <SectionDescription>
        Artigos sobre javascript e desenvolvimento web.
      </SectionDescription>
      <PostList posts={posts} />

      <div style={{ textAlign: 'center', transform: 'translateY(-120px)' }}>
        <Button href="/blog" size="medium">Ver tudo</Button>
      </div>

      <Helmet>
        <meta name="google-site-verification" content="uql-bXe5hRbsf55MhH5KWuccg4_q321XBST_KoaaKV4" />
      </Helmet>
    </>
  );
};


export const query = graphql`
query {
  presentation: markdownRemark (fileRelativePath:{ glob: "**/presentation.md"}) {
    frontmatter {
      title
    }
    ...TinaRemark
  }
  skills: markdownRemark(fileRelativePath: {glob: "**/skills.md"}) {
    frontmatter {
      skills {
        title
        description
        tools {
          name
        }
        icon {
          name
          pack
        }
      }
    }
    ...TinaRemark
  }
  jobs: markdownRemark(fileRelativePath: {glob: "**/jobs.md"}) {
    frontmatter {
      jobs {
        description
        demo
        source
        image {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 1024, srcSetBreakpoints: [360, 480, 768, 1024]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags {
          background
          foreground
          name
        }
      }
    }
    ...TinaRemark
  }
  posts: allFile(filter: {sourceInstanceName: {eq: "blog"}}, limit: 3, sort: {fields: childMarkdownRemark___frontmatter___date, order: DESC}) {
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


export default HomePage;
