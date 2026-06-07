import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    headers: {
      'Content-Security-Policy': `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://sketchfab.com https://*.sketchfab.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        font-src 'self' data:;
        connect-src 'self' https://sketchfab.com https://*.sketchfab.com https://api.emailjs.com;
        frame-src 'self' https://sketchfab.com https://*.sketchfab.com;
        media-src 'self' https:;
        object-src 'none';
        child-src https://sketchfab.com https://*.sketchfab.com;
        worker-src 'self' blob:;
        script-src-elem 'self' https://sketchfab.com;
        frame-ancestors 'self';
        base-uri 'self';
        form-action 'self';
      `.replace(/\s+/g, ' ').trim()
    }
  }
})