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
    css: {
      // Ensure CSS is properly processed
      postcss: {
        plugins: [
          // Add autoprefixer for better browser compatibility
          require('autoprefixer')({
            overrideBrowserslist: [
              '> 1%',
              'last 2 versions',
              'not dead'
            ]
          })
        ]
      }
    },
    build: {
      // Ensure CSS is properly bundled
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Ensure CSS files are properly named and bundled
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  };
});
