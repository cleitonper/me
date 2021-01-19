module.exports = {
  siteMetadata: {
    name: 'Cleiton',
    title: 'Desenvolvedor Web',
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
    'app-dark-mode',
    'app-query-types',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          position: 'displace',
          hidden: process.env.NETLIFY
        },
        plugins: [
          'gatsby-tinacms-git',
          'gatsby-tinacms-remark',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#8C43FF',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        lang: 'pt-BR',
        start_url: '/',
        short_name: 'Cleiton',
        name: 'Cleiton · Desenvolvedor Web',
        description:
          'Site de um desenvolvedor javascript, ' +
          'entuasiasta de novas tecnologias do mundo de desenvolvimento web ' +
          'e fã de destribuições Linux.',
        icon: 'src/assets/img/logo.svg',
        theme_color_in_head: false,
        background_color: '#FFFFFF',
        theme_color: '#000000',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/blog/*'],
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
