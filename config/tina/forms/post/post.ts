import slugify from 'slugify';

const title = {
  label: 'Título',
  name: 'rawFrontmatter.title',
  component: 'text',
};

const subtitle = {
  label: 'Subtítulo',
  name: 'rawFrontmatter.subtitle',
  component: 'text',
};

const date = {
  label: 'Data de publicação',
  name: 'rawFrontmatter.date',
  component: 'date',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: false,
};

const content = {
  label: 'Conteúdo',
  name: 'rawMarkdownBody',
  component: 'markdown',
};

const fields = [title, subtitle, date, content];

export const postFormOptions = {
  fields,
  label: 'Post',
};

export const postCreatorOptions = {
  fields,
  label: 'Novo Post',
  filename: (post) => {
    const slug = slugify(post.rawFrontmatter.title, {
      remove: /\./g,
      lower: true,
    });
    return `src/content/blog/${slug}.md`;
  },
  frontmatter: (post) => ({ ...post.rawFrontmatter }),
  body: (form) => form.rawMarkdownBody,
};
