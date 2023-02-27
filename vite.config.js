import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Myportfolio/',
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        react(),
    ],
});
