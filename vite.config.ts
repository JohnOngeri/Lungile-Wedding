import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qrCard: resolve(__dirname, 'qr-card/index.html'),
        qrCardEmerald: resolve(__dirname, 'qr-card-emerald/index.html'),
      },
    },
  },
})
