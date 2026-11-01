import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Crucial for GitHub Pages: tells Vite that assets live under /Portfolio/ instead of root /
  base: '/Portfolio/',
  plugins: [react()],
});