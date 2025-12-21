import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tsconfigPaths from "vite-tsconfig-paths";
import sitemap from "vite-plugin-sitemap";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mode === 'development' && componentTagger(),
    sitemap({
      hostname: "https://www.oktaysekerli.com",
      readable: true,
      generateRobotsTxt: false,
      dynamicRoutes: [
        "/",
        "/about",
        "/practice-areas",
        "/contact",
        "/privacy",
        "/terms",
        "/cookies",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
