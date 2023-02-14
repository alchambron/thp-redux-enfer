import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Social App",
        short_name: "SocialApp",
        description: "Le futur de twitter est entre vos mains",
        theme_color: "#ffffff",
        icons: [
          {
            src: "comment-regular.svg",
            sizes: "150x150",
            type: "image/png",
          }
        ]
      }
  }),
  ],
})
