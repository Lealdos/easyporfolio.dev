// @ts-check

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), robotsTxt()],
    output: 'server',
    adapter: netlify(),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
