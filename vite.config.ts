import { version } from "./package.json";

import { defineConfig } from "vitest/config";

import { sveltekit } from "@sveltejs/kit/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => {
    /**
     * Vite environment variables.
     */
    process.env = {
        ...process.env,
        VITE_APP_VERSION: version
    };

    return {
        build: {
            chunkSizeWarningLimit: 8000
        },

        test: {
            include: ["src/**/*.{test,spec}.{js,ts}"]
        },

        server: {
            port: 3000,
            host: "0.0.0.0"
        },

        preview: {
            port: 3000,
            host: "0.0.0.0"
        },

        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            },
            devSourcemap: mode === "development"
        },

        plugins: [
            sveltekit(),
            ViteImageOptimizer({
                test: /\.(svg)$/i,
                logStats: false
            })
        ],

        define: {
            APP_VERSION: JSON.stringify(version),
            API_URL: JSON.stringify(mode === "production"
                ? "/api"
                : "http://127.0.0.1:8080"
            )
        }
    };
});
