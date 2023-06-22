import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    federation({
      name:'container-app',
      remotes:{
        repository_app: "http://localhost:5174/assets/remoteEntry.js"
      },
      shared: ['vue','pinia','vue-router'],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target:'esnext',
    minify: false,

  },
  preview:{
    host:'localhost',
    port:5173,
    strictPort:true
  },

})
