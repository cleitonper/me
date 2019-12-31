import { Props as Job } from '~components/BannerJob/types';

export interface HomeQuery {
  presentation: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: {
          title: string;
        };
        rawMarkdownBody: string;
      };
    }[];
  };
  jobs: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: Job;
      };
    }[];
  };
}
