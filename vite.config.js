import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@/public': fileURLToPath(new URL('./public/', import.meta.url)),
			'@/assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
			'@/layouts': fileURLToPath(new URL('./src/layouts/', import.meta.url)),
			'@/components': fileURLToPath(
				new URL('./src/components/', import.meta.url)
			),
			'@/pages': fileURLToPath(new URL('./src/pages/', import.meta.url)),
			'@/styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
			'@/router': fileURLToPath(
				new URL('./src/config/router/', import.meta.url)
			),
			'@/context': fileURLToPath(new URL('./src/context/', import.meta.url)),
		},
	},
	plugins: [react()],
});
