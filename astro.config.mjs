// @ts-check
import { defineConfig } from 'astro/config';
// import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // adapter: cloudflare(),
  site: 'https://proscriptacademy.com',
  integrations: [react(), sitemap()],
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
