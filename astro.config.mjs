// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

//import htmx from 'astro-htmx';

import robotsTxt from 'astro-robots-txt';

import sitemap from '@astrojs/sitemap';

import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://mcds.moe",
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
  },

  /**i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    fallback: {
      'de': 'en',
    },
    routing: {
      fallbackType: 'redirect',
      redirectToDefaultLocale: true,
    }
  },**/

  integrations: [icon(), mdx(), /**htmx()**/, robotsTxt({}), compress({
    JavaScript: true,
    CSS: true,
    HTML: true,
    SVG: true,
    Image: true,
    JSON: true,
  }), sitemap()],

  /**experimental: {
    clientPrerender: true,
  },**/
  /**prefetch: {
    defaultStrategy: 'load',
    prefetchAll: true,
  },**/
});