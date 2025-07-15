import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://AlexDuchnowski.github.io",
  base: "/website",

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@use "/src/styles" as *;`,
              },
          },
      },
  },

  markdown: {
      shikiConfig: {
          // theme: "monokai",
          theme: "material-theme-darker",
      },
  },

  integrations: [mdx()],
});