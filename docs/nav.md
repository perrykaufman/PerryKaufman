# Menu Configuration

The menu config is null/undefined if no menu. Otherwise, a menu is made up of **menu items** and **sub-menu items**.

```
<menu-config> = null || [<menu-item> || <menu-sub-item>, ...]
```

## Menu Item

A **menu item** is an object with an optional title and a path indicating the location of the page (e.g. "/path/to/page). If no title is provided, the title of the page is used instead.

```
<menu-item> = {
    title: <string> (optional),
    path: <string>
  }
```

## Sub-Menu Item

A **sub-menu item** is an object with an optional title, a base path, and an array of children. If no title is provided, the title of the index page in the folder inciated by the base path will be used (e.g. "/a/path/"). The base must be a path indicating a folder with an index page. The children array contains **menu items**. The base path will be applied to each **menu item**.

```
<sub-menu-item> = {
    title: <string> (optional),
    base: <string>,
    children: [<menu-item>, ...]
  }
```