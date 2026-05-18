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
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),
      nitro(),
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
