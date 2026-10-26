import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Dev only: the browser calls /api on localhost:5173 and Vite forwards it to the backend,
    // so the API never sees a cross-origin request (no CORS needed while developing).
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET ?? 'http://pokeapi.internal:81',
        changeOrigin: true,
      },
    },
  },
})
