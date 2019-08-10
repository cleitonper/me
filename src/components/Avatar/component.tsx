import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Avatar: FunctionComponent<Props> = (props) => (
  <img {...props} />
);

const StyledAvatar = styled(Avatar)`
  --avatar-size: 60px;
  --image-position: center;
  --image-placement: cover;


  border-radius: 50%;
  filter: grayscale(100%);
  width: var(--avatar-size);
  height: var(--avatar-size);
  object-position: var(--image-position);
  object-fit: var(--image-placement);

  box-shadow: 2px 2px 1px rgba(var(--shadow-color-rgba));
`;

export default StyledAvatar;
