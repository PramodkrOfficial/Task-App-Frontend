
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        // target: 'http://localhost:8080',

        // target: 'https://notesapp-new.onrender.com/',

        target: 'https://notesapp-p9v1.onrender.com/',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})