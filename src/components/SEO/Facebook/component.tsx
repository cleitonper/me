import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Props } from './types';

const Facebook: FunctionComponent<Props> = ({
  url,
  name,
  title,
  description,
  pageType,
  imageAlt,
  image,
}) => (
  <Helmet>
    <meta property="og:url" content={url} />
    <meta property="og:title" content={`${name} · ${title}`} />
    <meta property="og:site_name" content={name} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={imageAlt} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:type" content={pageType} />
  </Helmet>
);

export default Facebook;
