export const DIR_RE = /^\/([^\/]+\/)*/;
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
export function getDirectory(pagePath) {
  const path = DIR_RE.exec(pagePath);

  return path ? path[0] : null;
}

/*
 * Combines an array of partial paths into a single path.
 */
export function resolvePath(...paths) {
  return paths.reduce((acc, cur) => {
    const accTest = END_SLASH.test(acc);
    const curTest = START_SLASH.test(cur);

    if (!cur) return acc;

    if (accTest && curTest) {
      return acc + cur.substring(1);
    }
    if (accTest || curTest) {
      return acc + cur;
    }
    return acc + '/' + cur;
  }, '/');
}

/*
 * Returns an array of all the directories in a path, starting with the deepest directory and ending with the root "/".
 */
export function getPathDirectories(path) {
	const dir = [];
  let match = path.match(DIR_RE);
  if (match) {
    path = match[0]
  	dir.push(path);
  }
  
  while (match && match[1]) {
  	path = path.replace(match[1], '');
    
    dir.push(path);
    match = path.match(DIR_RE);
  }
  
  return dir;
}

/*
 * Returns the page with the given path in the pages array.
 */
export function getPage(pagePath, pages) {
  return pages.find((element) => {
    return isPage(pagePath, element);
  });
}

/*
 * Returns true if a path belongs to a given page, false otherwise.
 */
export function isPage(pagePath, page) {
  return pagePath.replace(EXT_RE, '') === page.path.replace(EXT_RE, '');
}

export function isParentPage(pagePath, page) {
  if (pagePath == '/') return false;

  const isBase = new RegExp('^' + getDirectory(pagePath));
  
  return isBase.test(page.path);
}

/*
 * Checks if every element of an array is an object.
 */
export function isGroupArray(config) {
  if (!config || !(config instanceof Array)) return false;
  return config.every((cur) => {
    return cur instanceof Object;
  });
}

/*
 * Creates a grouped sidebar array from a config and array of pages.
 */
export function processGroupArray(config, pages, root, base) {
  const sidebar = [];
  config.forEach((group) => {

    const title = group.title;
    const groupBase = base ? resolvePath(base, group.base) : group.base;
    const groupPathArray = group.children;

    const children = processPathArray(groupPathArray, pages, root, groupBase);
    if (children.length == 0) return
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
  if (!config || !(config instanceof Array)) return false;
  return config.every((cur) => {
    return typeof cur == 'string';
  });
}

/*
 * Generates an array of sidebar elements from a config and array of pages.
 */
export function processPathArray(config, pages, root, base) {
  const sidebar = [];
  config.forEach((configPath) => {
    let path = configPath;
    if (root || base) path = resolvePath(root, base, path);
    
    const page = getPage(path, pages);
    
    if (!page) throw new Error(`Error: Sidebar path '${path}' was not found.`);

    sidebar.push({
      title: page.title,
      link: page.path
    });
  });

  return sidebar;
}

export function findSidebar(sidebars, page) {
  if (!sidebars) return { items: [] }
  
  const directories = getPathDirectories(page.path);
  
  let sidebar;
  directories.some((path) => {
    return sidebar = sidebars[path];
  });
  sidebar = sidebar ? sidebar : sidebars[DEFAULT]

  if (sidebar) return sidebar;
  return { items: [] };
}

/*
 * Process a Sidebar configuration.
 */
export function processSidebar(config, pages) {
  if (!config) return null;

  const sidebars = {}

  if (config.items && isGroupArray(config.items)) {
    sidebars[DEFAULT] = {
      title: config.title,
      items: processGroupArray(config.items, pages, '/', config.base)
    };
  }
  else if (config.items && isPathArray(config.items)) {
    sidebars[DEFAULT] = {
      title: config.title,
      items: processPathArray(config.items, pages, '/', config.base)
    }
  }
  else {
    const configPaths = Object.entries(config)

    configPaths.forEach(([path, sidebar]) => {
      const root = (path == DEFAULT) ? '/' : path
      
      if (isGroupArray(sidebar.items))
        sidebars[path] = {
          title: sidebar.title,
          items: processGroupArray(sidebar.items, pages, root, sidebar.base)
        }
      else if (isPathArray(sidebar.items))
        sidebars[path] = {
          title: sidebar.title,
          items: processPathArray(sidebar.items, pages, root, sidebar.base)
        }
    })
  }

  if (isEmpty(sidebars)) throw new Error("Error: Unable to parse sidebar config.");

  return sidebars;
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

    throw new Error('Error: Invalid menu item.');
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
  throw new Error('Error: Invalid menu config. Must be array of menu items.');
}