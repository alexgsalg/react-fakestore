import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@models': path.resolve(__dirname, './src/models'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@globalStyle': path.resolve(__filename, './src/index.css'),
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'dashes',
      generateScopedName: '[local]__[hash:base64:2]',
      // generateScopedName: '[name]_[local]__[hash:base64:2]',
    },
  },
  plugins: [svgr(), react()],
});
