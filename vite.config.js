import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.js',
  }
});
