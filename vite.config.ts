import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `[ext]/[name].[ext]`,
      },
    },
  },
  server: {
    host: true,
  },
  plugins: [],
});
