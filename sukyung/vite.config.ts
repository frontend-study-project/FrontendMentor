import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://cleanuri.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
