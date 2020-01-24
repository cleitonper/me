import { Props as Job } from '~components/BannerJob/types';
import { Props as Tag } from '~components/Tag/types';

const name = {
  label: 'Nome',
  name: 'name',
  description: 'Nome do projeto',
  component: 'text',
};

const description = {
  label: 'Descrição',
  name: 'description',
  description: 'Breve descrição do projeto',
  component: 'textarea',
};

const image = {
  label: 'Imagem',
  name: 'image',
  description: 'Path para a imagem de capa',
  component: 'text',
};

const tagName = {
  label: 'Nome',
  name: 'name',
  description: 'Hashtag de uma área de conhecimento',
  component: 'text',
};

const tagBackground = {
  label: 'Background',
  name: 'background',
  description: 'Background da hashtag',
  component: 'text',
};

const tagForeground = {
  label: 'Foreground',
  name: 'foreground',
  description: 'Foreground da hashtag',
  component: 'text',
};

const tags = {
  label: 'Tags',
  description: 'Lista de tags relacionadas ao projeto',
  name: 'tags',
  component: 'group-list',
  itemProps: (item: Tag) => ({ label: item.name }),
  defaultItem: () => ({
    id: Math.random()
      .toString(36)
      .substr(2, 9),
  }),
  fields: [tagName, tagForeground, tagBackground],
};

const jobsFormOptions = {
  label: 'Trabalhos Recentes',
  fields: [
    {
      label: 'Trabalhos Recentes',
      description: 'Alguns dos trabalhos que desenvolvi recentemente',
      name: 'rawFrontmatter.jobs',
      component: 'group-list',
      itemProps: (item: Job) => ({ label: item.name }),
      defaultItem: () => ({
        id: Math.random()
          .toString(36)
          .substr(2, 9),
      }),
      fields: [name, description, image, tags],
    }
  ],
};

export default jobsFormOptions;
