import { Network } from '~components/Footer/types';

export interface Query {
  markdownRemark: {
    frontmatter: {
      social: Network[];
    };
  };
}
