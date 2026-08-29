import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* Caminhos relativos permitem publicar na raiz ou em uma subpasta. */
  base: "./",
  build: {
    /* O aplicativo não precisa transformar JavaScript para navegadores
       antigos. Manter sintaxe moderna reduz bytes e trabalho de parsing. */
    target: "es2022",
    minify: "oxc",
    modulePreload: { polyfill: false },
    rolldownOptions: {
      output: {
        /* Dados grandes e estáveis ficam em arquivos próprios. Além de evitar
           um monólito, uma alteração visual deixa o cache de cor/i18n intacto. */
        codeSplitting: {
          groups: [
            { name: "react", test: /node_modules\/(react|react-dom)\//, priority: 30 },
            { name: "icons", test: /node_modules\/lucide-react\//, priority: 20 },
            { name: "color", test: /\/src\/color\.ts$/, priority: 10 },
            { name: "i18n", test: /\/src\/i18n\.ts$/, priority: 10 },
          ],
        },
      },
    },
  },
});
