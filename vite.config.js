import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base relative : le meme build fonctionne sur GitHub Pages (/portfolio/) et sur Vercel (/).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
