import { Skill } from '~components/Skill/types';

const skillsFormOptions = {
  label: 'Skills',
  fields: [
    {
      label: 'Skills',
      description: 'Skills',
      name: 'rawFrontmatter.skills',
      component: 'group-list',
      itemProps: (item: Skill & { order: number }) => ({
        key: item.order,
        label: item.title,
      }),
      fields: [
        {
          label: 'Ordem',
          name: 'order',
          component: 'text',
        },
        {
          label: 'Título',
          name: 'title',
          component: 'text',
        },
        {
          label: 'Descrição',
          name: 'description',
          component: 'textarea',
        },
        {
          label: 'Ícone',
          name: 'icon',
          component: 'group',
          fields: [
            {
              label: 'Nome',
              name: 'name',
              component: 'text',
            },
            {
              label: 'Pacote',
              name: 'pack',
              component: 'text',
            }
          ],
        },
      ],
    }
  ]
};

export default skillsFormOptions;
