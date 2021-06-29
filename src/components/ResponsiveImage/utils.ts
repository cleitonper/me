import { ResponsiveImageAttributes } from './types';

export const createResponsiveImage = (src = '', limit: 'min' | 'max', size: number): ResponsiveImageAttributes => ({
  src,
  aspectRatio: 1,
  sizes: `(${limit}-width: ${size}px) ${size}px`,
  srcSet: `${src} ${size}w`,
});
