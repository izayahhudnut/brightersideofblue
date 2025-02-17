"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";

export default function EditPost() {
  const router = useRouter();
  const { slug } = useParams();
  const [title, setTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isChangingImage, setIsChangingImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-lg p-4 min-h-[300px] border border-gray-300 rounded-lg",
      },
    },
  });

  // Fixing missing dependency in the useEffect
  useEffect(() => {
    if (!editor) return; // Ensures editor exists before using commands

    fetch(`/api/post/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setFeaturedImage(data.featuredImage);
        editor?.commands.setContent(data.content || "");
      });
  }, [slug, editor]); // ✅ Add `editor` as a dependency

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(`/api/post/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          featuredImage,
        }),
      });

      if (!res.ok) throw new Error("Failed to update post");
      router.push("/admin");
    } catch (error) {
      console.error("Failed to update post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-4xl mx-auto py-8">
      <div className="p-6 bg-white shadow-md rounded-lg space-y-8">
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-medium border-none px-0 focus-visible:ring-0"
        />

        {/* Image Display & Change Button */}
        <div className="space-y-4">
          {!isChangingImage ? (
            <div className="relative h-48 rounded-lg overflow-hidden border">
              <Image
                src={featuredImage}
                alt="Featured image"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
              <Button
                type="button"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() => setIsChangingImage(true)}
              >
                Change Image
              </Button>
            </div>
          ) : (
            <ImageUpload onImageUpload={(url) => { setFeaturedImage(url); setIsChangingImage(false); }} />
          )}
        </div>

        <EditorContent editor={editor} />

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting || !title.trim()}>
            {isSubmitting ? "Updating..." : "Update Post"}
          </Button>
        </div>
      </div>
    </form>
  );
}
