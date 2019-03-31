/* eslint-env node */

const path = require("path");

module.exports = {
  title: "Perry Kaufman",
  description:
    "The personal website of Perry Kaufman, a web developer interested in front-end and back-end development with JavaScript. This website has my resume, projects, and reference material.",
  head: [
    [
      "link",
      { ref: "apple-touch-icon", sizes: "76x76", href: "/apple-touch-icon.png" }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    },
    config(md) {
      md.use(md => {
        md.renderer.rules.table_open = () =>
          '<div style="overflow: auto"><table>';
        md.renderer.rules.table_close = () => "</table></div>";
      });
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        Public: path.resolve(__dirname, "./public"),
        ThemeStyles: path.resolve(__dirname, "./theme/styles")
      }
    }
  },
  themeConfig: {
    nav: [
      { title: "Home", path: "" },
      { title: "Resume", path: "resume/" },
      { title: "Reference", path: "reference/" },
      { title: "Projects", path: "projects/" }
    ],
    footer: {
      text: "Created by Perry Kaufman with Vuepress. 2018",
      icons: [
        {
          name: "GitHub",
          link: "https://github.com/perrykaufman",
          img: "/icons/github.png"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/perry-kaufman/",
          img: "/icons/linkedin.png"
        }
      ]
    },
    logo: "/logo.jpg",
    sidebar: {
      "reference/": {
        title: "Reference",
        items: [
          {
            title: "",
            children: [
              { title: "Introduction", path: "" },
              { title: "HTML", path: "html" },
              { title: "CSS", path: "css" }
            ]
          },
          {
            title: "JavaScript",
            base: "javascript",
            children: [
              { title: "Vanilla", path: "" },
              { title: "Frameworks", path: "frameworks" },
              { title: "Node.js", path: "node" }
            ]
          },
          {
            title: ".NET",
            base: "dotnet",
            children: [{ title: ".NET Core", path: "core" }]
          },
          {
            title: "Tools",
            base: "tools",
            children: [
              { title: "Webpack", path: "webpack" },
              { title: "Git", path: "git" },
              { title: "Regex", path: "regex" }
            ]
          }
        ]
      }
    }
  }
};
