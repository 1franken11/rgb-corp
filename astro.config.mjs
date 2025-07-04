// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  output: 'static',
  site: 'https://rgb-corporation.com',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt'],
    routing: {
      prefixDefaultLocale: true,
      strategy: 'pathname'
    }
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/react']
    }
  },


});