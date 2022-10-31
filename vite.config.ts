import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassGlobImports from "vite-plugin-sass-glob-import"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassGlobImports()]
})
