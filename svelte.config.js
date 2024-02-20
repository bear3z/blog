import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		}
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md', '.mdx'],
			rehypePlugins: [
				rehypeExternalLinks,
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'prepend',
						properties: {
							className: ['heading-link'],
							title: 'Permalink',
							ariaHidden: 'true'
						},
						content: {
							type: 'element',
							tagName: 'span',
							properties: {},
							children: [{ type: 'text', value: '#' }]
						}
					}
				]
			]
		})
	],
	extensions: ['.svelte', '.md', '.mdx']
};

export default config;
