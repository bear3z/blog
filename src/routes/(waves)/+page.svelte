<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';

	import type BlogPost from '$lib/data/blog-posts/model';

	export let data: { posts: BlogPost[]; };

	let { posts } = data;
</script>

<div class="container">
	<Hero />

	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';
</style>
