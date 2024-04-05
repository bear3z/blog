<script>
	import Logo from '$lib/components/atoms/Logo.svelte';
	import HamburgerMenu from '$lib/components/molecules/HamburgerMenu.svelte';
</script>

<header style="view-transition-name: header">
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo">
			<Logo />
		</a>
		<div class="links">
			<div class="menu-wrapper">
				<HamburgerMenu
					links={[
						{ href: '/blog', text: '文章' },
						{ href: '/', text: '首頁' },
					]}
				/>
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: relative;
		z-index: 9;
		padding: 32px 0;

		@include for-phone-only {
			padding: 24px 0;
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 32px;

			@include for-phone-only {
				gap: 24px;
			}
		}

		.logo {
			height: 44px;

			@include for-phone-only {
				height: unset;
				width: 64px;
			}
		}

		a {
			color: var(--color--text);
		}

		.links {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 32px;

			a {
				text-decoration: none;

				&:hover {
					color: var(--color--primary);
					filter: drop-shadow(0px 0px 3px var(--color--primary));
				}
			}

			@include for-phone-only {
				.menu-wrapper {
					order: 2;
				}
			}
		}
	}
</style>
