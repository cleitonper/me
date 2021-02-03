import { GroupListField } from '~config/tina/types';
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

const networks: GroupListField<Network> = {
  label: 'Redes Sociais e Canais de Contato',
  description: 'Links para redes sociais e outros meios de contato',
  name: 'rawFrontmatter.social',
  component: 'group-list',
  itemProps: (item) => ({ label: item.title }),
  fields: [title, link, icon],
};


const socialFormOptions = {
  label: 'Footer',
  fields: [networks],
};


export default socialFormOptions;
