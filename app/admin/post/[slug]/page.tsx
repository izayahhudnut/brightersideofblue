'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Post = {
  title: string;
  content: string;
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
          console.error("Post not found");
          return;
        }
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch post:", error);
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
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-600">Post Not Found</h1>
        <p>Sorry, the post you&apos;re looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 py-8">
        {post.featuredImage && (
          <div className="relative w-full aspect-video mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={800}
              height={450}
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <h1 className="text-5xl font-bold tracking-tight mb-6 text-zinc-900">{post.title}</h1>

        <div className="text-gray-500 text-sm mb-4">
          Published on {new Date(post.createdAt).toLocaleDateString()}
        </div>

        <div className="prose prose-zinc lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
