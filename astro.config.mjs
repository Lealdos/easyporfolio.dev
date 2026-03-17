// @ts-check

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    integrations: [robotsTxt()],
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'server',
    adapter: vercel(),
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
