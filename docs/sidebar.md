# Sidebar Configuration

A sidebar config is _null_ if there is no sidebar. Otherwise, a **sidebar object** or a **sidebar paths object** can be specified.

```
<sidebar-config> = null || <sidebar> || <sidebar-paths>
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
    title: <string>,
    base: <string> (optional),
    items: [<path>, ...] || [<group>, ...]
  }
```

## Sidebar Items

The **sidebar items** can either be an array of **groups**, or an array of **paths**. A group specifies a set of pages to be displayed together with a title.

A **group** can have an optional base to specify a shared directory for the pages in the group. The children property specifies **path array** for the group.

A **path array** contains the relative paths of all the pages in the group (e.g. "/path/to/page" or "page").

```
<group> = {
    title: <string>,
    base: <string> (optional),
    children: [<path>, ...]
  }

<path> = <string>
```