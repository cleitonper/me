import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Props, Query } from './types';
import { Facebook } from './Facebook';
import { Twitter } from './Twitter';

const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        name
        title
        titleTemplate
        description
        twitter
        siteUrl
        banner
        bannerAlt
      }
    }
  }
`;

const SEO: FunctionComponent<Props> = ({
  title,
  description,
  pathname = '/',
  pageType = 'website',
  banner,
  bannerAlt,
}) => {
  const {
    site: {
      siteMetadata: {
        name,
        siteUrl,
        titleTemplate,
        title: defaultTitle,
        description: defaultDescription,
        banner: defaultBanner,
        bannerAlt: DefaultBannerAlt,
        twitter,
      },
    },
  } = useStaticQuery<Query>(query);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    imageAlt: bannerAlt || DefaultBannerAlt,
    url: `${siteUrl}${pathname}`,
    name,
  };

  const facebookProps = { ...seo, pageType };
  const twitterProps = { ...seo, twitter };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
      </Helmet>
      <Facebook {...facebookProps} />
      <Twitter {...twitterProps} />
    </>
  );
};

export default SEO;
