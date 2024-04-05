import adapter from '@zeabur/svelte-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path }) => {
				if (path.indexOf('.avif') || path.indexOf('.webp') || path.indexOf('.png')) {
					return;
				}
			}
		}
	},
	preprocess: [vitePreprocess()],
	extensions: ['.svelte', '.md']
};

export default config;
