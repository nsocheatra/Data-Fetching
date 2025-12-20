import Link from "next/link";
import PostCard from "../components/PostCard";
import { PostResponse } from "../lib/posts";

export default async function Dashboard() {
  //fetcing api here

  const BASE_API = "https://jsonplaceholder.typicode.com/";
  const data = await fetch(`${BASE_API}posts`);
  const posts: PostResponse = await data.json();

  return (
    <div className="grid grid-cols-4 gap-4">
      <h2>Welcome to Dashboard</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`dashboard/blog/${post.id}`}>
            <PostCard
              key={post.id}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
