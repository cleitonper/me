import { useCMS, useFormScreenPlugin, Form } from 'tinacms';
import React, { FunctionComponent, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { Network } from '~components/Footer/types';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';
import { Theme } from '~components/Theme';
import { SEO } from '~components/SEO';
import '~assets/css/libs/prism.css';
import '~assets/css/reset.css';
import '~assets/css/variables.css';
import '~assets/css/global.css';
import '~assets/js/libs/fontawesome';

import { socialFormOptions } from '~config/tina/forms';


export interface Query {
  markdownRemark: {
    frontmatter: {
      social: Network[];
    };
    rawFrontmatter: string;
    rawMarkdownBody: string;
    fileRelativePath: string;
  };
}


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
    ...TinaRemark
  }
}
`;


const LayoutDefault: FunctionComponent = ({ children }) => {
  const cms = useCMS();
  const data = useStaticQuery<Query>(query);
  const [_networks, form] = useRemarkForm(data.markdownRemark, socialFormOptions) as [any, Form];

  useFormScreenPlugin(form);

  const networks = _networks?.frontmatter.social;

  useEffect(() => {
    if (cms.enabled) {
      import('react-tinacms-date').then(({ DateFieldPlugin }) => {
        cms.plugins.add(DateFieldPlugin);
      });
    }
  }, [cms.enabled, cms.plugins]);

  return (
    <Theme>
      <SEO />
      <Header />
      <div style={{ minHeight: 'calc(100vh + var(--header-height, 70px))' }}>
        {children}
      </div>
      {networks && <Footer networks={networks} />}
    </Theme>
  );
};


export default LayoutDefault;
