/* eslint-env jasmine */

import {
  isPathArray,
  processPathArray,
  isGroupArray,
  processGroupArray
} from "Util";
import { basicPages } from "Test/mockups/pages";

//isPathArray
xdescribe("Process Sidebar helper functions", function() {
  describe("isPathArray", function() {
    it("handles array of objects", function() {
      const result = isPathArray([{}, {}, {}]);
      expect(result).not.toBe(true);
    });
    it("handles array of strings", function() {
      const result = isPathArray(["", "", ""]);
      expect(result).toBe(true);
    });
    it("handles empty array", function() {
      const result = isPathArray([]);
      expect(result).toBe(true);
    });
  });
  //processPathArray
  describe("processPathArray", function() {
    it("handles a simple path array", function() {
      const config = ["/", "/reference/", "/about/"];
      const result = processPathArray(config, pages);
      const expected = [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Reference",
          link: "/reference/"
        },
        {
          title: "About",
          link: "/about/"
        }
      ];
      expect(result).toEqual(expected);
    });
    it("handles larger path array with html extensions", function() {
      const config = [
        "/",
        "/reference/",
        "/reference/html.html",
        "/reference/css.html",
        "/reference/javascript.html",
        "/about/"
      ];
      const result = processPathArray(config, pages);
      const expected = [
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
      ];
      expect(result).toEqual(expected);
    });
    it("handles larger path array without html extensions", function() {
      const config = [
        "/",
        "/reference/",
        "/reference/html",
        "/reference/css",
        "/reference/javascript",
        "/about/"
      ];
      const result = processPathArray(config, pages);
      const expected = [
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
      ];
      expect(result).toEqual(expected);
    });
  });

  //isGroupArray
  describe("isGroupArray", function() {
    it("handles array of objects", function() {
      const result = isGroupArray([{}, {}, {}]);
      expect(result).toBe(true);
    });
    it("handles array of strings", function() {
      const result = isGroupArray(["", "", ""]);
      expect(result).not.toBe(true);
    });
    it("handles empty array", function() {
      const result = isGroupArray([]);
      expect(result).toBe(true);
    });
  });

  //processGroupArray
  describe("processGroupArray", function() {
    it("handles grouped path array with html extensions", function() {
      const group = {
        title: "Core",
        children: [
          "/reference/html.html",
          "/reference/css.html",
          "/reference/javascript.html"
        ]
      };
      const pages = basicPages;
      const results = processGroupArray([group], pages);
      const expected = [
        {
          title: "Core",
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
      ];
      expect(results).toEqual(expected);
    });
    it("handles multiple groups with html extensions", function() {
      const group1 = {
        title: "Main",
        children: ["/", "/reference/", "/about/"]
      };
      const group2 = {
        title: "Web",
        children: [
          "/reference/html.html",
          "/reference/css.html",
          "/reference/javascript.html"
        ]
      };
      const pages = basicPages;
      const results = processGroupArray([group1, group2], pages);
      const expected = [
        {
          title: "Main",
          children: [
            {
              title: "Home",
              link: "/"
            },
            {
              title: "Reference",
              link: "/reference/"
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
      ];
      expect(results).toEqual(expected);
    });
  });
});
