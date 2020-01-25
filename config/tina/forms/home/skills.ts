import { Skill, Tool } from '~components/Skill/types';

const title = {
  label: 'Título',
  name: 'title',
  component: 'text',
};

const description = {
  label: 'Descrição',
  name: 'description',
  component: 'textarea',
};

const iconName = {
  label: 'Nome',
  description: 'Nome do ícone',
  name: 'name',
  component: 'text',
};

const iconPack = {
  label: 'Pacote',
  description: 'Nome do pacote ao qual o ícone pertence',
  name: 'pack',
  component: 'text',
};

const icon = {
  label: 'Ícone',
  name: 'icon',
  component: 'group',
  fields: [iconName, iconPack],
};

const tool = {
  label: 'Ferramenta',
  name: 'name',
  component: 'text',
};

const tools = {
  label: 'Ferramentas',
  name: 'tools',
  description: 'Nome das ferramentas usadas',
  component: 'group-list',
  itemProps: (item: Tool) => ({ label: item.name }),
  defaultItem: () => ({
    id: Math.random()
      .toString(36)
      .substr(2, 9),
  }),
  fields: [tool],
};

const skillsFormOptions = {
  label: 'Skills',
  fields: [
    {
      label: 'Skills',
      description: 'Skills',
      name: 'rawFrontmatter.skills',
      component: 'group-list',
      itemProps: (item: Skill) => ({ label: item.title }),
      defaultItem: () => ({
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [icon, title, description, tools],
    }
  ]
};

export default skillsFormOptions;
