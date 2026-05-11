import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base ('./') means the built site works whether you deploy
// to GitHub Pages (in a /repo-name/ subpath) OR Vercel/Netlify (root path).
// No editing needed for either.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
