import { FluidObject, FixedObject } from 'gatsby-image';
import { GatsbyImage } from './GatsbyImage';

export interface ResponsiveImage<Fluid = FluidObject, Fixed = FixedObject> {
  readonly desktop_image?: GatsbyImage<Fluid, Fixed>;
  readonly mobile_image?: GatsbyImage<Fluid, Fixed>;
}
