import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/jackscofield.github.io/",
  plugins: [react()],
})
