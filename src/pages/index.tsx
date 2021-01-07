import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { useLocalRemarkForm } from 'gatsby-tinacms-remark';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { PostList } from '~components/PostList';
import { SectionTitle } from '~components/SectionTitle';
import { SectionDescription } from '~components/SectionDescription';
import { Button } from '~components/Button';
import { RecentWork } from '~components/RecentWork';
import { HomeQuery } from "~src/types/HomeQuery";

import {
  presentationFormOptions,
  skillsFormOptions,
  jobsFormOptions,
} from '~config/tina/forms';
export interface Props {
  data: HomeQuery;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
  const [_presentation] = useLocalRemarkForm(data.presentation, presentationFormOptions);
  const [_skills] = useLocalRemarkForm(data.skills, skillsFormOptions);
  const [_jobs] = useLocalRemarkForm(data.jobs, jobsFormOptions);

  const skills = _skills?.frontmatter.skills;
  const jobs = _jobs?.frontmatter.jobs;

  const posts = data.posts.nodes.map((node) => ({
    link: `/blog${node.childMarkdownRemark.fields.slug}`,
    ...node.childMarkdownRemark.frontmatter
  }));

  return (
    <>
      <Presentation />

      {_presentation && <About title={_presentation.frontmatter.title} content={_presentation.rawMarkdownBody} />}

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
    </>
  );
};

export const query = graphql`
query {
  presentation: markdownRemark (fileRelativePath:{ glob: "**/presentation.md"}) {
    frontmatter {
      title
    }
    rawFrontmatter
    rawMarkdownBody
    fileRelativePath
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
    rawFrontmatter
    rawMarkdownBody
    fileRelativePath
  }
  jobs: markdownRemark(fileRelativePath: {glob: "**/jobs.md"}) {
    frontmatter {
      jobs {
        description
        image
        link
        tags {
          background
          foreground
          name
        }
      }
    }
    rawFrontmatter
    rawMarkdownBody
    fileRelativePath
  }
  posts: allFile(filter: {sourceInstanceName: {eq: "blog"}}, limit: 3, sort: {fields: birthTime, order: ASC}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          date(formatString: "DD [de] MMMM", locale: "pt-br")
          title
          subtitle
          image {
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
