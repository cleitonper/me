import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Props } from './types';


const PostImage: FunctionComponent<Props> = ({ className, image, alt }) => (
  <Img
    alt={alt}
    fluid={image}
    imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
    className={className}
  />
);


const StyledPostImage = styled(PostImage)`
  width: 100%;
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1439px) {
    max-height: 60vh;
    min-height: 300px;
  }

  @media (min-width: 1440px) {
    max-height: 50vh;
    min-height: 450px;
  }
`;


export default StyledPostImage;
