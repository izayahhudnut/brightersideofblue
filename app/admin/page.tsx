"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button1";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import * as Popover from "@radix-ui/react-popover";
import { DeleteConfirmation } from "@/components/ui/DeleteConfirmation";

type Post = {
  id: number;
  title: string;
  slug: string;
  featuredImage: string;
};

// Helper function to ensure valid image URLs for Next.js Image.
const getValidImageSrc = (src: string) => {
  if (!src.startsWith("/") && !src.startsWith("http")) {
    return "/" + src;
  }
  return src;
};

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [deletePost, setDeletePost] = useState<Post | null>(null);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async () => {
    if (!deletePost) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/post/${deletePost.slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setPosts((prev) => prev.filter((post) => post.id !== deletePost.id));
        setDeletePost(null);
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl ">Posts</h1>
          <Button disabled>
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl ">Posts</h1>
        <Link href="/admin/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Button>
        </Link>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="relative">
            {/* Clicking a post navigates to the correct page */}
            <Link href={`/admin/post/${encodeURIComponent(post.slug)}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={getValidImageSrc(post.featuredImage)}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl line-clamp-2">
                    {post.title}
                  </h2>
                </CardContent>
              </Card>
            </Link>

            {/* 3 Dot Menu for Edit/Delete */}
            <div className="absolute top-2 right-2">
              <Popover.Root open={menuOpen === post.id} onOpenChange={(open: boolean) => setMenuOpen(open ? post.id : null)}>
                <Popover.Trigger asChild>
                  <Button variant="ghost" size="icon" className="p-1">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className="w-32 p-2 space-y-2 bg-white shadow-lg border rounded-md">
                    <Button 
                      variant="ghost" 
                      className="w-full text-left"
                      onClick={() => router.push(`/admin/post/edit/${post.slug}`)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="w-full text-left"
                      onClick={() => setDeletePost(post)}
                    >
                      Delete
                    </Button>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {deletePost && (
        <DeleteConfirmation
          isOpen={true}
          onClose={() => setDeletePost(null)}
          onConfirm={handleDelete}
          deleting={deleting}
          postTitle={deletePost.title}
        />
      )}
    </div>
  );
}
