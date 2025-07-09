// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
});
