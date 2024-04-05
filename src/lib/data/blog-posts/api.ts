import type { PaginatedResponse } from "$lib/utils/types";
import fs from 'fs-extra';
import grayMatter from 'gray-matter';
import path from 'path';
import type BlogPost from './model';
import { frontmatterToBlogPost } from "./model";

const PAGE_SIZE = 12;
const MD_FILES_PATH = path.join(process.cwd(), 'cms/articles');

export const getPosts = async (page?: number, count?: number, showHidden = false): Promise<PaginatedResponse<BlogPost>> => {
  const fileNames = await fs.readdir(MD_FILES_PATH);
  let mdFiles = fileNames.filter((fileName) => fileName.endsWith('.md'));
  mdFiles.reverse();

  if (!showHidden) {
    mdFiles = mdFiles.filter((item) => !item.endsWith('--hidden.md'));
  }

  const paginatedMdFiles = paginate(mdFiles, page, count);

  let blogPosts: BlogPost[] = [];

  for (const mdFile of paginatedMdFiles) {
    const fileContent = await fs.readFile(`${MD_FILES_PATH}/${mdFile}`, 'utf-8');
    const parsedData = grayMatter(fileContent);
    blogPosts.push(frontmatterToBlogPost(parsedData.data, parsedData.content));
  }

  return {
    items: blogPosts,
    totalItems: mdFiles.length,
    totalPages: Math.ceil(mdFiles.length / (count ?? PAGE_SIZE)),
    currentPage: page ?? 1
  }
}

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const allPosts = await getPosts(undefined, undefined, true);
  const post = allPosts.items?.find((post) => post.slug === slug) ?? null;
  if (post) {
    post.relatedPosts = getRelatedPosts(post, allPosts.items);
  }

  return post;
}

export const getAllSlugs = async (): Promise<string[]> => {
  const allPosts = await getPosts(undefined, undefined, true);
  return allPosts.items?.map((post) => post.slug) ?? [];
}

const paginate = (items: any[], page?: number, count?: number): any[] => {
  const pageSize = count ?? PAGE_SIZE;
  const startIndex = page ? (page - 1) * pageSize : 0;
  const endIndex = page ? page * pageSize : count ?? 9999;
  return items.slice(startIndex, endIndex);
}

const getRelatedPosts = (post: BlogPost, allPosts: BlogPost[], count: number = 3): BlogPost[] => {
  const otherPosts = allPosts.filter((otherPost) => !otherPost.hidden && otherPost.slug !== post.slug);
  const rankedPosts = otherPosts.map((otherPost) => {
    return {
      post: otherPost,
      score: otherPost.categories.filter((category) => post.categories.includes(category)).length
    };
  }).sort((a, b) => {
    if (b.score === a.score && b.post.date && a.post.date) {
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    } else {
      return b.score - a.score;
    }
  });

  return rankedPosts.map(p => p.post).slice(0, count);
}
