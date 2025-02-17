import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

// Define the Params type (still conceptually useful, but not directly used in function signatures anymore)


/**
 * PUT - Update a post by slug
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // Updated PUT signature to use Promise
) {
  try {
    const { slug } = await params; // Await params in PUT
    const { title, content, featuredImage } = await request.json();

    await query(
      `UPDATE posts SET title = $1, content = $2, "featuredImage" = $3 WHERE slug = $4`,
      [title, content, featuredImage, slug]
    );

    return NextResponse.json({ message: "Post updated successfully" });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

/**
 * GET - Fetch a post by slug
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // GET signature already updated to Promise in previous steps
) {
  const { slug } = await params; // Await params in GET

  try {
    const post = await query("SELECT * FROM posts WHERE slug = $1", [slug]);

    if (post.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post[0]);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

/**
 * DELETE - Delete a post by slug
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> } // Updated DELETE signature to use Promise
) {
  try {
    const { slug } = await params; // Await params in DELETE
    await query("DELETE FROM posts WHERE slug = $1", [slug]);

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}