<section id="hero">
	<img
		class="avatar"
		src="https://2.gravatar.com/avatar/f4836e748d2f816b26622fb3c1cf0eff1f0228d8a8705ee151a33e68d9886297?size=512"
		alt="Eddy's avatar"
		width="224" height="224"
	/>

	<h1 class="hello">
		Hi, I'm Eddy!
	</h1>
	<p class="intro">
		我的腦袋總是有太多一閃而過的雜音，<br>
		這裡是紀錄它們的地方 ：）
	</p>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 36px;
		padding: 64px 0;

		@include for-phone-only {
			padding: 42px 0 54px;
		}

		.avatar {
			border-radius: 50%;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			text-align: center;
			width: min(100%);

			@include for-phone-only {
				font-size: 1rem;
			}
		}
	}
</style>
