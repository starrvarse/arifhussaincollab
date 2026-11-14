process.env.NITRO_PRESET = "vercel";
process.env.SERVER_PRESET = "vercel";

import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      tsConfigPaths(),
      tailwindcss(),
      tanstackStart({
        // The site is one page that is the same for everyone: build it once as
        // a plain file so it is served from the CDN, not rendered per visit.
        prerender: {
          enabled: true,
          crawlLinks: false,
        },
        pages: [{ path: "/" }],
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),
      nitro({
        // Pictures and the font rarely change: let browsers keep them.
        routeRules: {
          "/img/**": { headers: { "cache-control": "public, max-age=2592000, stale-while-revalidate=86400" } },
          "/fonts/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        },
      }),
      viteReact(),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      host: true,
    },
  };
});
