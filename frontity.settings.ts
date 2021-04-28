import { Settings } from "frontity/types";

const settings: Settings = {
  "name": "maisjustica",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "frontity-chakra-theme",
      "state": {
        "theme": {
          "logo": "Frontity",
          // the top-level navigation labels and links
          "showBackgroundPattern": true,
          "menu": [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
          ],
          // the social links
          "socialLinks": [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
          ],
          "featured": {
            "showOnArchive": true,
            "showOnPost": true
          },
          "colors": {
            "primary": {
              50: "#eaf3ff",
              100: "#c4d4ef",
              200: "#9fb5e0",
              300: "#7994d3",
              400: "#5373c5",
              500: "#3a55ac",
              600: "#2d3f86",
              700: "#1f2b60",
              800: "#121d3c",
              900: "#030c19"              
            },
            "accent": {
              50: "#ffe2e6",
              100: "#ffb2b8",
              200: "#fe8289",
              300: "#fb505b",
              400: "#f91f2c",
              500: "#e00613",
              600: "#af020e",
              700: "#7d0008",
              800: "#4e0003",
              900: "#200000"
            }

          }
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
