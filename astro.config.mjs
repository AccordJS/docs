// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'static',
    site: 'https://accordjs.github.io', // Update with your domain
    base: '/', // update for GitHub Pages repository path
    build: {
        assets: '_astro' // Ensure assets work on GitHub Pages
    }
});
