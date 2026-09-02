<script lang="ts">
	import ListIcon from '$lib/icons/list.svelte';
	import Toc from 'svelte-toc';
</script>

<noscript style="display: none;">
	<!-- Hide if JavaScript is disabled -->
	<!-- Hide if JavaScript is disabled -->
	<style>
		.table-of-contents {
			display: none !important;
		}
	</style>
</noscript>

<div class="table-of-contents">
	<div class="wrapper">
		<Toc keepActiveTocItemInView={false} breakpoint={900} blurParams={{ duration: 0 }} title="">
			{#snippet openTocIcon()}
				<ListIcon />
			{/snippet}
		</Toc>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/mixins' as *;

	.table-of-contents {
		position: sticky;
		top: 0;
		width: 100%;
		height: fit-content;
		padding: 20px;
		z-index: 1;
		backdrop-filter: blur(10px);
		background-color: rgba(var(--body-background-color-rgb), 0.8);
		border-radius: 10px;

		@include for-tablet-portrait-down {
			position: fixed;
			inset: auto;
			right: 0;
			bottom: 0;
			width: 0;
			height: 0;
			padding: 0;
			background: none;
			box-shadow: none;
			border-radius: 0;
			overflow: visible;
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			filter: none;
			transform: none;
			z-index: 2;
		}
	}

	.wrapper {
		--toc-active-bg: transparent;
		--toc-active-color: var(--color--primary);
		--toc-li-hover-color: var(--color--primary);
		--toc-li-hover-bg: rgba(var(--color--card-background-rgb), 0.3);
		--toc-overflow: auto;
		--toc-font-size: 1rem;
		--toc-padding: 0;
		--toc-li-margin: 5px 0;
		--toc-min-width: 0;
		--toc-width: 100%;
		--toc-desktop-sticky-top: 0;
		--toc-desktop-max-width: 100%;
		--toc-li-font-size-base: 2ex;
		--toc-li-font-size-min: 1.6ex;
		--toc-li-font-size-step: 0.2ex;
		--toc-mobile-bottom: 10px;
		--toc-mobile-right: 10px;
		--toc-mobile-width: min(calc(100dvw - 20px), 324px);
		--toc-mobile-bg: var(--color--card-background);
		--toc-mobile-shadow: var(--card-shadow-hover);
		--toc-mobile-border-radius: 16px;
		--toc-mobile-btn-bg: var(--color--primary);
		--toc-mobile-btn-color: var(--color--primary-contrast);
		--toc-mobile-btn-padding: 0;
		--toc-mobile-btn-font: inherit;
		--toc-mobile-btn-bottom: 0;
		--toc-mobile-btn-right: 0;

		@include for-tablet-portrait-down {
			--toc-width: auto;
			width: auto;
			height: auto;
		}

		:global(.toc ol li) {
			border-radius: 6px;
		}
	}

	@include for-tablet-portrait-down {
		:global(aside.toc.mobile) {
			--toc-ol-padding: 0 40px 0 0;
			--toc-max-height: min(70dvh, 480px);

			:global(button) {
				width: 48px;
				height: 48px;
				margin: 0;
				border-radius: 16px;
				display: grid;
				place-items: center;
				overflow: hidden;
				appearance: none;
				box-shadow: var(--card-shadow-hover);
				color: var(--color--primary-contrast);
				background: var(--color--primary);
			}

			:global(button svg) {
				width: 24px;
				height: 24px;
				max-width: 24px;
				max-height: 24px;
			}

			:global(nav) {
				z-index: 3;
				background: var(--color--card-background);
				box-shadow: var(--card-shadow-hover);
				border-radius: 16px;
				padding: 12px 8px;
				color: var(--color--text);
			}
		}
	}
</style>
