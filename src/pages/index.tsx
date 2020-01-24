import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { useLocalRemarkForm } from 'gatsby-tinacms-remark';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { RecentWork } from '~components/RecentWork';
import { HomeQuery } from "~src/types/HomeQuery";

import {
  skillsFormOptions,
  jobsFormOptions,
} from '~config/tina/forms';
export interface Props {
  data: HomeQuery;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
  const [presentation] = useLocalRemarkForm(data.presentation);
  const [_skills] = useLocalRemarkForm(data.skills, skillsFormOptions);
  const [_jobs] = useLocalRemarkForm(data.jobs, jobsFormOptions);

  const skills = _skills?.frontmatter.skills;
  const jobs = _jobs?.frontmatter.jobs;

  return (
    <LayoutDefault>
      <Presentation />
      {presentation && <About title={presentation.frontmatter.title} content={presentation.rawMarkdownBody} />}
      {skills && <Skills skills={skills} />}
      {jobs && <RecentWork jobs={jobs} />}
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
  jobs: markdownRemark(fileRelativePath: {glob: "**/jobs.md"}) {
    frontmatter {
      jobs {
        description
        image
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
}
`;

export default HomePage;
