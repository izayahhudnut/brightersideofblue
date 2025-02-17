"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Clock } from "lucide-react";
import Navbar from "@/components/NavBar";
import Chat from "@/components/Chat";




type Post = {
  id: number;
  title: string;
  slug: string;
  featuredImage: string;
  content: string;
  createdAt: string;
  readingTime?: string;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Estimate reading time based on content length
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // Add reading time to each post
        const postsWithReadingTime = data.map((post: Post) => ({
          ...post,
          readingTime: calculateReadingTime(post.content),
        }));
        setPosts(postsWithReadingTime);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch posts", err));
  }, []);

  return (
    <div className="flex flex-col">
          <Navbar/>
          <Chat />

            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <Image 
          src="/darklogo.svg" 
          alt="Brighter Side of Blue" 
          width={80} 
          height={80} 
          className="mx-auto mb-6 rounded-full"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Brighter Side of Blue</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Insights and stories about mental health, personal growth, and finding light in the darkness.
        </p>
      </div>

      {/* Posts Section */}
      <div className="space-y-12">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border-b border-gray-200 pb-12 last:border-0">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
          ))
        ) : posts.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <article 
              key={post.id} 
              className="border-b border-gray-200 pb-12 last:border-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group">
                  {/* Post Header */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-gray-700">
                    {post.title}
                  </h2>
                  
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="w-full aspect-video relative rounded-lg overflow-hidden mb-6">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Post Excerpt */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {post.content.replace(/<[^>]*>?/gm, "").slice(0, 280)}...
                  </p>
                  
                  {/* Read More Link */}
                  <div className="mt-4">
                    <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
    </div>
    
  );
}