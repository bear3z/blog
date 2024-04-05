<script lang="ts">
	import '$lib/scss/global.scss';
	import { beforeNavigate, afterNavigate, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let root: HTMLElement;
	onMount(async () => {
		root = document.getElementsByTagName('html')[0];
		root.classList.add('smooth-scroll');

		if (window) {
			// @ts-ignore
			const { plausible } = window;
			if (plausible) {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					plausible('pageview', { props: { theme_preference: 'Dark' } });
				} else if (
					window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: light)').matches
				) {
					plausible('pageview', { props: { theme_preference: 'Light' } });
				} else {
					plausible('pageview', { props: { theme_preference: 'None' } });
				}
			}
		}
	});

	beforeNavigate(() => {
		root.classList.remove('smooth-scroll');
	});
	
	afterNavigate(() => {
		root.classList.add('smooth-scroll');
	});

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot />
