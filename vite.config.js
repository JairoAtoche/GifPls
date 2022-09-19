import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
      '@/components': fileURLToPath(new URL('./src/components/', import.meta.url)),
      '@/pages': fileURLToPath(new URL('./src/pages/', import.meta.url)),
      '@/styles': fileURLToPath(new URL('./src/styles/', import.meta.url))
    }
  },
  plugins: [react()]
})
