import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	resolve: {
		alias: {
			'@/public': path.resolve(__dirname, './public/'),
			'@/assets': path.resolve(__dirname, './src/assets/'),
			'@/components': path.resolve(__dirname, './src/components/'),
			'@/router': path.resolve(__dirname, './src/config/router/'),
			'@/context': path.resolve(__dirname, './src/context/'),
			'@/hooks': path.resolve(__dirname, './src/hooks/'),
			'@/layouts': path.resolve(__dirname, './src/layouts/'),
			'@/pages': path.resolve(__dirname, './src/pages/'),
			'@/services': path.resolve(__dirname, './src/services/'),
			'@/styles': path.resolve(__dirname, './src/styles/'),
		},
	},
	plugins: [react()],
});
