import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin';  // Import CRXJS plugin
import manifest from './manifest.json';    // Import manifest for Chrome extension

export default defineConfig({
  plugins: [
    react(), //Add the React Plugin
    crx({ manifest })  // Use CRXJS to handle Chrome extension build
  ],
  build: {
    rollupOptions: {
      input: {
        sidepanel: 'src/sidepanel.html',  // Entry point for your side panel
        background: 'src/background.js',  // Background script for API handling
        styles: 'src/styles.css',         // Ensure CSS is included in the build process
      },
    },
  },
  css: {
    devSourcemap: true,  // Enable CSS source maps for easier debugging during development
  },
});
