import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jaz-computer-profile/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
});
