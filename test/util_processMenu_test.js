import { processMenu } from 'Util';
import {basicPages} from 'Test/mockups/pages';

describe('process menu config', function() {

  describe('with null config', function() {
    const config = null;
    const pages = basicPages;
    const page = basicPages[0];

    it('outputs empty array', function() {
      const result = processMenu(config, pages, page);
      const expected = 0;
      expect(result.length).toBe(expected);
    });
  });

  describe('with empty config array', function() {
    const config = [];
    const pages = basicPages;
    const page = basicPages[0];

    it('outputs an empty array', function() {
      const result = processMenu(config, pages, page);
      const expected = 0;
      expect(result.length).toBe(expected);
    });
  });

  describe('config with no children', function() {
    const config = [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Reference',
        path: '/reference/',
      },
      {
        title: 'About',
        path: '/about/',
      }
    ];
    const pages = basicPages;
    const page = basicPages[0];

    it('outputs menu array with no submenus', function() {
      const result = processMenu(config, pages, page);
      const expected = [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Reference',
          link: '/reference/'
        },
        {
          title: 'About',
          link: '/about/'
        }
      ];

      expect(result).toEqual(expected);

    });
  });

  describe('with sub menu', function() {
    const config = [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Reference',
        base: '/reference/',
        children: [
          {
            title: 'HTML',
            path: 'html'
          },
          {
            title: 'CSS',
            path: 'css'
          },
          {
            title: 'JavaScript',
            path: 'javascript'
          }
        ]
      },
      {
        title: 'About',
        path: '/about/',
      }
    ];
    const pages = basicPages;
    const page = basicPages[0];

    it('outputs menu array with submenu', function() {
      const result = processMenu(config, pages, page);
      const expected = [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Reference',
          link: '/reference/',
          children: [
            {
              title: 'HTML',
              link: '/reference/html.html'
            },
            {
              title: 'CSS',
              link: '/reference/css.html'
            },
            {
              title: 'JavaScript',
              link: '/reference/javascript.html'
            }
          ]
        },
        {
          title: 'About',
          link: '/about/'
        }
      ];;
      
      expect(result).toEqual(expected);
    });
    
  });
});