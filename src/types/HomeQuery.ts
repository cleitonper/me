import { Props as Job } from '~components/BannerJob/types';
import { Props as Skill } from '~components/Skill/types';

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
        frontmatter: Skill & { order: number };
      };
    }[];
  };
}
