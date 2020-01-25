import { Job }   from '~components/BannerJob/types';
import { Skill } from '~components/Skill/types';

export interface HomeQuery {
  presentation: {
    frontmatter: {
      title: string;
    };
    rawFrontmatter: string;
    rawMarkdownBody: string;
    fileRelativePath: string;
  };
  skills: {
    frontmatter: {
      skills: Skill[];
    };
    rawFrontmatter: string;
    rawMarkdownBody: string;
    fileRelativePath: string;
  };
  jobs: {
    frontmatter: {
      jobs: Job[];
    };
    rawFrontmatter: string;
    rawMarkdownBody: string;
    fileRelativePath: string;
  };
}
