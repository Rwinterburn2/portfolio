import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-rwinterburn2-portfolio-lu7oy2kamtb.ws-eu117.gitpod.io', "5174-rwinterburn2-portfolio-lu7oy2kamtb.ws-eu117.gitpod.io"],
  },
})
