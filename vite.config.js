import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/emotionalScrollbar/',
  server: {
    port: 3000,
    host: true
  }
}) 