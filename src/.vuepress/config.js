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
        title: 'About',
        path: '/about/'
      }
    ],
    footer: 'Created by Perry Kaufman with Vuepress. 2018.',
    sidebar: {
      '/reference/': {
        title: 'Reference',
        items: [{
            base: '/reference/',
            title: '',
            children: [
              ''
            ]
          },
          {
            base: '/reference/',
            title: 'Core',
            children: [
              'html',
              'css',
              'javascript'
            ]
          },
          {
            base: '/reference/',
            title: 'JavaScript Frameworks',
            children: ['vue']
          },
          {
            base: '/reference/',
            title: 'Version Control',
            children: ['git']
          }
        ]
      }
    }
  }
}