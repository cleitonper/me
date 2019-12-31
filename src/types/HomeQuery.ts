import { Props as Job } from '~components/BannerJob/types';
import { Props as Skills } from '~components/Skills/types';

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
  skills: {
    nodes: {
      childMarkdownRemark: {
        frontmatter: Skills;
      };
    }[];
  };
}
