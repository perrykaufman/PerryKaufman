export const PATH_RE = /\/([A-Z0-9\-!$'~_%()*+,;=:@]+\/)*/i;
export const EXT_RE = /\.(html|md)$/;
export const END_SLASH = /\/$/;
export const START_SLASH = /^\//;

//Path indicating default sidebar.
const DEFAULT = '*';

/*
 * Checks if an object, array, or string are empty.
 */
export function isEmpty(item) {
  if (typeof item === 'object' && Array.isArray(item)) {
    return item.length === 0;
  }
  if (typeof item === 'object') {
    return Object.keys(item).length === 0 && item.constructor === Object && Object.getPrototypeOf(item) === Object.prototype;
  }
  if (typeof item === 'string') {
    return item === '';
  }
  return false;
}

/*
 * Returns the path for a given page. (i.e. the path without the filename).
 */
export function getPath(pagePath) {
  const path = PATH_RE.exec(pagePath);
  //if(path) throw new Error(`Error in getPath: pagePath '${pagePath}' is not a valid path.`);
  return path ? path[0] : null;
}

export function resolvePath(...paths) {
  return paths.reduce((acc, cur) => {
    const accTest = END_SLASH.test(acc);
    const curTest = START_SLASH.test(cur);

    if (accTest && curTest) {
      return acc + cur.substring(1);
    }
    if (accTest || curTest) {
      return acc + cur;
    }
    return acc + '/' + cur;
  }, '/');
}

export function getPage(pagePath, pages) {
  return pages.find((element) => {
    return isPage(pagePath, element);
  });
}

export function isPage(pagePath, page) {
  return pagePath.replace(EXT_RE, '') === page.path.replace(EXT_RE, '');
}

export function isParentPage(basePath, page) {
  /*if (!END_SLASH.test(basePath) || !START_SLASH.test(basePath)) {
    throw new Error(`basePath "${basePath}" does not start and end with a slash(/).`);
  }
  return (new RegExp('^' + basePath).test(page.path));*/
  return basePath === getPath(page.path);
}

/*
 * Checks if every element of an array is an object.
 */
export function isGroupArray(config) {
  if (!config || !(config instanceof Array)) return false;
  return config.every((cur) => {
    return cur instanceof Object;
  }, true);
}

/*
 * Creates a grouped sidebar array from a config and array of pages.
 */
export function processGroupArray(config, pages) {
  const sidebar = [];
  config.forEach((group) => {
    const title = group.title;

    const base = group.base;
    let groupPathArray = group.children;
    if (base) {
      groupPathArray = groupPathArray.map((path) => {
        return resolvePath(base, path);
      });
    }
    const link = base;
    const children = processPathArray(groupPathArray, pages);
    sidebar.push({
      title,
      children
    });
  });
  return sidebar;
}

/*
 * Checks if every element of an array is a string.
 */
export function isPathArray(config) {
  if (!config || (config instanceof Array)) return false;
  return config.every((cur) => {
    return typeof cur == 'string';
  });
}

/*
 * Generates an array of sidebar elements from a config and array of pages.
 */
export function processPathArray(config, pages) {
  const sidebar = [];
  config.forEach((configPath) => {
    const page = getPage(configPath, pages);

    if (!page) throw new Error(`Error: Sidebar path '${configPath}' was not found.`);

    sidebar.push({
      title: page.title,
      link: page.path
    });
  });

  return sidebar;
}

/*
 * Process a Sidebar configuration.
 */
export function processSidebar(config, pages, page) {
  if (!config) return {items: []};
  if (config.items && isGroupArray(config.items)) {
    return {
      title: config.title,
      items: processGroupArray(config.items, pages)
    };
  }
  if (config.items && isPathArray(config.items)) {
    return {
      title: config.title,
      items: processPathArray(config, pages)
    };
  }
  //TODO: Should check for more than just the longest path.
  const path = getPath(page.path);

  const pathConfig = config[path];
  if (pathConfig && pathConfig.items && isGroupArray(pathConfig.items)) {
    return {
      title: pathConfig.title,
      items: processGroupArray(pathConfig.items, pages)
    };
  }
  if (pathConfig && pathConfig.items && isPathArray(pathConfig.items)) {
    return {
      title: pathConfig.title,
      items: processPathArray(pathConfig.items, pages)
    };
  }

  const defaultConfig = config[DEFAULT];
  if (defaultConfig && defaultConfig.items && isGroupArray(defaultConfig.items)) {
    return {
      title: defaultConfig.items,
      items: processGroupArray(defaultConfig.items, pages)
    };
  }
  if (defaultConfig && defaultConfig.items && isPathArray(defaultConfig.items)) {
    return {
      title: defaultConfig.items,
      items: processPathArray(defaultConfig.items, pages)
    };
  }

  return {items: []};

  //throw new Error('Invalid sidebar config. Must be an array of paths, array of groups, or an object of path sidebar pairs.');
}


export function processMenuItems(config, pages) {
  return config.map((element) => {
    if (element.path) {
      //item on menu without submenu
      const currentPage = getPage(element.path, pages);

      const title = element.title || currentPage.title;
      const link = currentPage.path;

      return {
        title,
        link
      };

    } else if (element.base && element.children) {
      //item on menu with sub menu
      const currentPage = getPage(element.base, pages);

      const title = element.title || currentPage.title;
      const link = element.base;
      let menuChildren = element.children.map((child) => {
        const title = child.title;
        const path = resolvePath(element.base, child.path);

        return {
          title,
          path
        };
      });
      const children = processSubMenuItems(menuChildren, pages);

      return {
        title,
        link,
        children
      };
    }

    throw new Error('Invalid menu item.');
  });
}

export function processSubMenuItems(config, pages) {
  return config.map((element) => {
    const currentPage = getPage(element.path, pages);

    const title = element.title || currentPage.title;
    const link = currentPage.path;

    return {
      title,
      link
    };
  });
}

/*
 * Process a menu configuration.
 */
export function processMenu(config, pages) {
  if (!config) return [];
  if (config instanceof Array) {
    return processMenuItems(config, pages);
  }
  throw new Error('Invalid menu config. Must be array of menu items.');
}