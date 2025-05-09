// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://offcarlospetit.github.io', // 🔒 debe ser https
  base: '/', // ✅ para usar en la raíz del dominio
  integrations: [mdx(), sitemap(), tailwind(), icon()],
});