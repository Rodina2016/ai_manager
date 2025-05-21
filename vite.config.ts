import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/ai_manager/',
  plugins: [
    svgr({
      include: '**/*.svg?react'
    }),
    react()
  ]
});
