import { Network } from '~components/Footer/types';

const title = {
  label: 'Título',
  name: 'title',
  component: 'text',
};

const link = {
  label: 'Link',
  name: 'link',
  component: 'text',
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

const socialFormOptions = {
  label: 'Footer',
  fields: [
    {
      label: 'Redes Sociais e Canais de Contato',
      description: 'Links para redes sociais e outros meios de contato',
      name: 'rawFrontmatter.social',
      component: 'group-list',
      itemProps: (item: Network) => ({ label: item.title }),
      defaultItem: () => ({
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [title, link, icon],
    }
  ],
};

export default socialFormOptions;
