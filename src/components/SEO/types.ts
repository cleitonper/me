export interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  pageType?: 'website' | 'article';
  banner?: string;
  bannerAlt?: string;
}

interface SiteMetadata  {
  name: string;
  title: string;
  titleTemplate: string;
  description: string;
  siteUrl: string;
  banner: string;
  bannerAlt: string;
  twitter: string;
}

export interface Query {
  site: {
    siteMetadata: SiteMetadata;
  };
}
