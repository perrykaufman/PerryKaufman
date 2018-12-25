# Sidebar Configuration

A sidebar config is _null_ if there is no sidebar. Otherwise, a **sidebar object** or a **sidebar paths object** can be specified.

```
<sidebar-config> = null | <sidebar> | <sidebar-paths>
```

## Sidebar Paths Object

A **sidebar paths object** can be used to specify a sidebar for different directories of your website. The root specifies a directory that gets a provided sidebar (e.g. "/root/path/"). The root will be used to determine the location of each page in the sidebar. To make a sidebar apply to all pages, use a root of '*' or '/'.

```
<sidebar-paths> = {
    <root>: <sidebar>,
    ...
  }

<root> = <string> 
```

## Sidebar Object

A **sidebar object** specifies the title, optional base, and **sidebar items**. The title is displayed above the sidebar. The optional base is a path (e.g. "/a/path/") that will be used with the root to determine the location of all the pages in the sidebar.

```
<sidebar> = {
    title: <string> (optional),
    base: <string> (optional),
    items: [<sidebar-item>, ...] | [<group>, ...]
  }
```

## Sidebar Groups and Items

A **sidebar** can either be an array of **groups** with sub-items, or an array of **sidebar items**. A group specifies a set of pages to be listed together with a title.

A **group** can have an optional base to specify a shared directory for the pages in the group. The children property specifies an array of **sidebar items** for the group.

A **sidebar item** contains the title and path of an item in the sidebar (e.g. "/path/to/page" or "page").

```
<group> = {
    title: <string>,
    base: <string> (optional),
    children: [<sidebar-item>, ...]
  }

<sidebar-item> = {title: <string>, path: <string>}
```