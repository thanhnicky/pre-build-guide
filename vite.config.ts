import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
        serverDir: "./server",
        routeRules: {
          "/**": {
            headers: {
              "X-Frame-Options": "SAMEORIGIN",
              "X-Content-Type-Options": "nosniff",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
              "X-XSS-Protection": "1; mode=block",
            },
          },
        },
      }),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 85 },
        pngquant: { quality: [0.8, 0.9] },
        webp: { quality: 85 },
        svgo: {
          plugins: [
            { name: "removeViewBox", active: false },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),
    ],
  },
});
