import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {},
  },
  plugins: [
    react(),
    basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: [
        'favicon.ico',
        '/icons/icon-192x192.png',
        '/icons/icon-512x512.png',
      ],
      manifest: {
        name: '나만의 작은 시니또',
        short_name: '시니또',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#485EEE',
        icons: [
          {
            src: 'icons/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'icons/icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: 'icons/icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sw: './sw.js',
      },
    },
  },
});
