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

const postFormOptions = {
  label: 'Post',
  fields: [title, subtitle, date, content],
};

export default postFormOptions;
