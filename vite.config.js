import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Specify the entry point
  resolve: {
    alias: {
      // You can create an alias for your main.jsx file
      // Adjust the path based on your project structure
      '@': path.resolve(__dirname, 'src/main.jsx'),
    },
  },
})
