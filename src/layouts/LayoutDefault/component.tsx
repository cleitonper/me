import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useGlobalRemarkForm } from 'gatsby-tinacms-remark';
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

import { socialFormOptions } from '~config/tina/forms';

const query = graphql`
query FooterQuery {
  markdownRemark(fileRelativePath: {glob: "**/social.md"}) {
    frontmatter {
      social {
        title
        link
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
}
`;

const LayoutDefault: FunctionComponent = ({ children }) => {
  const data = useStaticQuery<Query>(query);
  const [_networks] = useGlobalRemarkForm(data.markdownRemark, socialFormOptions);

  const networks = _networks?.frontmatter.social;

  return (
    <Theme>
      <SEO />
      <Header />
      {children}
      {networks && <Footer networks={networks} />}
    </Theme>
  );
};

export default LayoutDefault;
