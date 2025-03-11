import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      modules: `${path.resolve(__dirname, './src/modules/')}`,
    },
  },
});
