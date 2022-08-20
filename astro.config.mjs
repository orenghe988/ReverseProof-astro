import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind(), svelte()]
});