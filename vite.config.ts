import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";
=======

>>>>>>> 00913aa (removed few tags)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
  plugins: [react()],
>>>>>>> 00913aa (removed few tags)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
