import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path';
import { createRequire } from 'node:module';
import { viteStaticCopy } from 'vite-plugin-static-copy';
const require = createRequire(import.meta.url);
const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');

export default defineConfig({
  plugins: [
    [react()],
   viteStaticCopy({
     targets: [
       {
         src: cMapsDir,
         dest: '',
       },
     ],
   }),
  ],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'mjs', 'jsx'],
    },
  },
});