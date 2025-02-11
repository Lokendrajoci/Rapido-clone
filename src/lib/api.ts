import { Post } from "./types";

export async function fetchPosts(perPage: number) {
  const res = await fetch(`https://dummyjson.com/products?limit=${perPage}`);
  const data = await res.json();
  const posts: Post[] = data.products || [];
  const totalPosts = data.total || 0;
  return { posts, totalPosts };
}
