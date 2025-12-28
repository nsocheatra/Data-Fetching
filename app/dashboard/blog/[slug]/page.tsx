import PostCard from "@/components/PostCard";
import { fetchDetialPost } from "@/lib/data/fetchPost";


export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchDetialPost(slug);
  return (
    <div>
      {
        <PostCard
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      }
    </div>
  );
}
