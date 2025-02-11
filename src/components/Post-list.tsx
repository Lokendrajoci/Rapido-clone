import { Post } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{`${post.title} (post ${post.id})`}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.description}</p>
            {post.images && post.images.length > 0 ? (
              <Image
                src={post.images[0]}
                alt={post.title}
                width={200}
                height={200}
                className="rounded-md"
              />
            ) : (
              <p>No image available</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}