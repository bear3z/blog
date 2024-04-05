<script>
	import InstagramIcon from '$lib/icons/socials/instagram.svelte';
	import GitHubIcon from '$lib/icons/socials/github.svelte';
</script>

<div class="socials">
	<a
		href="https://www.instagram.com/___yu.xuan"
		target="_blank"
		rel="noopener noreferrer"
		title="Eddy's Instagram profile"
	>
		<InstagramIcon />
	</a>
	<a
		href="https://github.com/bear3z"
		target="_blank"
		rel="noopener noreferrer"
		title="Eddy's Github profile"
	>
		<GitHubIcon />
	</a>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
	
	.socials {
		display: flex;
		align-items: center;
		gap: 24px;

		a {
			transition: all 0.3s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
