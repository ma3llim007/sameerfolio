import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        // Gzip compression
        compression({
            algorithm: "gzip",
            ext: ".gz",
            deleteOriginFile: false,
        }),
        // Brotli compression
        compression({
            algorithm: "brotliCompress",
            ext: ".br",
            deleteOriginFile: false,
        }),
    ],
});
