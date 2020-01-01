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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'presentation',
        path: `${__dirname}/src/content/presentation`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'skills',
        path: `${__dirname}/src/content/skills`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jobs',
        path: `${__dirname}/src/content/jobs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'social',
        path: `${__dirname}/src/content/social`,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "~src": "src",
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
