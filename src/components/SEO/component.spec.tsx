import React from 'react';
import Helmet from 'react-helmet';
import { render } from '@testing-library/react';
import { SEO } from '.';
import { Props } from './types';

const metadata = {
  siteName: 'Cleiton',
  title: 'Cleiton · Desenvolvedor Web',
  description:
    'Site de um desenvolvedor javascript, ' +
    'entuasiasta de novas tecnologias do mundo de desenvolvimento web ' +
    'e fã de destribuições Linux.',
  banner: '/banner/default.png',
  bannerAlt:
    'Logo do Site. A letra C na cor branca ' +
    'por cima de um quadradro preto com cantos arredondados.',
  siteUrl: 'http://localhost:8000',
  twitter: '@cleitonsper',
};

jest.mock('gatsby', () => {
  const siteMetadata = {
    name: 'Cleiton',
    title: 'Desenvolvedor Web',
    titleTemplate: "Cleiton · %s",
    description:
      'Site de um desenvolvedor javascript, ' +
      'entuasiasta de novas tecnologias do mundo de desenvolvimento web ' +
      'e fã de destribuições Linux.',
    banner: '/banner/default.png',
    bannerAlt:
      'Logo do Site. A letra C na cor branca ' +
      'por cima de um quadradro preto com cantos arredondados.',
    siteUrl: 'http://localhost:8000',
    twitter: '@cleitonsper',
  };

  return {
    graphql: jest.fn(),
    useStaticQuery: jest.fn().mockReturnValue({ site: { siteMetadata } }),
  };
});

interface MetaTag {
  name: string;
  property: string;
  content: string;
}

interface SiteMetadata {
  title: string;
  description: string;
  metaTags: MetaTag[];
}


describe('Component: SEO', () => {
  it('should apply default seo tags', () => {
    render(<SEO />);
    const helmet = Helmet.peek() as unknown as SiteMetadata;
    expect(helmet.title).toBe(metadata.title);
    expect(helmet.metaTags).toContainEqual({ name: 'description', content: metadata.description });
    expect(helmet.metaTags).toContainEqual({ name: 'image', content: `${metadata.siteUrl}${metadata.banner}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:card', content: 'summary_large_image' });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:creator', content: `${metadata.twitter}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:title', content: `${metadata.title}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:description', content: `${metadata.description}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:image', content: `${metadata.siteUrl}${metadata.banner}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:image:alt', content: `${metadata.bannerAlt}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:url', content: `${metadata.siteUrl}/` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:title', content: `${metadata.title}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:description', content: `${metadata.description}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:site_name', content: `${metadata.siteName}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image', content: `${metadata.siteUrl}${metadata.banner}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:alt', content: `${metadata.bannerAlt}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:width', content: '1200' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:height', content: '630' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:type', content: 'image/png' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:type', content: 'website' });
  });

  it('should apply defined seo tags', () => {
    const seo: Props = {
      title: 'Unit Testing with Jest',
      description: 'Learn how to write unit tests with jest.',
      pathname: '/unit-testing-with-jest',
      pageType: 'article',
      banner: '/articles/jest.png',
      bannerAlt: 'Jest Logo',
    };
    render(<SEO {...seo} />);
    const helmet = Helmet.peek() as unknown as SiteMetadata;
    expect(helmet.title).toBe(`${metadata.siteName} · ${seo.title}`);
    expect(helmet.metaTags).toContainEqual({ name: 'description', content: seo.description });
    expect(helmet.metaTags).toContainEqual({ name: 'image', content: `${metadata.siteUrl}${seo.banner}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:card', content: 'summary_large_image' });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:creator', content: `${metadata.twitter}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:title', content: `${metadata.siteName} · ${seo.title}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:description', content: `${seo.description}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:image', content: `${metadata.siteUrl}${seo.banner}` });
    expect(helmet.metaTags).toContainEqual({ name: 'twitter:image:alt', content: `${seo.bannerAlt}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:url', content: `${metadata.siteUrl}${seo.pathname}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:title', content: `${metadata.siteName} · ${seo.title}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:description', content: `${seo.description}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:site_name', content: `${metadata.siteName}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image', content: `${metadata.siteUrl}${seo.banner}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:alt', content: `${seo.bannerAlt}` });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:width', content: '1200' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:height', content: '630' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:image:type', content: 'image/png' });
    expect(helmet.metaTags).toContainEqual({ property: 'og:type', content: `${seo.pageType}` });
  });
});
