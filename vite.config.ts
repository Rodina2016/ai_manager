import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 5173,
    allowedHosts: ['f8e4-181-81-82-138.ngrok-free.app']
  },
  plugins: [
    svgr({
      include: '**/*.svg?react'
    }),
    react()
  ]
});
