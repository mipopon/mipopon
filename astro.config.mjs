// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defaultLang, languages } from './src/i18n/ui';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mipopon.com',

  i18n: {
      locales: Object.keys(languages),
      defaultLocale: defaultLang,
      routing: {
          prefixDefaultLocale: true
      }
  },

  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});