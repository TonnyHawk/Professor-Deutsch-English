import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import inject from '@rollup/plugin-inject';
import injectHTML from 'vite-plugin-html-inject';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      // => that should be first under plugins array
      $: 'jquery',
      jQuery: 'jquery',
    }),
    react(),
    injectHTML(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        intro: resolve(__dirname, 'intro/index.html'),
        school: resolve(__dirname, 'school/index.html'),
        errorPage: resolve(__dirname, '404/index.html'),
      },
    },
  },
});
