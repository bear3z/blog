<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
	import ThemeToggle from '$lib/components/molecules/ThemeToggle.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content">
		<div class="copyright">
			© {currentYear} BeAR3Zz ღ Z. Made in Taiwan.
		</div>

		<div class="socials">
			<Socials />
			<ThemeToggle />
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		display: grid;
		height: 340px;
		width: 100%;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
		grid-template-rows: 120px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			gap: 16px;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-weight: 600;

			.socials {
				display: flex;
				align-items: center;
				gap: 24px;
			}
		}
	}
</style>
