import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), robotsTxt()],
    site: 'https://Lealdos.github.io',
    output: 'server',
    adapter: vercel(),
});
