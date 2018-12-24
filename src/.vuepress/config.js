const path = require('path')

module.exports = {
  title: 'Perry Kaufman',
  description: 'my personal website',
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'Public': path.resolve(__dirname, './public'),
        'ThemeStyles': path.resolve(__dirname, './theme/styles')
      }
    }
  },
  themeConfig: {
    nav: [{
        title: 'Home',
        path: ''
      },
      {
        title: 'Reference',
        path: 'reference/'
      },
      {
        title: 'Projects',
        path: 'projects/'
      }
    ],
    footer: 'Created by Perry Kaufman with Vuepress. 2018',
    sidebar: {
      'reference/': {
        title: 'Reference',
        items: [{
            title: '',
            children: [
              '',
              'html',
              'css'
            ]
          },
          {
            title: 'JavaScript',
            base: 'javascript',
            children: [
              'vanilla',
              'frameworks',
              'node'
            ]
          },
          {
            title: 'Tools',
            base: 'tools',
            children: [
              'git',
              'regex'
            ]
          }
        ]
      }
    }
  }
}