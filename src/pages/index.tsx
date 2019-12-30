import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { RecentWork } from '~components/RecentWork';
import { FrontMatterQuery } from "~types/FrontMatterQuery";
import { Props as Job } from '~components/BannerJob/types';

export interface Props {
  data: FrontMatterQuery<Job>;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
  const jobs = data.jobs.nodes.map((node) => node.childMarkdownRemark.frontmatter);
  return (
    <LayoutDefault>
      <Presentation />
      <About />
      <Skills />
      <RecentWork jobs={jobs} />
    </LayoutDefault>
  );
};

export const query = graphql`
query {
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
