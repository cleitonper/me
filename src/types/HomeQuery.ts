import { AllFile } from '~types/AllFile';
import { MarkdownRemark } from '~types/MarkdownRemark';
import { Job }   from '~components/BannerJob/types';
import { Skill } from '~components/Skill/types';
import { Post }  from '~components/PostList/types';


export type PresentationQuery = MarkdownRemark<{ title: string }>;
export type SkillsQuery = MarkdownRemark<{ skills: Skill[] }>;
export type JobsQuery = MarkdownRemark<{ jobs: Job[] }>;
export type PostsQuery = AllFile<Post>;

export interface HomeQuery {
  presentation: PresentationQuery;
  skills: SkillsQuery;
  jobs: JobsQuery;
  posts: PostsQuery;
}
