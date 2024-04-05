import { getPosts } from '$lib/data/blog-posts/api';

export async function load() {
  const posts = (await getPosts(0, 4)).items;

  return { posts };
}
