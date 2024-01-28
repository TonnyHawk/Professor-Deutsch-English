import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import inject from '@rollup/plugin-inject';
import injectHTML from 'vite-plugin-html-inject';

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
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        intro: resolve(__dirname, 'intro/index.html'),
        school: resolve(__dirname, 'school/index.html'),
      },
    },
  },
});
