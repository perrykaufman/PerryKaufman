<sidebar-config> = null || <sidebar> || <path-sidebars>

<path-sidebars> = [{<root>: <sidebar>}, ...]

<root> = <string> (e.g. "/root/path/")

<sidebar> = {title: <title>, base: <base>, items: <items>}

<title> = <string> (e.g. "Title of Sidebar")

<base> = <string> (e.g. "/a/path/")

<items> = <pages> || <groups>

<groups> = <group>

<group> = {title: <title>, base: <base>, children: <children>}

<children> = <pages>

<pages> = [<page>,...]

<page> = <string> (e.g. "/path/to/page")