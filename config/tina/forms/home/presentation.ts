const title = {
  label: 'Título',
  name: 'rawFrontmatter.title',
  component: 'text',
};

const content = {
  label: 'Conteúdo',
  name: 'rawMarkdownBody',
  component: 'markdown',
};

const presentationFormOptions = {
  label: 'Apresentação',
  fields: [title, content],
};


export default presentationFormOptions;
