<div class="logo">
	<svg
		id="logo-name"
		width="723.84009"
		height="86.720268"
		viewBox="0 0 723.84009 106.720269"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<text xml:space="preserve" id="name" transform="translate(-278.77228,-206.83728)">
			<tspan x="275.57227" y="292.17088" id="tspan1319">
				<tspan style="font-size:106.667px;font-family:Fixel;font-weight:700;" id="tspan1317">
					Eddy's Blog
				</tspan>
			</tspan>
		</text>
	</svg>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.logo {
		width: auto;
		height: 100%;

		display: flex;
		gap: 16px;
		align-items: center;

		@include for-phone-only {
			gap: 8px;
		}

		#logo-name {
			width: auto;
			height: 100%;
			max-height: 28px;

			#name {
				transition: all 0.3s ease-in-out;
				fill: var(--color--text);
				animation: svg-text-stroke 3s;
				stroke-width: 2;
				--text-color: var(--color--text);
			}

			@include for-phone-only {
				display: none;
			}
		}

		&:hover {
			#logo-name {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
