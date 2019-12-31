import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { LayoutDefault } from '~layouts/LayoutDefault';
import { Presentation } from '~components/Presentation';
import { About } from '~components/About';
import { Skills } from '~components/Skills';
import { RecentWork } from '~components/RecentWork';
import { HomeQuery } from "~src/types/HomeQuery";

export interface Props {
  data: HomeQuery;
}

const HomePage: FunctionComponent<Props> = ({ data }) => {
  const jobs = data.jobs.nodes.map((node) => node.childMarkdownRemark.frontmatter);
  const presentation = data.presentation.nodes.map(
    (node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      content: node.childMarkdownRemark.rawMarkdownBody,
    })
  )[0];

  return (
    <LayoutDefault>
      <Presentation />
      <About title={presentation.title} content={presentation.content} />
      <Skills />
      <RecentWork jobs={jobs} />
    </LayoutDefault>
  );
};

export const query = graphql`
query {
  presentation: allFile(filter: {sourceInstanceName: {eq: "presentation"}}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
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
