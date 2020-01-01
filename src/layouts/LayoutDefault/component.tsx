import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';
import { Theme } from '~components/Theme';
import { SEO } from '~components/SEO';
import '~assets/css/reset.css';
import '~assets/css/variables.css';
import '~assets/css/fonts.css';
import '~assets/css/global.css';
import '~assets/js/libs/fontawesome';

import { Query } from './types';

const query = graphql`
query FooterQuery {
  allFile(filter: {sourceInstanceName: {eq: "social"}} sort: {fields: childMarkdownRemark___frontmatter___order, order: ASC}) {
    nodes {
      childMarkdownRemark {
        frontmatter {
          title
          link
          icon {
            name
            pack
          }
        }
      }
    }
  }
}
`;

const LayoutDefault: FunctionComponent = ({ children }) => {
  const data = useStaticQuery<Query>(query);
  const networks = data.allFile.nodes.map((node) => node.childMarkdownRemark.frontmatter);

  return (
    <Theme>
      <SEO />
      <Header />
      {children}
      <Footer networks={networks} />
    </Theme>
  );
};

export default LayoutDefault;
