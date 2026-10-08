import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static output: this is a marketing/launch page, no server rendering
// needed yet. Vercel auto-detects Astro's static output with zero config.
// When the "Avisame primero" form grows into a real lead-capture endpoint,
// switch output to "server" (or "hybrid") and add @astrojs/vercel.
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
