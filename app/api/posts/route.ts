import { query } from "@/lib/db";
import { NextResponse } from "next/server";

// Fetch all posts or a single post by slug
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (slug) {
      // Fetch a single post by slug
      const post = await query("SELECT * FROM posts WHERE slug = $1", [slug]);
      if (post.length === 0) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json(post[0]);
    }

    // Fetch all posts
    const posts = await query("SELECT * FROM posts ORDER BY id DESC");
    return NextResponse.json(posts || []); // Always return valid JSON
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
    try {
      const { title, content, featuredImage } = await req.json();
      const updatedAt = new Date().toISOString(); 
  
      if (!title || !content) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
      }
  
      // Generate a URL-safe slug
      let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-"); // Replace spaces with dashes
  
      let counter = 1;
      while ((await query('SELECT slug FROM posts WHERE slug = $1', [slug])).length > 0) {
        slug = `${slug}-${counter}`;
        counter++;
      }
  
      await query(
        'INSERT INTO posts (title, content, slug, "featuredImage", "updatedAt") VALUES ($1, $2, $3, $4, $5)',
        [title, content, slug, featuredImage, updatedAt]
      );
  
      return NextResponse.json({ message: "Post created successfully", slug }, { status: 201 });
    } catch (error) {
      console.error("Database Error:", error);
      return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
    }
  }
  