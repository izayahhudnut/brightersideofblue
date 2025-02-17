"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/NavBar";
import Chat from "@/components/Chat";


type Post = {
  title: string;
  featuredImage: string;
  content: string;
  createdAt: string;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch post", err));
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <Skeleton className="h-6 w-1/2 mb-6" />
        <Skeleton className="h-64 w-full mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (!post) return <p className="text-center text-gray-600 py-20">Post not found.</p>;

  return (
    <div className="flex flex-col w-full ">
        <Navbar />
        <Chat />

        <div className="mx-auto py-12 px-4 max-w-4xl w-full"> {/* Changed max-w-3xl to max-w-4xl and added w-full */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

        {/* Featured Image */}
        {post.featuredImage && (
        <div className="w-full h-64 relative mb-6">
          <Image
            src={post.featuredImage}
            alt={post.title}
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
      )}


      {/* Author and Date */}
      <div className="flex items-center space-x-4 text-gray-600 mb-6">
        <Image src="/darklogo.svg" alt="Brighter Side of Blue" width={40} height={40} className="rounded-full" />
        <div>
          <div className="font-semibold text-lg">Brighter Side of Blue</div>
          <div className="text-sm">{formatDate(post.createdAt)}</div>
        </div>
      </div>

    
      {/* Content */}
      <div className=" py-6 bg-white ">
       
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      </div>
    </div>

    </div>
 
  );
}
