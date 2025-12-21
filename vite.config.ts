import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    tsconfigPaths(),
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
  ],
});
