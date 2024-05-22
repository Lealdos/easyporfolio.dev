import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  scripts: [{ src: '/path/to/forma.js', type: 'module' }],
  output: 'hybrid',
  site: 'https://porfolio.dev/'
});