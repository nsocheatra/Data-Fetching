import PostCard from "@/app/components/PostCard";

async function fetchDetialPost(id: string) {
  const BASE_API = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${BASE_API}posts/${id}`);
  const post = await data.json();
  return post;
}

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
