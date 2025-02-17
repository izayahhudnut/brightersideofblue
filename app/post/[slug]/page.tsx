"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

type Post = {
  id: number;
  title: string;
  content: string;
  slug: string;
  featuredImage: string;
  createdAt: string;
};

export default function ViewPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.error("Error fetching post:", data.error);
          setPost(null);
        } else {
          setPost(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Skeleton className="h-60 w-full rounded-lg mb-8" />
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p className="text-zinc-500 mt-2">The post you are looking for does not exist.</p>
      </div>
    );
  }

  // Format the createdAt date
  const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 py-8">
        {post.featuredImage && post.featuredImage.trim() !== "" && (
          <div className="relative w-full aspect-video mb-8">
            <Image 
              src={post.featuredImage}
              alt={post.title} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <h1 className="text-5xl font-bold tracking-tight mb-2 text-zinc-900">
          {post.title}
        </h1>
        <p className="text-sm text-zinc-500 mb-6">{formattedDate}</p>

        <div className="prose prose-zinc lg:prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
}
