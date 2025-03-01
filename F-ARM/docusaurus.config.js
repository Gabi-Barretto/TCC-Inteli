// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'F-ARM',
  tagline: 'Agricultural Remote Monitoring',
  favicon: 'img/favicon.ico',

  url: 'https://Gabi-Barretto.github.io', // URL do GitHub Pages
  baseUrl: '/TCC-Inteli/', // Nome do repositório com barra no final

  organizationName: 'Gabi-Barretto', // Nome da conta no GitHub
  projectName: 'TCC-Inteli', // Nome do repositório
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic', // Uso explícito do preset
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // Servir docs na raiz
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'F-ARM',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/', // Link para a documentação
          label: 'Documentação',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} F-ARM.`,
    },
  },
};

module.exports = config;