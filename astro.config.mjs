// @ts-check

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  output: 'server',

  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
      routing: {
          prefixDefaultLocale: true,
      },
  },

  adapter: vercel(),
});