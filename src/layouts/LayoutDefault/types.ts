import { Network } from '~components/Footer/types';

export interface Query {
  allFile: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: Network;
      };
    }[];
  };
}
