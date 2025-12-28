"use client"

import { PostResponse } from "@/lib/types/posts"
import Link from "next/link"
import { use } from "react"
import Cards from "./Cards"

export  default function CardClientList({loadPost}:{loadPost:Promise<PostResponse[]>}){
    
    const posts:PostResponse[] = use(loadPost) 
    console.log(posts)
    return (
        <div className="grid grid-cols-4 gap-4">
      <h2>Welcome to Dashboard</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`dashboard/blog/${post.id}`}>
            <Cards
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
    )
}
