import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],  // Enables React support
  server: {
    port: 5173,       // Default Vite port
    open: true        // Automatically open browser
  }
});