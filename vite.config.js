import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Check if we're building for GitHub Pages specifically
  const isGitHubPages = process.env.DEPLOY_PLATFORM === "github-pages";
  const isProduction = command === "build";

  return {
    plugins: [react()],
    base: isProduction && isGitHubPages ? "/Aaspiredesign/" : "/",
  };
});
