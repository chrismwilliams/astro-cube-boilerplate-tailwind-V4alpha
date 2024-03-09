import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), sitemap()],
  vite: {
    // option applyBaseStyles doesn't seem to do much atm
    plugins: [tailwindcss({ applyBaseStyles: false })],
  },
});
