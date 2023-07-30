import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  site: "https://ridho.one",
  base: "/",
  output: "server",
  adapter: vercel(),
});
