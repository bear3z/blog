import { defaultColors, defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	theme: {
		title: 'Histoire for Eddy blog',
		colors: {
			primary: defaultColors.blue
		}
	}
});