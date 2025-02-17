"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button1";
import { ImageUpload } from "@/components/ui/image-upload";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold as BoldIcon, Italic as ItalicIcon, Redo, Undo } from "lucide-react";
import Image from "next/image";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="border-b p-2 flex gap-2 bg-zinc-100 rounded-t-lg">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-gray-200" : ""}
      >
        <BoldIcon className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "bg-gray-200" : ""}
      >
        <ItalicIcon className="h-4 w-4" />
      </Button>

      <div className="h-4 w-px bg-border mx-2" />

      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().undo().run()}>
        <Undo className="h-4 w-4" />
      </Button>

      <Button type="button" variant="ghost" size="sm" onClick={() => editor.chain().focus().redo().run()}>
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none p-4 min-h-[300px] bg-white border border-zinc-300 rounded-b-lg shadow-sm",
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          featuredImage,
          author: "Brighter Side of Blue",
          authorImage: "/logo.svg",
        }),
      });

      if (!res.ok) throw new Error("Failed to create post");
      router.push("/admin");
    } catch (error) {
      console.error("Failed to create post:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto py-8">
      <div className="p-6 bg-white shadow-md rounded-lg space-y-8">
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-medium border-none px-0 focus-visible:ring-0"
        />

        <div className="space-y-4">
          {!featuredImage && <ImageUpload onImageUpload={setFeaturedImage} />}

          {featuredImage && (
            <div className="relative h-48 rounded-lg overflow-hidden border">
              <Image
                src={featuredImage}
                alt="Featured image preview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2 bg-black text-white"
                onClick={() => setFeaturedImage("")}
              >
                Change Image
              </Button>
            </div>
          )}
        </div>

        <div className="border rounded-lg overflow-hidden">
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </div>

        <div className="flex justify-end">
          <Button type="submit" size="lg" disabled={isSubmitting || !title.trim()}>
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </Button>
        </div>
      </div>
    </form>
  );
}
