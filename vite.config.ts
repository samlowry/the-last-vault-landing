import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare Pages: base должен быть '/' для корня
export default defineConfig({
  base: '/', // Cloudflare Pages root
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}) 