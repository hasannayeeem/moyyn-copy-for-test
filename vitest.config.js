import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        loader: "jsx",
        include: /.*\/.*\.jsx?$/,
        exclude: [],
    },

    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./utils/test-utils"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./"),
        },
    },
});