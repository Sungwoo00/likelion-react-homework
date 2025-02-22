import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const viteConfig = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    host: "localhost",
    port: 8080,
  },
  css: {
    devSourcemap: true,
  },
});

export default viteConfig;
