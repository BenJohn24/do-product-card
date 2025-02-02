/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude:  ['**/*.svg', '**/*.jpg', '**/*.png'],
  build: {
    assetsInlineLimit: 8192,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  css: {
    modules: {
      // Si deseas configurar la forma en que se generan los nombres de las clases
      localsConvention: "camelCase",
      generateScopedName: '[local]_[hash:base64:2]'
    }
  },

})
