<menu-config> = null || <menu-items>

<menu-items> = [<menu-item> || <menu-sub-item>, ...]

<menu-item> = {title: <title (optional)>, path: <path>}

<title> = <string> (e.g. "Title of Page")

<path> = <string> (e.g. "/path/to/page)

<sub-menu-item> = {title: <title (optional)>, base: <base>, children: <children>}

<base> = <string> (e.g. "/a/path/")

<children> = <menu-items>