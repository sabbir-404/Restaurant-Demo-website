import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  resolve: {
    alias: {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
      "react-dom": "https://esm.sh/react-dom@18.2.0",
      "framer-motion": "https://esm.sh/framer-motion@11.0.8?deps=react@18.2.0,react-dom@18.2.0",
      "lucide-react": "https://esm.sh/lucide-react@0.344.0?deps=react@18.2.0"
    }
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});