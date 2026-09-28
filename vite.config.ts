import { defineConfig } from "vite";

export default defineConfig({
  base: "/peira-lab/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});