import { Post as PostType } from "@/lib/types";
import { fetchPosts } from "@/lib/api";
import PostList from "./Post-list"
import { PaginationWithLinks } from "./ui/pagination-with-links";

interface PostProps {
  searchParams: { get: (key: string) => string | null };
}

async function Post({ searchParams }: PostProps) {
  const postsPerPage = parseInt(searchParams.get("pageSize") || "3");
  const currentPage = parseInt(searchParams.get("page") || "1");

  const { posts, totalPosts } = await fetchPosts(postsPerPage);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      <PostList posts={posts} />
      <div className="mt-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
        />
      </div>
    </div>
  );
}

export default Post;
