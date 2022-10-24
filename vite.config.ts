import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => [
          'q-card-section',
          'q-input',
          'q-btn',
          'q-card-actions',
          'q-card',
          'q-dialog',
          'swiper',
          'swiper-slide',
          'q-separator'
        ].includes(tag),
      }
    }
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/styles': resolve(__dirname, './src/styles'),
      '@/views': resolve(__dirname, './src/views'),
      '@/store': resolve(__dirname, './src/store'),
      '@/router': resolve(__dirname, './src/router'),
      '@/@type': resolve(__dirname, './src/@type')
    }
  },
  test: {
    environment: 'happy-dom',
  },
})
