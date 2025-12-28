import { PostResponse } from "@/lib/types/posts";

export default function PostCard({
  userId = 0,
  id = 0,
  title = "Default Title",
  body = "Default Description",
}: PostResponse) {
  return (
    <div>
      <div className="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg py-4 px-8">
        <h2 className="text-lg mb-3 font-semibold line-clamp-1">Title: {title}</h2>
        <p className="mb-2 text-sm text-gray-600 line-clamp-4">Description: {body}</p>
        <p>
          {userId} | {id}
        </p>
      </div>
    </div>
  );
}
