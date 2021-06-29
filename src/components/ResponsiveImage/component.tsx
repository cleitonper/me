import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { createResponsiveImage } from './utils';
import { Props } from './types';


const ResponsiveImage: FunctionComponent<Props> = ({
  image,
  objectFit,
  objectPosition,
  className,
  title,
  alt,
}) => {
  if (!image?.desktop_image && !image?.mobile_image) return null;

  const imageClassName = image?.desktop_image && image?.mobile_image
    ? `${className} fluid-image`
    : `${className} fixed-image`;

  const isFluid = image?.desktop_image?.extension !== 'gif' && image?.mobile_image?.extension !== 'gif';

  const mobileImage = isFluid
    ? image?.mobile_image?.childImageSharp?.fluid
    : createResponsiveImage(image?.mobile_image?.publicURL || image?.desktop_image?.publicURL, 'max', 959);

  const desktopImage = isFluid
    ? image?.desktop_image?.childImageSharp?.fluid
    : createResponsiveImage(image?.desktop_image?.publicURL || image?.mobile_image?.publicURL, 'min', 960);

  const fluidImage = !isFluid
    ? null
    : (mobileImage && desktopImage)
      ? [desktopImage, { ...mobileImage, media: '(max-width: 959px)' }]
      : (mobileImage && !desktopImage)
        ? mobileImage
        : (!mobileImage && desktopImage)
          ? desktopImage
          : null;

  if (!fluidImage) return (
    <img
      className={`${imageClassName} image`}
      src={desktopImage?.src}
      srcSet={`
        ${desktopImage?.srcSet ? `${desktopImage.srcSet},` : ''}
        ${mobileImage?.srcSet ? `${mobileImage.srcSet}` : ''}
      `}
      sizes={`
        ${desktopImage?.sizes ? `${desktopImage.sizes},` : ''}
        ${mobileImage?.sizes ? `${mobileImage.sizes}` : ''}
      `}
    />
  );

  return (
    <Img
      alt={alt}
      title={title}
      className={imageClassName}
      imgStyle={{ objectFit, objectPosition }}
      fluid={fluidImage}
    />
  );
};


ResponsiveImage.defaultProps = {
  objectFit: 'cover',
  objectPosition: 'center',
};


/* eslint-disable @typescript-eslint/indent */
const StyledResponsiveImage = styled(ResponsiveImage)`
  &.image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  @media (max-width: 959px) {
    &.gatsby-image-wrapper > div:first-child {
      padding-bottom: ${(props) => {
        const aspectRatio =
          props.image?.mobile_image?.childImageSharp?.fluid?.aspectRatio
          || props.image?.desktop_image?.childImageSharp?.fluid?.aspectRatio;
        const padding = aspectRatio ? `${100/aspectRatio}% !important` : undefined;
        return padding;
      }};
    }
  }

  @media (min-width: 960px) {
    &.gatsby-image-wrapper > div {
      padding-bottom: ${(props) => {
        const aspectRatio = props.image?.desktop_image?.childImageSharp?.fluid?.aspectRatio
          || props.image?.mobile_image?.childImageSharp?.fluid?.aspectRatio;
        const padding = aspectRatio ? `${100/aspectRatio}% !important` : undefined;
        return padding;
      }};
    }
  }
`;
/* eslint-enable @typescript-eslint/indent */


export default React.memo(StyledResponsiveImage);
