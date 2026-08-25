// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://stenku.biz.id',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [sitemap()],
});
