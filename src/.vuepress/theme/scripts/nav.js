import * as util from './util.js'

/*
 * Process a menu configuration.
 */
export function processNav(config, pages) {
  if (!config) return [];
  if (config instanceof Array) {
    return processNavItems(config, pages);
  }
  throw new Error('Error: Invalid menu config. Must be array of menu items.');
}

export function processNavItems(config, pages) {
  return config.map((element) => {
    if (element.path) {
      //item on menu without submenu
      const currentPage = util.getPage(element.path, pages);

      const title = element.title || currentPage.title;
      const link = currentPage.path;

      return {
        title,
        link
      };

    } else if (element.base && element.children) {
      //item on menu with sub menu
      const currentPage = util.getPage(element.base, pages);

      const title = element.title || currentPage.title;
      const link = util.resolveBase(element.base);
      let menuChildren = element.children.map((child) => {
        const title = child.title;
        const path = util.resolvePath(element.base, child.path);

        return {
          title,
          path
        };
      });
      const children = processNavSubItems(menuChildren, pages);

      return {
        title,
        link,
        children
      };
    }

    throw new Error('Error: Invalid menu item.');
  });
}

export function processNavSubItems(config, pages) {
  return config.map((element) => {
    const currentPage = util.getPage(element.path, pages);

    const title = element.title || currentPage.title;
    const link = currentPage.path;

    return {
      title,
      link
    };
  });
}