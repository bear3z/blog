<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import Button from '$lib/components/atoms/Button.svelte';
	import Error from '$lib/icons/error.svelte';
</script>

<Header />

<main>
	<div class="error-page">
		<div class="container">
			<h1>Oh no!</h1>
			<div class="svg-wrapper">
				<Error />
			</div>
			<p>看來你跟我一樣笨，在這裡迷路了：（</p>
			<br />
			<Button href="/">返回</Button>
		</div>
	</div>
</main>

<Footer />

<style lang="scss">
	.error-page {
		background: var(--color--page-background);
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;

		.svg-wrapper {
			width: 300px;
			margin-top: -60px;
			margin-bottom: -30px;

			:global(svg) {
				filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));
			}
		}
	}
</style>
