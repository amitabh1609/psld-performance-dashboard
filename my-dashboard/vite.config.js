import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT: repo name here (must match GitHub)
  base: '/psld-performance-dashboard/',
  plugins: [react()],
})
