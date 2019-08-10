import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Props } from './types';

const Twitter: FunctionComponent<Props> = ({
  title,
  description,
  imageAlt,
  twitter,
  image,
  name,
}) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitter} />
    <meta name="twitter:title" content={`${name} · ${title}`} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={imageAlt} />
  </Helmet>
);

export default Twitter;
