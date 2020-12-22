module.exports = {
  title: 'VueMonoRepoLib',
  description: 'Replace this descriptions with something nice!',
  themeConfig: {
    repo: '',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'next',
    editLinks: true,
    editLinkText: 'Help improve these docs!',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Installation', link: '/guide/installation' },
      {
        text: 'Guide',
        link: '/guide/getting-started',
      },
      {
        text: 'API',
        link: '/api',
      },
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/api/': getApiSidebar(),
    },
  },
}

function getGuideSidebar() {
  return [{ text: 'Getting Started', link: '/guide/getting-started' }]
}
function getApiSidebar() {
  return []
}
