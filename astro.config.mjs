// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import partytown from '@astrojs/partytown';

import htmx from 'astro-htmx';

import robotsTxt from 'astro-robots-txt';

import compressor from 'astro-compressor';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://mcds.moe",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), mdx(), partytown(), htmx(), robotsTxt({}), compressor({
    brotli: true,
    gzip: true,
  }), sitemap()],

  experimental: {
    clientPrerender: true,
  },
  prefetch: {
    defaultStrategy: 'load',
    prefetchAll: true,
  },
});