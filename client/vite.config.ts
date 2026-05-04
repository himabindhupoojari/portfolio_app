// import { defineConfig } from 'vite'
// import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
// })

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react(),    
  ],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
    dedupe: ["react", "react-dom"], // ✅ prevents duplicate react
  },
  css: {
    preprocessorOptions: {
      scss: {
         additionalData: `@use 'sass:color'; @use "@styles/main.scss" as *;`,
      },
    },
  },
});