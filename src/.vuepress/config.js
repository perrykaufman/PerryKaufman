module.exports = {
  title: 'Perry Kaufman',
  description: 'my personal website',
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    nav: [{
        title: 'Home',
        path: '/'
      },
      {
        title: 'Reference',
        path: '/reference/'
      },
      {
        title: 'Projects',
        path: '/projects/'
      },
      {
        title: 'Test',
        path: '/test/'
      }
    ],
    footer: 'Created by Perry Kaufman with Vuepress. 2018.',
    sidebar: {
      '/reference/': {
        title: 'Reference',
        items: [{
            title: '',
            children: [
              ''
            ]
          },
          {
            title: 'Core',
            children: [
              'html',
              'css',
              'javascript'
            ]
          },
          {
            title: 'JS Frameworks',
            children: ['vue']
          },
          {
            title: 'Version Control',
            children: ['git']
          }
        ]
      }
    }
  }
}