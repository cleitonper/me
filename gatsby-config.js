module.exports = {
  siteMetadata: {
    name: 'Cleiton',
    title: 'Web Developer',
    titleTemplate: "Cleiton · %s",
    description:
      'Site de um desenvolvedor javascript, ' +
      'entuasiasta de novas tecnologias do mundo de desenvolvimento web ' +
      'e fã de destribuições Linux.',
    banner: '/img/banner/default.png',
    bannerAlt:
      'Logo do Site. A letra C na cor branca ' +
      'por cima de um quadradro preto com cantos arredondados.',
    siteUrl: 'http://localhost:8000',
    twitter: '@cleitonsper',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: { plugins: ['gatsby-remark-prismjs'] },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home-content',
        path: `${__dirname}/src/content/home`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'shared-content',
        path: `${__dirname}/src/content/shared`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: { position: 'displace' },
        plugins: [
          'gatsby-tinacms-git',
          'gatsby-tinacms-remark',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "~src": "src",
          "~config": "config",
          "~assets": "src/assets",
          "~components": "src/components",
          "~templates": "src/templates",
          "~layouts": "src/layouts",
          "~pages": "src/pages",
          "~hooks": "src/hooks",
          "~types": "src/types",
          "~util": "src/util",
        },
        extensions: [
          "js",
          "ts",
          "jsx",
          "tsx",
        ],
      },
    },
  ],
};
