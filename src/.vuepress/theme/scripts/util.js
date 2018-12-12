export const DIR_RE = /^\/([^\/]+\/)*/;
export const EXT_RE = /\.(html|md)$/;
export const END_SLASH = /\/$/;
export const START_SLASH = /^\//;

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
    
    if (!cur) return acc;

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

export function resolveBase(...paths) {
  let base
  if (paths.length > 1) base = resolvePath(...paths)
  else if (paths.length == 1) base  = paths[0]
  else return '/'
  
  const start = START_SLASH.test(base)
  const end = END_SLASH.test(base)
  
  if (start && end) return base
  else if (start) return base + '/'
  else if (end) return '/' + base
  return '/' + base + '/' 
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

  const isBase = new RegExp('^' + pagePath);
  
  return isBase.test(page.path);
}