import { GroupListField } from '~config/tina/types';
import { Job } from '~components/BannerJob/types';
import { Tag } from '~components/Tag/types';


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

const link = {
  label: 'Código fonte',
  name: 'link',
  description: 'Link para o repositório do projeto',
  component: 'text',
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

const tags: GroupListField<Tag> = {
  label: 'Tags',
  description: 'Lista de tags relacionadas ao projeto',
  name: 'tags',
  component: 'group-list',
  itemProps: (item) => ({ label: item.name }),
  fields: [tagName, tagForeground, tagBackground],
};

const jobs: GroupListField<Job> = {
  label: 'Trabalhos Recentes',
  description: 'Alguns dos trabalhos que desenvolvi recentemente',
  name: 'rawFrontmatter.jobs',
  component: 'group-list',
  itemProps: (item) => ({ label: item.name }),
  fields: [name, description, link, image, tags],
};


const jobsFormOptions = {
  id: 'recent-work',
  label: 'Trabalhos Recentes',
  fields: [jobs],
};


export default jobsFormOptions;
