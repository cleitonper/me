import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { useLocalRemarkForm } from 'gatsby-tinacms-remark';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { RecentWork } from '~components/RecentWork';
import { HomeQuery } from "~src/types/HomeQuery";

import { skillsFormOptions } from '~config/tina/forms';
export interface Props {
  data: HomeQuery;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
  const [presentation] = useLocalRemarkForm(data.presentation);
  const [_skills] = useLocalRemarkForm(data.skills, skillsFormOptions);
  const jobs = data.jobs.nodes.map((node) => node.childMarkdownRemark.frontmatter);

  const skills = _skills?.frontmatter.skills;

  return (
    <LayoutDefault>
      <Presentation />
      {presentation && <About title={presentation.frontmatter.title} content={presentation.rawMarkdownBody} />}
      {skills && <Skills skills={skills} />}
      <RecentWork jobs={jobs} />
    </LayoutDefault>
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
        order
        title
        description
        tools
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
  jobs: allFile(filter: {sourceInstanceName: {eq: "jobs"}}, sort: {order: DESC, fields: modifiedTime}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          description
          image
          tags {
            background
            foreground
            name
          }
        }
      }
    }
  }
}
`;

export default HomePage;
