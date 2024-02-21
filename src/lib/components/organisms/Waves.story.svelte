<script lang="ts">
	import '$lib/scss/global.scss';
	import Waves from './Waves.svelte';
	
	import type { Hst } from '@histoire/plugin-svelte';
	
	export let Hst: Hst;
</script>

<svelte:component
	this={Hst.Story}
	title="Organisms/Waves"
	layout={{ type: 'single', iframe: true }}
>
	<Waves />
</svelte:component>