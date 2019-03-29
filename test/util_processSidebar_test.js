/* eslint-env jasmine */

import { processSidebar } from "Util";
import { basicPages } from "Test/mockups/pages";

xdescribe("Process sidebar config", function() {
  describe("with no sidebar", function() {
    it("processes null sidebar config", function() {
      const config = null;
      const page = basicPages[1];
      const pages = basicPages;
      expect(processSidebar(config, pages, page).length).toBe(0);
    });
  });
  describe("with same sidebar for each page", function() {
    it("processes string-array config", function() {
      const config = {
        title: "Reference",
        items: [
          "/",
          "/reference/",
          "/reference/html",
          "/reference/css",
          "/reference/javascript",
          "/about/"
        ]
      };
      const pages = basicPages;
      const page = basicPages[1];
      const expected = {
        title: "Reference",
        items: [
          {
            title: "Home",
            link: "/"
          },
          {
            title: "Reference",
            link: "/reference/"
          },
          {
            title: "HTML",
            link: "/reference/html.html"
          },
          {
            title: "CSS",
            link: "/reference/css.html"
          },
          {
            title: "JavaScript",
            link: "/reference/javascript.html"
          },
          {
            title: "About",
            link: "/about/"
          }
        ]
      };
      const results = processSidebar(config, pages, page);
      expect(results).toEqual(expected);
    });
  });

  describe("with same grouped sidebar on each page", function() {
    const config = {
      title: "Sidebar",
      items: [
        {
          title: "Main",
          children: ["/", "/about/"]
        },
        {
          title: "Web",
          base: "/reference/",
          children: ["html", "css", "javascript"]
        }
      ]
    };
    const pages = basicPages;
    const page = basicPages[0];
    const result = processSidebar(config, pages, page);

    it("outputs a group for each input group", function() {
      expect(result.items.length).toBe(2);
    });

    it("matches expected output", function() {
      const expected = {
        title: "Sidebar",
        items: [
          {
            title: "Main",
            children: [
              {
                title: "Home",
                link: "/"
              },
              {
                title: "About",
                link: "/about/"
              }
            ]
          },
          {
            title: "Web",
            children: [
              {
                title: "HTML",
                link: "/reference/html.html"
              },
              {
                title: "CSS",
                link: "/reference/css.html"
              },
              {
                title: "JavaScript",
                link: "/reference/javascript.html"
              }
            ]
          }
        ]
      };
      expect(result).toEqual(expected);
    });
  });

  //TODO processes object of string-arrays config
  xdescribe("with specified sidebar for each page", function() {});

  xdescribe("with specified sidebar for only reference page", function() {});

  //TODO processes object of group-objects config
  xdescribe("with specified grouped sidebar for each page", function() {});

  xdescribe("with specified grouped sidebar for one page only", function() {});
});
