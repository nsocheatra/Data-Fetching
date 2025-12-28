import { PostResponse } from "../types/posts";

  const BASE_API = process.env.NEXT_PUBLIC_API_URL;

// fetcing Post API
export async function loadPost() {
    const data= await fetch (`${BASE_API}posts`);
    const posts:PostResponse[] = await data.json();
    return posts;
    
    
  }

//Function to get detail post ID
export async function fetchDetialPost(id: string) {
  const data = await fetch(`${BASE_API}posts/${id}`);
  const post = await data.json();
  return post;
}