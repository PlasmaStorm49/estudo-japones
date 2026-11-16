import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// No GitHub Pages o site fica em https://plasmastorm49.github.io/estudo-japones/,
// então o build (e o `vite preview` do build) usa esse caminho como base. Em desenvolvimento, a base é "/".
export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? "/estudo-japones/" : "/",
  plugins: [react()],
  server: { port: 5180 },
}));
