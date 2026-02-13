import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
      "react-dom": "https://esm.sh/react-dom@18.2.0",
      "react-router-dom": "https://esm.sh/react-router-dom@6.22.3?external=react,react-dom",
      "framer-motion": "https://esm.sh/framer-motion@11.0.8?external=react,react-dom",
      "lucide-react": "https://esm.sh/lucide-react@0.344.0"
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});