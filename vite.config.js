import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Set the root directory to /src
  build: {
    outDir: '../dist', // Output directory for the build (relative to /src)
    emptyOutDir: true, // Clear the output directory before each build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about-us.html'),
        terms: resolve(__dirname, 'src/pages/terms-of-use.html'),
        // Add more pages here as needed
      },
    },
  },
  server: {
    open: true, // Automatically open the app in the browser on server start
  },
  publicDir: '../public', // Specify the directory for static assets
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Set up an alias for the /src directory
    },
  },
});
