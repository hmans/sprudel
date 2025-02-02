import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://github.com/vitejs/vite/issues/6215
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  }
})
