import { FluidObject, FixedObject } from 'gatsby-image';


export type GatsbyFluidImage = FluidObject | FluidObject[];
export type GatsbyFixedImage = FixedObject | FixedObject[];

export type GatsbyImage<Fluid = GatsbyFluidImage, Fixed = GatsbyFixedImage> = {
  readonly extension?: string;
  readonly publicURL?: string;
  readonly childImageSharp?: {
    readonly fluid?: Fluid;
    readonly fixed?: Fixed;
  };
}
