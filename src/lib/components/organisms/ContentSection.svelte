<script lang="ts">
	export let id: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;

	export let align: 'left' | 'top' | 'right' = 'top';
</script>

<section {id} class="content-section {align}">
	<div class="title-area">
		{#if title || description}
			<div class="text">
				{#if title}
					<h2 class="toc-exclude">
						{title}
					</h2>
				{/if}
				{#if description}
					<p>
						{description}
					</p>
				{/if}
			</div>
		{/if}
		{#if $$slots['button']}
			<div class="button">
				<slot name="button" />
			</div>
		{/if}
	</div>
	<div class="content-area">
		<slot />
	</div>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	.content-section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 48px;
		padding: 72px 0 256px 0;
		position: relative;
		z-index: 1;

		.title-area {
			flex: 2;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			gap: 16px;

			.button {
				margin: 4px 0;
			}

			.text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 8px;
			}
		}
		.content-area {
			flex: 5;

			display: grid;
			place-items: center;
			width: 100%;
		}

		@include for-tablet-landscape-up {
			&.left {
				.title-area {
					order: 1;
				}
				.content-area {
					order: 2;
				}
			}
			&.right {
				.title-area {
					order: 2;
				}
				.content-area {
					order: 1;
				}
			}
			&.top {
				flex-direction: column;
				.title-area {
					order: 1;
					max-width: 600px;
				}
				.content-area {
					order: 2;
					width: 100%;
				}
			}
		}
		@include for-tablet-portrait-down {
			flex-direction: column;
		}
	}
</style>
