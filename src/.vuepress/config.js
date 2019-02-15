const path = require('path')

module.exports = {
  title: 'Perry Kaufman',
  description: 'The personal website of Perry Kaufman, a web developer interested in front-end and back-end development with JavaScript. This website has my resume, projects, and reference material.',
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        Public: path.resolve(__dirname, './public'),
        ThemeStyles: path.resolve(__dirname, './theme/styles')
      }
    }
  },
  themeConfig: {
    nav: [
      {title: 'Home',  path: ''},
      {title: 'Resume', path: 'resume/'},
      {title: 'Reference', path: 'reference/'},
      {title: 'Projects', path: 'projects/'}
    ],
    footer: 'Created by Perry Kaufman with Vuepress. 2018',
    logo: '/PK_logo.jpg',
    sidebar: {
      'reference/': {
        title: 'Reference',
        items: [{
            title: '',
            children: [
              {title: 'Introduction', path: ''},
              {title: 'HTML', path: 'html'},
              {title: 'CSS', path: 'css'}
            ]
          },
          {
            title: 'JavaScript',
            base: 'javascript',
            children: [
              {title: 'Vanilla', path: ''},
              {title: 'Frameworks', path: 'frameworks'},
              {title: 'Node.js', path: 'node'}
            ]
          },
          {
            title: 'Tools',
            base: 'tools',
            children: [
              {title: 'Git', path: 'git'},
              {title: 'Regex', path: 'regex'}
            ]
          }
        ]
      }
    }
  }
}