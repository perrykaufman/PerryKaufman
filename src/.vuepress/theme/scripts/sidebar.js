import * as util from './util.js'

//Path indicating default sidebar.
export const DEFAULT = '*';

/*
 * Checks if every element of an array is an object.
 */
export function isGroupArray(config) {
  if (!config || !(config instanceof Array)) return false;
  return config.every((cur) => {
    return cur instanceof Object && cur.children;
  });
}

/*
 * Creates a grouped sidebar array from a config and array of pages.
 */
export function processGroupArray(config, pages, root, base) {
  const sidebar = [];
  config.forEach((group) => {

    const title = group.title;
    const groupBase = base ? util.resolveBase(base, group.base) : group.base;
    const groupPathArray = group.children;

    const children = processItemArray(groupPathArray, pages, root, groupBase);
    if (children.length == 0) return;
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
export function isItemArray(config) {
  if (!config || !(config instanceof Array)) return false;
  return config.every((cur) => {
    return cur instanceof Object && cur.title && (cur.path || cur.path === '');
  });
}

/*
 * Generates an array of sidebar elements from a config and array of pages.
 */
export function processItemArray(config, pages, root, base) {
  const sidebar = [];
  config.forEach((item) => {
    let path = item.path;
    if (path === '') path = util.resolveBase(root, base)
    else if (root || base) path = util.resolvePath(root, base, path);
    
    const page = util.getPage(path, pages);
    if (!page) throw new Error(`Error: Sidebar path '${path}' was not found.`);

    const title = item.title;
    const link = page.path;
    
    sidebar.push({title, link});
  });

  return sidebar;
}

export function findSidebar(sidebars, page) {
  if (!sidebars) return { items: [] }
  
  const directories = util.getPathDirectories(page.path);
  
  let sidebar;
  directories.some((path) => {
    return sidebar = sidebars[path];
  });

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
  else if (config.items && isItemArray(config.items)) {
    sidebars[DEFAULT] = {
      title: config.title,
      items: processItemArray(config.items, pages, '/', config.base)
    }
  }
  else {
    const configPaths = Object.entries(config)

    configPaths.forEach(([path, sidebar]) => {
      const root = (path === DEFAULT) ? '/' : util.resolveBase(path)

      if (isGroupArray(sidebar.items))
        sidebars[root] = {
          title: sidebar.title,
          items: processGroupArray(sidebar.items, pages, root, sidebar.base)
        }
      else if (isItemArray(sidebar.items))
        sidebars[root] = {
          title: sidebar.title,
          items: processItemArray(sidebar.items, pages, root, sidebar.base)
        }
    })
  }

  if (util.isEmpty(sidebars)) throw new Error("Error: Unable to parse sidebar config.");

  return sidebars;
}