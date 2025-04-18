import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


// Get repo name for GitHub Pages base path
// For example, if your repo is at https://github.com/username/yin-flow-landing-page
// The base path should be "/yin-flow-landing-page/"
const base = process.env.NODE_ENV === 'production' 
  ? '/yin-flow-landing-page/' 
  : '/'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
