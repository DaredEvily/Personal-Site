import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Default base "/" is correct for Vercel (site served at root).
// For GitHub Pages, set VITE_BASE_URL:/Personal-Site/ via env, or use:
//   Vite build --base=/Personal-Site/
export default defineConfig({
  base: process.env.VITE_BASE_URL || "/",
  plugins: [react()],
})
