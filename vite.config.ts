import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/_admin/",
  plugins: [
    react(),
    cloudflare({
      configPath: "./wrangler.toml",
      persistState: false
    })
  ]
});
