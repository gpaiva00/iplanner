import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/pages/Home.tsx'),
        login: resolve(__dirname, 'src/pages/Login.tsx')
      }
    }
  }
})
