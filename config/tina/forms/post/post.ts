import { FormShape } from '~config/tina/types';
import { Post } from '~src/components/PostList/types';
import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';
import { DeleteAction } from 'gatsby-tinacms-remark';
import slugify from 'slugify';


const image = {
  label: 'Imagem',
  name: 'rawFrontmatter.image',
  component: 'text',
  required: true,
};

const title = {
  label: 'Título',
  name: 'rawFrontmatter.title',
  component: 'text',
  required: true,
};

const subtitle = {
  label: 'Subtítulo',
  name: 'rawFrontmatter.subtitle',
  component: 'text',
  required: true,
};

const date = {
  label: 'Data de publicação',
  name: 'rawFrontmatter.date',
  component: 'date',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: false,
  required: true,
};

const content = {
  label: 'Conteúdo',
  name: 'rawMarkdownBody',
  component: 'markdown',
  required: true,
};

const fields = [image, title, subtitle, date, content];


export const postFormOptions = {
  fields,
  label: 'Post',
  actions: [DeleteAction],
};


export const CreatePostPlugin = new RemarkCreatorPlugin<FormShape<Post>>({
  fields,
  label: 'Novo Post',
  filename: (form) => {
    const slug = slugify(form.rawFrontmatter.title, {
      remove: /\./g,
      lower: true,
    });
    return `src/content/blog/${slug}.md`;
  },
  frontmatter: (form) => {
    console.log(form);
    return ({ ...form.rawFrontmatter });
  },
  body: (form) => form.rawMarkdownBody,
});
